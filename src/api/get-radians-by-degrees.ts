/**
 * @description Get radians by degrees value.
 * @param {Number} degrees Degrees value.
 * @return {Number} Radians value.
 */
const getRadiansByDegrees = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export { getRadiansByDegrees };
