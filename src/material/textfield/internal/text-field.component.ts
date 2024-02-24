import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  inject,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import type {
  TextField,
  TextFieldType,
  UnsupportedTextFieldType,
} from "@material/web/textfield/internal/text-field";
import { coerceBooleanProperty } from "../../../utils/coercion";

@Component({
  selector: "md-text-field",
  template: `<ng-content></ng-content>`,
  inputs: [
    { name: "disabled", transform: coerceBooleanProperty },
    { name: "error", transform: coerceBooleanProperty },
    { name: "required", transform: coerceBooleanProperty },
    { name: "hasLeadingIcon", transform: coerceBooleanProperty },
    { name: "hasTrailingIcon", transform: coerceBooleanProperty },
    { name: "value" },
    { name: "label" },
    { name: "supportingText" },
    { name: "errorText" },
    { name: "type" },
    { name: "prefixText" },
    { name: "suffixText" },
  ],
  host: {
    "(change)": "onChange($event.target.value)",
    "(blur)": "onTouched()",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdTextFieldComponent implements ControlValueAccessor {
  private el: TextField = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get disabled() {
    return this.el.disabled;
  }
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }

  get hasLeadingIcon() {
    return this.el.hasLeadingIcon;
  }
  set hasLeadingIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.hasLeadingIcon = v;
    });
  }

  get hasTrailingIcon() {
    return this.el.hasTrailingIcon;
  }
  set hasTrailingIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.hasTrailingIcon = v;
    });
  }

  get error() {
    return this.el.error;
  }
  set error(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.error = v;
    });
  }

  get required() {
    return this.el.required;
  }
  set required(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.required = v;
    });
  }

  set value(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.value = v;
    });
  }
  get value() {
    return this.el.value;
  }

  set label(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.label = v;
    });
  }
  get label() {
    return this.el.label;
  }

  set supportingText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.supportingText = v;
    });
  }
  get supportingText() {
    return this.el.supportingText;
  }

  set errorText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.errorText = v;
    });
  }
  get errorText() {
    return this.el.errorText;
  }

  set suffixText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.suffixText = v;
    });
  }
  get suffixText() {
    return this.el.suffixText;
  }

  set prefixText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.prefixText = v;
    });
  }
  get prefixText() {
    return this.el.prefixText;
  }

  get type() {
    return this.el.type;
  }
  set type(v: TextFieldType | UnsupportedTextFieldType) {
    this.ngZone.runOutsideAngular(() => {
      this.el.type = v;
    });
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
