import ImplementThePopularCarsCart from "../ImplementThePopularCarsCart";
import "../ImplementThePopularCars/style.scss"
import { dummyCars} from '@/constants/index';








export const ImplementThePopularCar = () => {

    const popularCarArray = dummyCars.slice(0,4);

    return (
        <div className="popular-car-cart-header-main">
            <div className="popular-car-cart-header">
                <p className="popular-car-popular-car-text">Popular Car</p>
                <p className="popular-car-view-all">View All</p>
            </div>
            <div className="popular-car-cart-all-car">
                {popularCarArray.map((car) => <ImplementThePopularCarsCart key={car.id} cars={car}/>)}
                
            </div>
        </div>
    )
}

