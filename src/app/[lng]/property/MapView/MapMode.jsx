import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import MapFilters from "./MapFilters";
import MapView from "./MapView";

const MapMode = ({ lng, listingData }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      {/* Map Filters */}
      <div>
        <MapFilters
          lng={lng}
          query={query}
          setQuery={setQuery}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="w-full">
        {/* Ham BTN */}
        <div className="p-2 lg:p-0">
          <div
            className="btn btn-primary flex items-center w-fit lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <CiMenuKebab className="text-2xl" />
            <span>Open Filters</span>
          </div>
        </div>
        <div className="w-full h-[600px] lg:h-[800px]">
          <MapView coordinates={coordinates} listingData={listingData} />
        </div>
      </div>
    </div>
  );
};
export default MapMode;
