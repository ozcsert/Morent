'use client';
import './styles.scss';
import { FilterSideBarProps } from '@/types/typeList';
import { FilterInput } from '@/components/componentList';
import { useState, useRef, useEffect } from 'react';
import { calculateNumberOfInputs } from '@/utils/filterUtils';
import { useFetchCars } from '@/app/hooks/fetchCars';
import Spinner from '../Spinner'; // assuming you have a Spinner component

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

  // Fetch data from the custom hook
  const { data, error, isLoading } = useFetchCars();

  // Sidebar toggle state
  const sidebarRef = useRef<HTMLElement>(null);
  const isOpenRef = useRef<boolean>(false);

  // Handle the state updates for car types and capacities when data is available
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

  // Show error message if there is an error fetching data (but exclude 404)
  if (error && !(error === 404)) {
    return (
      <div className="error" style={{ padding: '2rem', textAlign: 'center' }}>
        {'Much picky? No Batmobile here sorry.'}
      </div>
    );
  }

  // Show loading spinner if data is still being fetched
  if (isLoading || data === undefined) {
    return (
      <div className="loading" style={{ height: '800px' }}>
        <Spinner size={36} color="#0099ff">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="pulse-dot" />
          ))}
        </Spinner>
      </div>
    );
  }

  // Handlers for updating filters
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
      maxPrice: price,
    });
  };

  // Handle sidebar slide toggle
  const slideFilterSidebar = () => {
    if (sidebarRef.current) {
      isOpenRef.current
        ? (sidebarRef.current.style.marginLeft = '-300px')
        : (sidebarRef.current.style.marginLeft = '0px');
    }
    isOpenRef.current = !isOpenRef.current;
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className="fltr-sdbr"
        style={{ marginLeft: '-300px' }}
      >
        <button className="sidebar-btn" onClick={slideFilterSidebar}>
          button
        </button>
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
