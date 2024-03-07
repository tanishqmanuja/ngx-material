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

import { provideValueAccessor } from "@tqman/ngx-material/internal";

@Component({
  selector: "md-switch",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "checked", transform: booleanAttribute },
    { name: "disabled", transform: booleanAttribute },
    { name: "selected", transform: booleanAttribute },
    { name: "icons", transform: booleanAttribute },
    { name: "showOnlySelectedIcon", transform: booleanAttribute },
    { name: "value" },
    { name: "name" },
  ],
  host: {
    "(change)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdSwitchComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSwitchComponent implements ControlValueAccessor {
  private el: MdSwitch = inject(ElementRef).nativeElement;
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

  get selected() {
    return this.el.selected;
  }
  set selected(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.selected = v;
    });
  }

  get icons() {
    return this.el.icons;
  }
  set icons(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.icons = v;
    });
  }

  get showOnlySelectedIcon() {
    return this.el.showOnlySelectedIcon;
  }
  set showOnlySelectedIcon(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.showOnlySelectedIcon = v;
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
