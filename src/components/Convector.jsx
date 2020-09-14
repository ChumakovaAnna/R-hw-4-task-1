import React, {useState} from 'react';
import hexToRgb from "./hexToRgb";

function Convector() {
  const [colors, setColor] = useState({
    hex: "",
    rgb: "",
    backgroundColor: "#ffffff",
  });


  const getColor = ({target}) => {
    const colorHex = target.value;

    if (colorHex.length < 8 && colorHex.match(/#[a-f0-9]{6}\b/gi)) {
      const colorRgbArr = hexToRgb(colorHex);
      const colorRgb = `rgb(${colorRgbArr.r}, ${colorRgbArr.g}, ${colorRgbArr.b})`;
      console.log(colorRgb);
      setColor((prev) => ({...prev, hex: colorHex, rgb: colorRgb, backgroundColor: colorHex}));
    } else {
      setColor((prev) => ({...prev, rgb: ""}));
    }

    if (colorHex.length === 7 && !colorHex.match(/#[a-f0-9]{6}\b/gi)) {
      setColor((prev) => ({...prev, rgb: "Ошибка"}));
    }
  }


  return (
    <div className="background_color" style={{backgroundColor: colors.hex}}>
      <input className="" type="text" onChange={getColor}></input>
      <div className="color-rgb">{colors.rgb}</div>
    </div>
  );
}

export default Convector;