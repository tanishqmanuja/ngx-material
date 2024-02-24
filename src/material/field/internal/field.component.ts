import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";

import type { Field } from "@material/web/field/internal/field";

import { coerceBooleanProperty } from "../../../utils/coercion";

@Component({
  selector: "md-field",
  template: `<ng-content></ng-content>`,
})
export class MdFieldComponent {
  private el: Field = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);

  @Input({ transform: coerceBooleanProperty })
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }
  get disabled() {
    return this.el.disabled;
  }

  @Input({ transform: coerceBooleanProperty })
  set error(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.error = v;
    });
  }
  get error() {
    return this.el.error;
  }

  @Input({ transform: coerceBooleanProperty })
  set required(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.required = v;
    });
  }
  get required() {
    return this.el.required;
  }

  @Input()
  set label(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.label = v;
    });
  }
  get label() {
    return this.el.label;
  }

  @Input()
  set supportingText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.supportingText = v;
    });
  }
  get supportingText() {
    return this.el.supportingText;
  }

  @Input()
  set errorText(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.errorText = v;
    });
  }
  get errorText() {
    return this.el.errorText;
  }
}
