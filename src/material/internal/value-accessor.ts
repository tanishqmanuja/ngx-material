import { forwardRef, type Provider } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

export function provideValueAccessor(c: unknown): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => c),
    multi: true,
  };
}
