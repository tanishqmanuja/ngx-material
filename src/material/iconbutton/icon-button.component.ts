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
import type { FormSubmitterType } from "@material/web/internal/controller/form-submitter";
import { provideValueAccessor, ProxyCmp } from "@tqman/ngx-material/internal";

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

const ICON_BUTTON_INPUTS = [
  { name: "disabled", transform: booleanAttribute },
  { name: "softDisabled", transform: booleanAttribute },
  { name: "href" },
  { name: "target", transform: (v: LinkTarget | "") => v },
  { name: "ariaLabelSelected" },
  { name: "toggle", transform: booleanAttribute },
  { name: "selected", transform: booleanAttribute },
  { name: "type", transform: (v: FormSubmitterType) => v },
  { name: "value" },
];

@ProxyCmp({ inputs: ICON_BUTTON_INPUTS })
@Component({
  selector: "md-icon-button",
  standalone: true,
  template: `<ng-content />`,
  inputs: ICON_BUTTON_INPUTS,
  host: {
    "(change)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdIconButtonComponent implements ControlValueAccessor {
  protected el: MdIconButton = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  /* Control Value Accessor */
  private renderer = inject(Renderer2);

  protected onChange = (_value: MdIconButton["selected"]) => {};
  protected onTouched = () => {};

  registerOnChange(fn: (value: MdIconButton["selected"]) => void): void {
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
