/**
 * @description Get degrees by radians value.
 * @param {Number} radians Radians value.
 * @return {Number} Degrees value.
 */
const getDegreesByRadians = (radians: number): number => {
  return (radians * 180) / Math.PI;
};

export { getDegreesByRadians };
