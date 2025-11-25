import "@material/web/radio/radio";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
  Renderer2,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

import { MdRadio } from "@material/web/radio/radio";
import { provideValueAccessor, ProxyCmp } from "@tqman/ngx-material/internal";

const RADIO_INPUTS = [
  { name: "checked", transform: booleanAttribute },
  { name: "required", transform: booleanAttribute },
  { name: "value" },
  { name: "disabled", transform: booleanAttribute },
  { name: "name" },
];

@ProxyCmp({ inputs: RADIO_INPUTS })
@Component({
  selector: "md-radio",
  standalone: true,
  template: ` <ng-content />`,
  inputs: RADIO_INPUTS,
  host: {
    "(change)": "handleChange($event)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdRadio)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdRadioComponent implements ControlValueAccessor {
  protected el: MdRadio = inject(ElementRef).nativeElement;
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
    this.onChange((event.target as MdRadio).checked);
  }
}
