"use client";
import { useEffect, useState } from "react";
import Map from "./Map";
import NewListingForm from "./NewListingForm";

const CreateNewListing = () => {
  const [query, setQuery] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 23.8693275,
    lon: 90.3926893,
  });

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${query}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEO_APIFY_API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setCoordinates({
            lat: result.results[0].lat,
            lon: result.results[0].lon,
          });
        })
        .catch((error) => console.log("error", error));
    }
  }, [query]);

  return (
    <div className="flex">
      {/* Left Side Form */}
      <div className="w-full">
        <NewListingForm query={query} setQuery={setQuery} />
      </div>
      {/* Right Side Map */}
      <div className="w-full h-[750px]">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
};
export default CreateNewListing;
