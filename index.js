/**
 * @description Get direction by degrees value.
 * @param {Number} degrees Degrees, example: "180".
 * @return {String} Direction string.
 */
const getDirectionByDegrees = (degrees) => {
  let direction;

  switch (true) {
    case degrees > 11.25 && degrees < 33.75:
      direction = `NNE`;
      break;
    case degrees > 33.75 && degrees < 56.25:
      direction = `NE`;
      break;
    case degrees > 56.25 && degrees < 78.75:
      direction = `ENE`;
      break;
    case degrees > 78.75 && degrees < 101.25:
      direction = `E`;
      break;
    case degrees > 101.25 && degrees < 123.75:
      direction = `ESE`;
      break;
    case degrees > 123.75 && degrees < 146.25:
      direction = `SE`;
      break;
    case degrees > 146.25 && degrees < 168.75:
      direction = `SSE`;
      break;
    case degrees > 168.75 && degrees < 191.25:
      direction = `S`;
      break;
    case degrees > 191.25 && degrees < 213.75:
      direction = `SSW`;
      break;
    case degrees > 213.75 && degrees < 236.25:
      direction = `SW`;
      break;
    case degrees > 236.25 && degrees < 258.75:
      direction = `WSW`;
      break;
    case degrees > 258.75 && degrees < 281.25:
      direction = `W`;
      break;
    case degrees > 281.25 && degrees < 303.75:
      direction = `WNW`;
      break;
    case degrees > 303.75 && degrees < 326.25:
      direction = `NW`;
      break;
    case degrees > 326.25 && degrees < 348.75:
      direction = `NNW`;
      break;
    case degrees > 348.75 && degrees < 11.25:
      direction = `N`;
      break;
    default:
      direction = `N`;
      break;
  }

  return direction;
};


/**
 * @description Get degrees by direction string.
 * @param {String} direction Direction string value, example: "N".
 * @param {Boolean} rounding Rounding degrees as it can be fractional. Default value: "false";
 * @return {Number} Degrees value.
 */
const getDegreesByDirection = (direction, rounding = false) => {
  let degrees;

  switch (true) {
    case direction === `NNE`:
      degrees = 22.5;
      break;
    case direction === `NE`:
      degrees = 45;
      break;
    case direction === `ENE`:
      degrees = 67.5;
      break;
    case direction === `E`:
      degrees = 90;
      break;
    case direction === `ESE`:
      degrees = 112.5;
      break;
    case direction === `SE`:
      degrees = 135;
      break;
    case direction === `SSE`:
      degrees = 157.5;
      break;
    case direction === `S`:
      degrees = 180;
      break;
    case direction === `SSW`:
      degrees = 202.5;
      break;
    case direction === `SW`:
      degrees = 225;
      break;
    case direction === `WSW`:
      degrees = 247.5;
      break;
    case direction === `W`:
      degrees = 270;
      break;
    case direction === `WNW`:
      degrees = 292.5;
      break;
    case direction === `NW`:
      degrees = 315;
      break;
    case direction === `NNW`:
      degrees = 337.5;
      break;
    case direction === `N`:
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

export {
  getDirectionByDegrees,
  getDegreesByDirection
};