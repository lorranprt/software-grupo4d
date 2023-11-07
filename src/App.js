import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "./App.css"
import "leaflet/dist/leaflet.css" 
import { Icon } from "leaflet";

function App() {
  return (
    <div>
        <MapContainer center={[-22.935361, -43.215756]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-22.935361, -43.215756]} icon={new Icon({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  })}>
    <Popup>
      Popup
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
}

export default App;
