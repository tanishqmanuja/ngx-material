import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
  numberAttribute,
  Renderer2,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

import type {
  TextField,
  TextFieldType,
  UnsupportedTextFieldType,
} from "@material/web/textfield/internal/text-field";
import { ProxyCmp } from "@tqman/ngx-material/internal";

const TEXT_FIELD_INPUTS = [
  { name: "error", transform: booleanAttribute },
  { name: "errorText" },
  { name: "label" },
  { name: "noAsterisk", transform: booleanAttribute },
  { name: "required", transform: booleanAttribute },
  { name: "value" },
  { name: "prefixText" },
  { name: "suffixText" },
  { name: "hasLeadingIcon", transform: booleanAttribute },
  { name: "hasTrailingIcon", transform: booleanAttribute },
  { name: "supportingText" },
  { name: "textDirection" },
  { name: "rows", transform: numberAttribute },
  { name: "cols", transform: numberAttribute },
  { name: "inputMode" },
  { name: "max" },
  { name: "maxlength", transform: numberAttribute },
  { name: "min" },
  { name: "minlength", transform: numberAttribute },
  { name: "noSpinner", transform: booleanAttribute },
  { name: "pattern" },
  { name: "placeholder" },
  { name: "readonly", transform: booleanAttribute },
  { name: "multiple", transform: booleanAttribute },
  { name: "step" },
  {
    name: "type",
    transform: (v: TextFieldType | UnsupportedTextFieldType) => v,
  },
  { name: "autocomplete" },
  { name: "disabled", transform: booleanAttribute },
  { name: "name" },
];

@ProxyCmp({ inputs: TEXT_FIELD_INPUTS })
@Component({
  selector: "md-text-field",
  template: `<ng-content />`,
  inputs: TEXT_FIELD_INPUTS,
  host: {
    "(change)": "onChange($event.target.value)",
    "(blur)": "onTouched()",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdTextFieldBase implements ControlValueAccessor {
  protected el: TextField = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  onChange = (v: string) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.renderer.setProperty(this.el, "value", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
