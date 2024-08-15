import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const iconDesign = {
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
};

const MapView = ({ coordinates, listingData }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(coordinates, 16, mapRef.current.getZoom());
    }
  }, [coordinates]);

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
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default MapView;
