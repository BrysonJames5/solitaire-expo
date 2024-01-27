import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

export const AceOfDiamonds = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={57}
      height={83}
      viewBox="0 0 234 333"
      {...props}
    >
      <G transform="translate(0 -719.362)">
        <Rect
          rx={8.9191856}
          ry={8.9457436}
          y={719.74011}
          x={0.37795275}
          height={332.24411}
          width={233.24409}
          fill="#fff"
          fillOpacity={1}
          stroke="gray"
          strokeWidth={0.75590551}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M117 914.199l28.244-28.337L117 857.526l-28.244 28.336zM17.206 780.702l9.414-9.445-9.414-9.446-9.415 9.446zM216.794 991.022l9.415 9.446-9.415 9.445-9.414-9.445z"
          fill="red"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1}
        />
        <G
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Sans Bold'",
          }}
          fontStyle="normal"
          fontVariant="normal"
          fontWeight={700}
          fontStretch="normal"
          fontSize="3.77201176px"
          fontFamily="Levenim MT"
          letterSpacing={0}
          wordSpacing={0}
          fill="red"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1}
        >
          <Path
            d="M32.051 627.488h-4.655l-1.84-4.847h-9.6l-1.92 4.847H9.381l9.071-23.534h4.544zm-8.175-9.215l-3.12-8.08-3.136 8.08z"
            transform="scale(.83055 1.20403)"
            aria-label="A"
            strokeWidth={1}
          />
        </G>
        <G
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Sans Bold'",
          }}
          fontStyle="normal"
          fontVariant="normal"
          fontWeight={700}
          fontStretch="normal"
          fontSize="3.77201176px"
          fontFamily="Levenim MT"
          letterSpacing={0}
          wordSpacing={0}
          fill="red"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1}
        >
          <Path
            d="M-249.691-844.008h-4.656l-1.84-4.848h-9.6l-1.92 4.848h-4.655l9.071-23.535h4.544zm-8.176-9.216l-3.12-8.08-3.136 8.08z"
            transform="scale(-.83055 -1.20403)"
            aria-label="A"
            strokeWidth={1}
          />
        </G>
      </G>
    </Svg>
  );
};
