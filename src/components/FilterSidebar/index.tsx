'use client';
import './styles.scss';
import { FilterSideBarProps } from '@/types/typeList';
import { FilterInput } from '@/components/componentList';
import { useState, useRef, useEffect } from 'react';
import { calculateNumberOfInputs } from '@/utils/filterUtils';
import { useFetchCars } from '@/app/hooks/fetchCars';
import { Loading } from '../Loading';
import AdminDoubleArrow from '@/app/images/admin-double-arrow.svg';

const FilterSidebar: React.FC<FilterSideBarProps> = ({ onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(100);
  const [carInputs, setCarInputs] = useState<
    { label: string; count: number }[]
  >([]);
  const [capacityInputs, setCapacityInputs] = useState<
    { label: string; count: number }[]
  >([]);

  const { data, error, isLoading } = useFetchCars();

  const sidebarRef = useRef<HTMLElement>(null);
  const isOpenRef = useRef<boolean>(true);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && !error) {
      const newCarInputs: { label: string; count: number }[] = [];
      const newCapacityInputs: { label: string; count: number }[] = [];

      calculateNumberOfInputs(newCarInputs, 'carType', data);
      calculateNumberOfInputs(newCapacityInputs, 'capacity', data);

      setCarInputs(newCarInputs);
      setCapacityInputs(newCapacityInputs);
    }
  }, [data, error]);

  if (error) {
    return <Loading />;
  }

  if (isLoading || data === undefined) {
    return <Loading />;
  }

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prevTypes => {
      const updatedTypes = prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type];

      onFilterChange({
        type: updatedTypes,
        capacity: selectedCapacity,
        maxPrice: priceRange,
      });

      return updatedTypes;
    });
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity(prevCapacities => {
      const updatedCapacities = prevCapacities.includes(capacity)
        ? prevCapacities.filter(c => c !== capacity)
        : [...prevCapacities, capacity];

      onFilterChange({
        type: selectedTypes,
        capacity: updatedCapacities,
        maxPrice: priceRange,
      });

      return updatedCapacities;
    });
  };

  const handlePriceChange = (price: number) => {
    setPriceRange(price);

    onFilterChange({
      type: selectedTypes,
      capacity: selectedCapacity,
      maxPrice: priceRange,
    });
  };

  const slideFilterSidebar = () => {
    if (sidebarRef.current) {
      isOpenRef.current
        ? (sidebarRef.current.style.marginLeft = '-35%') &&
          (btnRef.current!.style.transform =
            'rotate(180deg) translate(-100%,0px) ')
        : (sidebarRef.current.style.marginLeft = ' 0%') &&
          (btnRef.current!.style.transform = 'rotate(0deg) translateX(0%)');
    }
    isOpenRef.current = !isOpenRef.current;
    console.log(isOpenRef);
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className="fltr-sdbr"
        style={{ marginLeft: '0%' }}
      >
        <div className="switchBtn" onClick={slideFilterSidebar} ref={btnRef}>
          <AdminDoubleArrow width={20} height={20} />
        </div>

        <FilterInput
          title="TYPE"
          inputType="checkbox"
          options={carInputs}
          selectedOptions={selectedTypes}
          handleCheckboxChange={handleTypeChange}
        />
        <FilterInput
          title="CAPACITY"
          inputType="checkbox"
          options={capacityInputs}
          selectedOptions={selectedCapacity}
          handleCheckboxChange={handleCapacityChange}
        />

        <FilterInput
          title="PRICE"
          inputType="range"
          selectedOptions={priceRange}
          handleRangeChange={handlePriceChange}
        />
      </aside>
    </>
  );
};

export default FilterSidebar;
