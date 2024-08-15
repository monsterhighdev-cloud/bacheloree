import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const iconDesign = {
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
};

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={L.icon(iconDesign)}>
      <Popup>
        Latitude: {position.lat.toFixed(4)}
        <br />
        Longitude: {position.lng.toFixed(4)}
      </Popup>
    </Marker>
  );
};

const Map = ({ coordinates }) => {
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
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      className="container"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
  );
};
export default Map;
