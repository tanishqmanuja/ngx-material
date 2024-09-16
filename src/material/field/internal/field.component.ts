import {
  booleanAttribute,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  NgZone,
  numberAttribute,
} from "@angular/core";

import type { Field } from "@material/web/field/internal/field";
import { ProxyCmp } from "@tqman/ngx-material/internal";

const FIELD_INPUTS = [
  { name: "disabled", transform: booleanAttribute },
  { name: "error", transform: booleanAttribute },
  { name: "focused", transform: booleanAttribute },
  { name: "label" },
  { name: "noAsterisk", transform: booleanAttribute },
  { name: "populated", transform: booleanAttribute },
  { name: "required", transform: booleanAttribute },
  { name: "resizable", transform: booleanAttribute },
  { name: "supportingText" },
  { name: "errorText" },
  { name: "count", transform: numberAttribute },
  { name: "max", transform: numberAttribute },
  { name: "hasStart", transform: booleanAttribute },
  { name: "hasEnd", transform: booleanAttribute },
];

@ProxyCmp({ inputs: FIELD_INPUTS })
@Directive({
  selector: "md-field",
  standalone: true,
  inputs: FIELD_INPUTS,
})
export class MdFieldBase {
  protected el: Field = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);

  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
