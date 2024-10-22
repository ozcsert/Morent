'use client'
import ImplementThePopularCarsCart from "../ImplementThePopularCarsCart";
import "../ImplementThePopularCars/style.scss"
import { dummyCars } from '@/constants/index';
import { useState } from "react";









export const ImplementThePopularCar = () => {


    const [carView, setcarView] = useState<number>(4);

    const popularCars = dummyCars.slice(0, carView);

    console.log(popularCars)

    // const handleViewCars = () => {
    //     setcarView(8)
    // }

    // const handleViewLess = () => {
    //     setcarView(4)
    // }
    const handleViewCar = (carCount: number) => {
        setcarView(carCount)
    }

    return (
        <div className="popular-car-main-box">
            <div className="popular-car-cart-header-main">
                <div className="popular-car-cart-header">
                    <p className="popular-car-popular-car-text">Popular Car</p>
                    {carView === 4 && <p className="popular-car-view-all" onClick={() => handleViewCar(8)}>View All</p>}
                    {carView === 8 && <p className="popular-car-view-all" onClick={() => handleViewCar(4)}>View Less</p>}
                </div>
                <div className="popular-car-cart-all-car">
                    {popularCars.map((car) => <ImplementThePopularCarsCart key={car.id} cars={car} />)}
                </div>
            </div>
        </div>

    )
}

