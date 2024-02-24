import "@material/web/iconbutton/icon-button";

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

import type { MdIconButton } from "@material/web/iconbutton/icon-button";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

@Component({
  selector: "md-icon-button",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "selected", transform: booleanAttribute },
    { name: "disabled", transform: booleanAttribute },
    { name: "toggle", transform: booleanAttribute },
    { name: "href" },
    { name: "target" },
  ],
  host: {
    "(change)": "_onChange($event.target.selected)",
    "(blur)": "_onTouched()",
  },
  providers: [provideValueAccessor(MdIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdIconButtonComponent implements ControlValueAccessor {
  private el: MdIconButton = inject(ElementRef).nativeElement;
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

  get toggle() {
    return this.el.toggle;
  }
  set toggle(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.toggle = v;
    });
  }

  get href() {
    return this.el.href;
  }
  set href(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.href = v;
    });
  }

  get target() {
    return this.el.target;
  }
  set target(v: "" | LinkTarget) {
    this.ngZone.runOutsideAngular(() => {
      this.el.target = v;
    });
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  protected _onChange = (_value: MdIconButton["selected"]) => {};
  protected _onTouched = () => {};

  registerOnChange(onChange: (value: MdIconButton["selected"]) => void): void {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this._onTouched = onTouched;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "selected", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
