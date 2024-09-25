"use client";
import Image, { StaticImageData } from "next/image";
import { PieChart, Pie, Cell } from "recharts";
// import AdminMap from "@/app/images/admin-map.png";
import AdminDetailCar from "@/app/images/admin-car.png";
import "./styles.scss";
import AdminNissanGTR from "@/app/images/admin-car-nissan.png";
import AdminKoegnigsegg from "@/app/images/admin-car-koegnigsegg.png";
import AdminRollsRoyce from "@/app/images/admin-car-rolls-royce.png";
import AdminCrV from "@/app/images/admin-car-cr-v.png";
import dynamic from "next/dynamic";
import AdminDashboardMap from "../AdminDashboardMap";

type carsType = {
  title: string;
  subTitle: string;
  img: StaticImageData;
  date: string;
  price: string;
};

const cars: carsType[] = [
  {
    title: "Nissan GT-R",
    subTitle: "Sport Car",
    img: AdminNissanGTR,
    date: "20 May",
    price: "80.00",
  },
  {
    title: "Koegnigsegg",
    subTitle: "Sport Car",
    img: AdminKoegnigsegg,
    date: "19 July",
    price: "99.00",
  },
  {
    title: "Rolls - Royce",
    subTitle: "Sport Car",
    img: AdminRollsRoyce,
    date: "18 July",
    price: "96.00",
  },
  {
    title: "Cr - V",
    subTitle: "Suv",
    img: AdminCrV,
    date: "17 July",
    price: "80.00",
  },
];

type ChartData = {
  name: string;
  value: number;
  color: string;
};

const data: ChartData[] = [
  { name: "Sport Car", value: 17439, color: "#0D3559" },
  { name: "SUV", value: 9478, color: "#175D9C" },
  { name: "Coupe", value: 18197, color: "#2185DE" },
  { name: "Hatchback", value: 12510, color: "#63A9E8" },
  { name: "MPV", value: 14406, color: "#A6CEF2" },
];

// to calculate total car count
let totalCarCount = 0;
const handleCarTotal = (carData: ChartData[]) => {
  carData.forEach((car) => {
    totalCarCount += car.value;
  });

  return totalCarCount;
};

const carTotalCount = new Intl.NumberFormat("tr-TR").format(
  handleCarTotal(data)
);

const AdminDashboard = () => {
  return (
    <>
      <div className="dv-container">
        <div className="dv-left">
          <div className="dv-detail">
            <h2 className="dv-detail-title">Details Rental</h2>
            <div className="dv-detail-img">
              {/* <Image src={AdminMap} alt="Admin Map" fill /> */}
              <AdminDashboardMap
                pickUpLocation="Diyarbakır"
                dropOffLocation="İzmir"
              />
            </div>
            <div className="dv-detail-car">
              <div className="dv-detail-car-img">
                <Image
                  src={AdminDetailCar}
                  alt="Admin Car"
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div className="dv-detail-car-title">
                Nissan GT-R
                <span className="dv-detail-car-type">Sport Car</span>
              </div>
              <div className="dv-detail-car-barcode">#9761</div>
            </div>
            <div className="dv-detail-range">
              <p>Range Component Gelecek</p>
            </div>
            <div className="dv-detail-total">
              <h3 className="dv-detail-total-title">
                Total Rental Price
                <span className="dv-detail-total-desc">
                  Overall price and includes rental discount
                </span>
              </h3>
              <div className="dv-detail-total-price">$80.00</div>
            </div>
          </div>
        </div>
        <div className="dv-right">
          <div className="dv-top-car">
            <h3 className="dv-top-car-title">Top 5 Car Rental</h3>
            <div className="dv-top-car-graphic-group">
              <div className="dv-top-car-chart">
                <PieChart width={220} height={220}>
                  <Pie
                    data={data}
                    cx={103}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    cornerRadius={5}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="dv-top-car-chart-total">
                  {carTotalCount}
                  <span className="dv-top-car-chart-total-title">
                    Rental Car
                  </span>
                </div>
              </div>
              <div className="dv-top-car-count">
                <ul className="dv-top-car-count-list">
                  {data.map((item, index) => (
                    <li key={index} className="dv-top-car-count-item">
                      <span
                        className="dv-top-car-count-item-bullet-point"
                        style={{ backgroundColor: `${item.color}` }}
                      ></span>
                      <div className="dv-top-car-count-item-content">
                        <span className="dv-top-car-count-item-title">
                          {item.name}
                        </span>
                        <span className="dv-top-car-count-item-value">
                          {new Intl.NumberFormat("tr-TR").format(item.value)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="dv-recent-car">
            <h3 className="dv-car-recent-title">Recent Transaction</h3>
            <ul className="dv-recent-car-list">
              {cars.map((car, index) => (
                <li key={index} className="dv-recent-car-item">
                  <div className="dv-recent-car-item-img">
                    <Image
                      src={car.img}
                      alt=""
                      width={114}
                      height={70}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="dv-recent-car-item-title">
                    <h3 className="item-title-main">{car.title}</h3>
                    <span className="item-title-sub">{car.subTitle}</span>
                  </div>
                  <div className="dv-recent-car-item-text">
                    <span className="item-text-date">{car.date}</span>
                    <span className="item-text-price">${car.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });
