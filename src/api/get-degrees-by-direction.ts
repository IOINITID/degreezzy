/**
 * @description Get degrees by direction string.
 * @param {String} direction Direction string value, example: "N".
 * @param {Boolean} rounding Rounding degrees as it can be fractional. Default value: "false";
 * @return {Number} Degrees value.
 */
const getDegreesByDirection = (direction: string, rounding: boolean = false): number => {
  let degrees;

  switch (true) {
    case direction === 'NNE':
      degrees = 22.5;
      break;
    case direction === 'NE':
      degrees = 45;
      break;
    case direction === 'ENE':
      degrees = 67.5;
      break;
    case direction === 'E':
      degrees = 90;
      break;
    case direction === 'ESE':
      degrees = 112.5;
      break;
    case direction === 'SE':
      degrees = 135;
      break;
    case direction === 'SSE':
      degrees = 157.5;
      break;
    case direction === 'S':
      degrees = 180;
      break;
    case direction === 'SSW':
      degrees = 202.5;
      break;
    case direction === 'SW':
      degrees = 225;
      break;
    case direction === 'WSW':
      degrees = 247.5;
      break;
    case direction === 'W':
      degrees = 270;
      break;
    case direction === 'WNW':
      degrees = 292.5;
      break;
    case direction === 'NW':
      degrees = 315;
      break;
    case direction === 'NNW':
      degrees = 337.5;
      break;
    case direction === 'N':
      degrees = 360;
      break;
    default:
      degrees = 360;
  }

  if (rounding) {
    return Math.ceil(degrees);
  }

  return degrees;
};

export { getDegreesByDirection };
