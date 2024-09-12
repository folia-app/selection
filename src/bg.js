import { encodePacked, keccak256 } from "viem";

export const solidityKeccak256 = (stringTypes, values) => {
  return keccak256(encodePacked(stringTypes, values));
};

export function randomRange(min, max, seed) {
  return parseInt(
    (BigInt(seed) % (BigInt(max) - BigInt(min) + 1n)) + BigInt(min)
  );
}

export function setBg(seed, backgroundOffset, backgroundOverride) {
  let solidsArray = ["rgb(123,50,50)", "rgb(50,123,50)", "rgb(50,50,123)"];
  const solidColor = randomRange(0, 2, seed);
  const solidColorString = solidsArray[solidColor];
  seed = solidityKeccak256(["bytes32"], [seed]);
  const solidOverGrad = randomRange(0, 10, seed) == 0 ? true : false;
  seed = solidityKeccak256(["bytes32"], [seed]);
  const grayOverColor = randomRange(0, 5, seed) == 0 ? true : false;
  seed = solidityKeccak256(["bytes32"], [seed]);
  const bgStyleRand = randomRange(1, 10, seed);

  const totalStyles = 4;
  let bgState =
    typeof backgroundOverride !== "boolean"
      ? backgroundOverride
      : ((bgStyleRand <= 7
          ? 0
          : bgStyleRand <= 8
            ? 1
            : bgStyleRand <= 9
              ? 2
              : 3) +
          backgroundOffset) %
        totalStyles;
  let finalColor, gradAngle, dark;
  if (bgState == 0) {
    if (solidOverGrad) {
      finalColor = "background-color:" + solidColorString;
    } else if (grayOverColor) {
      seed = solidityKeccak256(["bytes32"], [seed]);
      gradAngle = randomRange(0, 90, seed);
      seed = solidityKeccak256(["bytes32"], [seed]);
      const gray1Val = randomRange(0, 150, seed);
      const gray1 = `rgb(${gray1Val},${gray1Val},${gray1Val})`;
      seed = solidityKeccak256(["bytes32"], [seed]);
      const gray2Val = randomRange(150, 255, seed);
      const gray2 = `rgb(${gray2Val},${gray2Val},${gray2Val})`;
      finalColor = `background: linear-gradient(${gradAngle}deg, ${gray1} 0%, ${gray2} 100%);`;
    } else {
      seed = solidityKeccak256(["bytes32"], [seed]);
      gradAngle = randomRange(0, 90, seed);
      seed = solidityKeccak256(["bytes32"], [seed]);
      dark = randomRange(100, 150, seed);
      seed = solidityKeccak256(["bytes32"], [seed]);
      let color1R = randomRange(50, dark, seed);
      seed = solidityKeccak256(["bytes32"], [seed]);
      let color1G = randomRange(50, dark, seed);
      seed = solidityKeccak256(["bytes32"], [seed]);
      let color1B = randomRange(50, dark, seed);
      const color1 = `rgb(${color1R},${color1G},${color1B})`;

      seed = solidityKeccak256(["bytes32"], [seed]);
      const addOrSubtract = randomRange(0, 1, seed) == 0 ? true : false;
      seed = solidityKeccak256(["bytes32"], [seed]);
      const colorOffset = randomRange(0, 100, seed);
      if (addOrSubtract) {
        color1R = color1R + colorOffset > 255 ? 255 : color1R + colorOffset;
        color1G = color1G + colorOffset > 255 ? 255 : color1G + colorOffset;
        color1B = color1B + colorOffset > 255 ? 255 : color1B + colorOffset;
      } else {
        color1R = color1R - colorOffset < 0 ? 0 : color1R - colorOffset;
        color1G = color1G - colorOffset < 0 ? 0 : color1G - colorOffset;
        color1B = color1B - colorOffset < 0 ? 0 : color1B - colorOffset;
      }

      const color2 = `rgb(${color1R},${color1G},${color1B})`;
      finalColor = `background: linear-gradient(${gradAngle}deg, ${color1} 0%, ${color2} 100%);`;
    }
  } else if (bgState == 1) {
    finalColor = "background-color: white;";
  } else if (bgState == 2) {
    finalColor = "background-color: black;";
  } else {
    finalColor = `background-image: linear-gradient(45deg, #cbcccb 25%, transparent 25%), linear-gradient(-45deg, #cbcccb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cbcccb 75%), linear-gradient(-45deg, transparent 75%, #cbcccb 75%);background-size: 8px 8px;background-position: 0 0, 0 4px, 4px -4px, -4px 0px;`;
  }

  if (typeof document !== "undefined") {
    document.getElementsByTagName("svg")[0].style = finalColor;
  }
  return {
    solidColor,
    solidOverGrad,
    grayOverColor,
    bgState,
    gradAngle,
    dark,
    finalColor,
  };
}
