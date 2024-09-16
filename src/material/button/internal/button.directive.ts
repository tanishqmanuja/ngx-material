import {
  booleanAttribute,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  NgZone,
} from "@angular/core";

import type { Button } from "@material/web/button/internal/button";
import type { FormSubmitterType } from "@material/web/internal/controller/form-submitter";
import { ProxyCmp } from "@tqman/ngx-material/internal";

export type MdButtonTarget = "_blank" | "_parent" | "_self" | "_top" | "";

const BUTTON_INPUTS = [
  { name: "disabled", transform: booleanAttribute },
  { name: "softDisabled", transform: booleanAttribute },
  { name: "href" },
  { name: "target", transform: (v: MdButtonTarget) => v },
  { name: "trailingIcon", transform: booleanAttribute },
  { name: "hasIcon", transform: booleanAttribute },
  { name: "type", transform: (v: FormSubmitterType) => v },
  { name: "value" },
  { name: "name" },
];

@ProxyCmp({
  inputs: BUTTON_INPUTS,
})
@Directive({
  standalone: true,
  inputs: BUTTON_INPUTS,
})
export class MdButtonBase {
  protected el: Button = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
