import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";

function MapMarker({long, lat, title }) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      <Marker longitude={long} latitude={lat}>
        <p
          onClick={() => setShowPopUp(true)}
          className="z-150 cursor-pointer text-2xl animate-bounce"
          role="img"
          aria-label="push-pin"
        >
          📌
        </p>
      </Marker>
      {showPopUp && (
        <Popup
          className="z-200"
          onClose={() => setShowPopUp(false)}
          closeOnClick={true}
          latitude={lat}
          longitude={long}
        >
          <p>{title}</p>
        </Popup>
      )}
    </>
  );
}

export default MapMarker;
