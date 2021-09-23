import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Pokeball.css";
export default function PokeballToggle(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      {!toggled ? (
        <div className="toggle">
          <div
            className="switch"
            onClick={() => {
              setToggled(!toggled);
              if (props.onClick) {
                props.onClick();
              }
            }}
          >
            <div className="switch-front"></div>
            <div className="switch2-front"></div>
          </div>
        </div>
      ) : (
        <div className="toggle2">
          <div
            className="switch2"
            onClick={() => {
              setToggled(!toggled);
              if (props.onClick) {
                props.onClick();
              }
            }}
          >
            <div className="switch-front"></div>

            <div className="switch2-front"></div>
          </div>
        </div>
      )}
    </>
  );
}

PokeballToggle.propTypes = {
  onClick: PropTypes.func,
};
