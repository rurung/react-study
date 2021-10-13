import React from "react";

function Text({ isVisible }) {
  return isVisible ? <p>Text open!!!</p> : null;
}

export default Text;
