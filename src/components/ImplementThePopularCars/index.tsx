import ImplementThePopularCarsCart from "../ImplementThePopularCarsCart";
import "../ImplementThePopularCars/style.scss"






export const ImplementThePopularCar = () => {
    return (
        <div className="popular-car-cart-header-main">
            <div className="popular-car-cart-header">
                <p className="popular-car-popular-car-text">Popular Car</p>
                <p className="popular-car-view-all">View All</p>
            </div>
            <div className="popular-car-cart-all-car">
                <ImplementThePopularCarsCart />
            </div>
        </div>
    )
}

