import * as React from "react";
import config from "../config";

export const Square: React.FC<{
  x: number;
  y: number;
  fillColor: string;
  title: string;
  value?: number;
}> = React.memo(({ x, y, fillColor, title, value }) => {
  return (
    <g>
      <rect
        key={1}
        width={config.squareSize}
        height={config.squareSize}
        x={x}
        y={y}
        fill={fillColor}
      >
        <title>{title}</title>
      </rect>
      {value && (
        <text
          x={x + 3}
          y={y + 10}
          width={10}
          height={10}
          style={{
            fill: "#000",
            fontFamily: "sans-serif",
            fontSize: "8px",
          }}
        >
          {/*{value}*/}
        </text>
      )}
    </g>
  );
});
