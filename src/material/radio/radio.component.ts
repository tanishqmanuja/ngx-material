import "@material/web/radio/radio";

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  booleanAttribute,
  inject,
} from "@angular/core";

import { MdRadio } from "@material/web/radio/radio";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

@Component({
  selector: "md-radio",
  standalone: true,
  template: ` <ng-content />`,
  inputs: [
    { name: "checked", transform: booleanAttribute },
    { name: "disabled", transform: booleanAttribute },
    { name: "value" },
    { name: "name" },
  ],
  host: {
    "(change)": "onChange($event.target.checked)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdRadio)],
})
export class MdRadioComponent {
  private el: MdRadio = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get checked() {
    return this.el.checked;
  }
  set checked(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.checked = v;
    });
  }

  get disabled() {
    return this.el.disabled;
  }
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }

  get value() {
    return this.el.value;
  }
  set value(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.value = v;
    });
  }

  get name() {
    return this.el.name;
  }
  set name(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.name = v;
    });
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
}
