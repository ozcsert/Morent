'use client';
import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  GoogleMap,
  DirectionsRenderer,
  useJsApiLoader,
} from '@react-google-maps/api';

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

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
  pickUpLocation = 'Diyarbakır',
  dropOffLocation = 'Ankara',
}) => {
  const [pickUpCityCoord, setPickUpCityCoord] = useState<Location | null>(null);
  const [dropOffCityCoord, setDropOffCityCoord] = useState<Location | null>(
    null
  );
  const [directionsResponse, setDirectionsResponse] =
    useState<GoogleMapsDirectionsResult | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (pickUpLocation) {
      getCoordinates(pickUpLocation, setPickUpCityCoord);
    }
    if (dropOffLocation) {
      getCoordinates(dropOffLocation, setDropOffCityCoord);
    }
  }, [pickUpLocation, dropOffLocation]);

  const calculateRoute = useCallback((): void => {
    if (!pickUpCityCoord || !dropOffCityCoord || !isLoaded) return;

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
          console.log('Route calculated successfully', result);
        } else {
          console.error(`Error fetching directions: ${status}`, result);
        }
      }
    );
  }, [pickUpCityCoord, dropOffCityCoord, isLoaded]);

  useEffect(() => {
    if (pickUpCityCoord && dropOffCityCoord) {
      calculateRoute();
    }
  }, [pickUpCityCoord, dropOffCityCoord, calculateRoute]);

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
          'Geocode was not successful for the following reason:',
          data.status
        );
      }
    } catch (error) {
      console.error('Error fetching the coordinates:', error);
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ height: '100%', width: '100%' }}
      center={pickUpCityCoord || dropOffCityCoord || { lat: 0, lng: 0 }}
      zoom={10}
    >
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  );
};

export default AdminDashboardMap;
