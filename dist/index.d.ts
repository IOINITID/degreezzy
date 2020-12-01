/**
 * @description Get direction by degrees value.
 * @param {Number} degrees Degrees, example: "180".
 * @return {String} Direction string.
 */
declare const getDirectionByDegrees: (degrees: number) => string;
/**
 * @description Get degrees by direction string.
 * @param {String} direction Direction string value, example: "N".
 * @param {Boolean} rounding Rounding degrees as it can be fractional. Default value: "false";
 * @return {Number} Degrees value.
 */
declare const getDegreesByDirection: (direction: string, rounding?: boolean | undefined) => number;
/**
 * @description Get grams from kilograms value.
 * @param {Number} kilograms Kilograms value.
 * @return {Number} Grams value.
 */
declare const getGramsFromKilograms: (kilograms: number) => number;
/**
 * @description Get kilograms from grams value.
 * @param {Number} grams Grams value.
 * @return {Number} Kilograms value.
 */
declare const getKilogramsFromGrams: (grams: number) => number;
/**
 * @description Get radians value from degrees.
 * @param {Number} degrees Degrees value.
 * @return {Number} Radians value.
 */
declare const getRadiansFromDegrees: (degrees: number) => number;
/**
 * @description Get degrees value from radians.
 * @param {Number} radians Radians value.
 * @return {Number} Degrees value.
 */
declare const getDegreesFromRadians: (radians: number) => number;
export { getDirectionByDegrees, getDegreesByDirection, getGramsFromKilograms, getKilogramsFromGrams, getRadiansFromDegrees, getDegreesFromRadians };
