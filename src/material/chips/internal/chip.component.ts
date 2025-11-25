import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
} from "@angular/core";

import { Chip } from "@material/web/chips/internal/chip";
import { ProxyCmp } from "@tqman/ngx-material/internal";

const CHIP_INPUTS = [
  { name: "disabled", transform: booleanAttribute },
  { name: "softDisabled", transform: booleanAttribute },
  { name: "alwaysFocusable", transform: booleanAttribute },
  { name: "label" },
  { name: "hasIcon", transform: booleanAttribute },
];

@ProxyCmp({ inputs: CHIP_INPUTS })
@Component({
    selector: "md-chip",
    template: `<ng-content />`,
    inputs: CHIP_INPUTS,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class MdChipBase {
  protected el: Chip = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
