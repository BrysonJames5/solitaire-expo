import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

export const SevenOfDiamonds = (props) => {
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
          d="M58.63 814.076l28.243-28.336-28.243-28.337-28.244 28.337zM58.63 1014.321l28.243-28.336-28.243-28.337-28.244 28.337zM58.63 914.199l28.243-28.337-28.243-28.336-28.244 28.336zM175.37 814.076l28.244-28.336-28.244-28.337-28.243 28.337zM175.37 1014.321l28.244-28.336-28.244-28.337-28.243 28.337zM117 864.137l28.244-28.336L117 807.464l-28.244 28.337zM175.37 914.199l28.244-28.337-28.244-28.336-28.243 28.336zM17.206 780.702l9.414-9.445-9.414-9.446-9.415 9.446zM216.794 991.022l9.415 9.446-9.415 9.445-9.414-9.445z"
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
            d="M25.848 752.972l-7.71 24.173q-.307.94-1.554.94h-3.027q-.94 0-.94-.592 0-.573 3.864-11.575 2.25-6.34 4.48-12.66H11.9q-.062.9-.369 2.618-.286.185-.613.185H8.547q-.982 0-.982-.716 0-.348.593-6.442h17.69z"
            transform="scale(1.02988 .971)"
            aria-label={7}
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
            d="M-201.364-1071.684l-7.71 24.173q-.307.94-1.554.94h-3.027q-.94 0-.94-.593 0-.572 3.865-11.575 2.25-6.34 4.478-12.659h-9.06q-.06.9-.367 2.618-.287.184-.614.184h-2.372q-.982 0-.982-.716 0-.348.593-6.442h17.69z"
            transform="scale(-1.02988 -.971)"
            aria-label={7}
            strokeWidth={1}
          />
        </G>
      </G>
    </Svg>
  );
};
