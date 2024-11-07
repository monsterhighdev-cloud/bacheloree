import distanceCalc from "@/utils/distanceCalc";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const iconDesign = {
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
};

const iconDesign2 = {
  iconUrl: "https://cdn-icons-png.flaticon.com/128/3581/3581471.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
};

const MapView = ({ coordinates, listingData }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(coordinates, 16, mapRef.current.getZoom());
    }
  }, [coordinates]);

  const getNearbyPlaces = async ({ lat, lon }) => {
    try {
      const res = await fetch(
        `https://api.geoapify.com/v2/places?categories=education,commercial.food_and_drink,public_transport.bus,commercial.supermarket,commercial.marketplace,commercial.shopping_mall,commercial.stationery,education.library,public_transport,healthcare.pharmacy,healthcare.hospital,leisure.park&filter=circle:${lon},${lat},1000&bias=proximity:${lon},${lat}&limit=20&apiKey=${process.env.NEXT_PUBLIC_GEO_APIFY_API_KEY}`
      );
      const data = await res.json();

      // console.log(data);

      setNearbyPlaces(data.features);
      return data.features;
    } catch (error) {
      console.log(error);
    }
    return [];
  };

  // Function to handle AI analysis request
  const handleAIAnalysis = async (currentLocation) => {
    const locs = await getNearbyPlaces({
      lat: currentLocation.lat,
      lon: currentLocation.lon,
    });

    try {
      const dataToSend = {
        currentLocation,
        nearbyPlaces: locs.map((place) => ({
          name: place.properties.formatted,
          lat: place.properties.lat,
          lon: place.properties.lon,
          categories: place.properties.categories.join(" "),
          distance: distanceCalc(
            currentLocation.lat,
            currentLocation.lon,
            place.properties.lat,
            place.properties.lon
          ),
        })),
      };

      const res = await fetch("/api/analyzeLocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) throw new Error("Failed to perform AI analysis");

      const analysisResult = await res.json();
      console.log("Analysis Result:", analysisResult); // For now, just log it to console
      alert("AI Analysis Complete. Check console for results."); // Replace this with actual UI feedback as needed
    } catch (error) {
      console.error("AI Analysis Error:", error);
    }
  };

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listingData.map((data, index) => (
        <Marker
          key={index}
          position={{ lat: data.lat, lon: data.lon }}
          icon={L.icon(iconDesign)}
        >
          <Popup>
            <Link
              href={`https://www.google.com/maps?q=${data.lat},${data.lon}&z=18`}
              className="btn-link"
              target="_blank"
            >
              View Details information about this location from Google Maps.
            </Link>
            <div
              onClick={() => getNearbyPlaces({ lon: data.lon, lat: data.lat })}
            >
              View Nearby places
            </div>
            <button
              onClick={() => handleAIAnalysis({ lat: data.lat, lon: data.lon })}
              className="btn btn-sm btn-primary mt-2"
            >
              Perform AI Analysis
            </button>
          </Popup>
        </Marker>
      ))}
      {nearbyPlaces.map((data, index) => (
        <Marker
          key={index}
          position={{ lat: data.properties.lat, lon: data.properties.lon }}
          icon={L.icon(iconDesign2)}
        >
          <Popup>
            <div>
              <p>
                {data.properties.name
                  ? data.properties.name
                  : data.properties.formatted}
              </p>
            </div>
            <Link
              href={`https://www.google.com/maps?q=${data.properties.lat},${data.properties.lon}&z=18`}
              className="btn-link"
              target="_blank"
            >
              View Details information about this location from Google Maps.
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default MapView;
