import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from 'leaflet'
import CustomMarker from "./CustomMarker";

const Map = () => {
  const markers: { name: string; position: LatLngExpression }[] = [
    {
      name: "A",
      position: {
        lat: 50.93759057253963,
        lng: 6.958399800373859,
      },
    },
    {
      name: "B",
      position: {
        lat: 53.54770066675236,
        lng: 9.997816765231837,
      },
    },
    {
      name: "C",
      position: {
        lat: 55.705560489623664,
        lng: 12.584254373463384,
      },
    },
    {
      name: "D",
      position: {
        lat: 59.48885470258197,
        lng: 18.173770048814003,
      },
    },
    {
      name: "E",
      position: {
        lat: 60.0447311704184,
        lng: 10.64977038644554,
      },
    },
    {
      name: "F",
      position: {
        lat: 60.525037249261445,
        lng: 5.284559494678951,
      },
    },
    {
      name: "G",
      position: {
        lat: 59.06631830798553,
        lng: 5.516990541496374,
      },
    },
    {
      name: "H",
      position: {
        lat: 53.54770066675236,
        lng: 9.997816765231837,
      },
    },
    {
      name: "I",
      position: {
        lat: 50.93759057253963,
        lng: 6.958399800373859,
      },
    },
  ];

  return (
    <MapContainer
      center={[56.17250609139886, 11.5]}
      zoom={5}
      maxZoom={18}
      style={{ height: 600, width: 463, borderRadius: 5 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <CustomMarker
          position={marker.position}
          text={marker.name}
          key={marker.name}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
