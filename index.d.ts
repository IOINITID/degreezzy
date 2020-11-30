declare module 'degreezzy' {
  /**
   * @description Get direction by degrees value.
   * @param degrees Degrees, example: "180".
   * @return Direction string.
   */
  export function getDirectionByDegrees(degrees: number): string;

  /**
   * @description Get degrees by direction string.
   * @param direction Direction string value, example: "N".
   * @param rounding Rounding degrees as it can be fractional. Default value: "false";
   * @return Degrees value.
   */
  export function getDegreesByDirection(direction: string, rounding?: boolean): number;

  /**
   * @description Get grams from kilograms value.
   * @param kilograms Kilograms value.
   * @return Grams value.
   */
  export function getGramsFromKilograms(kilograms: number): number;

  /**
   * @description Get kilograms from grams value.
   * @param grams Grams value.
   * @return Kilograms value.
   */
  export function getKilogramsFromGrams(grams: number): number;
}
