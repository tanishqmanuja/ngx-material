/* Boolean */

export type BooleanInput = string | boolean | null | undefined;

export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== "false";
}

/* Number */

export type NumberInput = string | number | null | undefined;

export function _isNumberValue(value: any): boolean {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

export function coerceNumberProperty(value: any): number;
export function coerceNumberProperty<D>(value: any, fallback: D): number | D;
export function coerceNumberProperty(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

/* String */

export type OptionalStringInput<T extends string = string> = string extends T
  ? string | null | undefined
  : T | "" | null | undefined;

export function coerceOptionalStringProperty<T extends string = string>(
  str: OptionalStringInput<T>,
) {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }

  return str;
}
