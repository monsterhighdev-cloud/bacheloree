"use client";

import { useState } from "react";
import MapMode from "./MapView/MapMode";

const Property = ({ params: { lng } }) => {
  const [viewMode, setViewModel] = useState("map");

  const [listingData, setListingData] = useState([
    { lat: 23.7808875, lon: 90.2792371 },
    { lat: 23.810331, lon: 90.4125214 },
    { lat: 23.7637596, lon: 90.4312355 },
    { lat: 23.7464665, lon: 90.3760159 },
    { lat: 23.7622131, lon: 90.4274805 },
    { lat: 23.804953, lon: 90.368292 },
    { lat: 23.7944095, lon: 90.4022675 },
    { lat: 23.7708123, lon: 90.3592534 },
    { lat: 23.751625, lon: 90.407811 },
    { lat: 23.7913376, lon: 90.3700421 },
  ]);

  return (
    <div>
      {viewMode === "map" ? (
        <MapMode lng={lng} listingData={listingData} />
      ) : (
        ""
      )}
    </div>
  );
};
export default Property;
