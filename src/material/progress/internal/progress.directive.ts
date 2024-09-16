import {
  booleanAttribute,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  NgZone,
  numberAttribute,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

const PROGRESS_INPUTS = [
  { name: "value", transform: numberAttribute },
  { name: "max", transform: numberAttribute },
  { name: "indeterminate", transform: booleanAttribute },
  { name: "fourColor", transform: booleanAttribute },
];

@ProxyCmp({ inputs: PROGRESS_INPUTS })
@Directive({
  standalone: true,
  inputs: PROGRESS_INPUTS,
})
export class MdProgressBase {
  protected el = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
