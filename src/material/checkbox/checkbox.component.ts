import "@material/web/checkbox/checkbox";

import {
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
  Renderer2,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

import type { MdCheckbox } from "@material/web/checkbox/checkbox";
import { provideValueAccessor, ProxyCmp } from "@tqman/ngx-material/internal";

const CHECKBOX_INPUTS = [
  { name: "checked", transform: booleanAttribute },
  { name: "indeterminate", transform: booleanAttribute },
  { name: "required", transform: booleanAttribute },
  { name: "value" },
  { name: "disabled", transform: booleanAttribute },
  { name: "name" },
];

@ProxyCmp({
  inputs: CHECKBOX_INPUTS,
})
@Component({
  selector: "md-checkbox",
  standalone: true,
  template: ` <ng-content />`,
  inputs: CHECKBOX_INPUTS,
  host: {
    "(change)": "handleChange($event)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdCheckboxComponent)],
})
export class MdCheckboxComponent implements ControlValueAccessor {
  protected el: MdCheckbox = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  onChange = (_v: boolean) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "checked", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }

  handleChange(event: Event) {
    this.onChange((event.target as MdCheckbox).checked);
  }
}
