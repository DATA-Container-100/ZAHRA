"use client";
import { useState, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const [showMap, setShowMap] = useState(false);
  useLayoutEffect(() => {
    setShowMap(true);
  }, []);
  return (
    showMap && (
      <Box sx={{ mx: "auto" }}>
        <MapContainer center={[30.5, 31.22]} zoom={7} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[30.1, 31.22]}
            icon={
              new Icon({
                iconUrl:
                  "https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/leaf-red.png",
                shadowUrl:
                  "https://github.com/DATA-Container-100/hotel-data-imgs/blob/main/anchor-shadow.png?raw=true",
                iconSize: [38, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76],
              })
            }
          >
            <Popup>Our Position</Popup>
          </Marker>
        </MapContainer>
      </Box>
    )
  );
};

export default ContactMap;
