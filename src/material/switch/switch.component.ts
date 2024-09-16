import "@material/web/switch/switch";

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

import type { MdSwitch } from "@material/web/switch/switch";
import { provideValueAccessor, ProxyCmp } from "@tqman/ngx-material/internal";

const SWITCH_INPUTS = [
  { name: "selected", transform: booleanAttribute },
  { name: "icons", transform: booleanAttribute },
  { name: "showOnlySelectedIcon", transform: booleanAttribute },
  { name: "required", transform: booleanAttribute },
  { name: "value" },
  { name: "name" },
  { name: "disabled", transform: booleanAttribute },
];

@ProxyCmp({ inputs: SWITCH_INPUTS })
@Component({
  selector: "md-switch",
  standalone: true,
  template: `<ng-content />`,
  inputs: SWITCH_INPUTS,
  host: {
    "(change)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdSwitchComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSwitchComponent implements ControlValueAccessor {
  protected el: MdSwitch = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  protected onChange = (_value: MdSwitch["selected"]) => {};
  protected onTouched = () => {};

  registerOnChange(fn: (value: MdSwitch["selected"]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "selected", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
