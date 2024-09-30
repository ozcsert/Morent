"use client";
import React, { FC, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";

const apiKey: string = "AIzaSyAbHx7q_qeMXmhsz3QIP9XEk85y5pkhWnM";

type AdminDashboardMapProps = {
  pickUpLocation?: string;
  dropOffLocation?: string;
};

type Location = {
  lat: number;
  lng: number;
};

type GoogleMapsDirectionsResult = google.maps.DirectionsResult;

const AdminDashboardMap: FC<AdminDashboardMapProps> = ({
  pickUpLocation = "Diyarbakır",
  dropOffLocation = "Ankara",
}) => {
  const [pickUpCityCoord, setPickUpCityCoord] = useState<Location | null>(null);
  const [dropOffCityCoord, setDropOffCityCoord] = useState<Location | null>(
    null
  );
  const [directionsResponse, setDirectionsResponse] =
    useState<GoogleMapsDirectionsResult | null>(null);

  useEffect(() => {
    if (pickUpLocation) {
      getCoordinates(pickUpLocation, setPickUpCityCoord);
    }
    if (dropOffLocation) {
      getCoordinates(dropOffLocation, setDropOffCityCoord);
    }
  }, [pickUpLocation, dropOffLocation]);

  useEffect(() => {
    if (pickUpCityCoord && dropOffCityCoord) {
      calculateRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickUpCityCoord, dropOffCityCoord]);

  const calculateRoute = (): void => {
    if (!pickUpCityCoord || !dropOffCityCoord) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: pickUpCityCoord,
        destination: dropOffCityCoord,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK && result) {
          setDirectionsResponse(result);
          console.log("Çalıştı", result);
        } else {
          console.error(`Error fetching directions ${result}`);
          console.log("Çalışmadı", result);
        }
      }
    );
  };

  const getCoordinates = async (
    location: string,
    setCoords: React.Dispatch<React.SetStateAction<Location | null>>
  ) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const coordinates = data.results[0].geometry.location;
        setCoords({ lat: coordinates.lat, lng: coordinates.lng });
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          data.status
        );
      }
    } catch (error) {
      console.error("Error fetching the coordinates:", error);
    }
  };

  return (
    <>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={pickUpCityCoord || dropOffCityCoord || { lat: 0, lng: 0 }}
          zoom={10}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default AdminDashboardMap;
