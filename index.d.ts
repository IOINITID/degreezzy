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
}
