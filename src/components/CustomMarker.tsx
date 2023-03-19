import { Marker } from "react-leaflet";
import { divIcon, LatLngExpression } from "leaflet";
import MarkerIcon from "./MarkerIcon";
import { renderToString } from "react-dom/server";

const CustomMarker = ({ position, text }: { position: LatLngExpression, text: string }) => {
  const greenIcon = divIcon({
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    className: "",
    html: renderToString(<MarkerIcon text={text} />),
  });

  return <Marker position={position} icon={greenIcon} />;
};

export default CustomMarker;
