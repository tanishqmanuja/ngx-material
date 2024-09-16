import "@material/web/fab/fab";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
} from "@angular/core";

import type { FabSize, FabVariant, MdFab } from "@material/web/fab/fab";
import { ProxyCmp } from "@tqman/ngx-material/internal";

const FAB_INPUTS = [
  { name: "variant", transform: (v: FabVariant) => v },
  { name: "size", transform: (v: FabSize) => v },
  { name: "label", transform: (v: string) => v },
  { name: "lowered", transform: booleanAttribute },
];

@ProxyCmp({ inputs: FAB_INPUTS })
@Component({
  standalone: true,
  selector: "md-fab",
  template: ` <ng-content></ng-content>`,
  inputs: FAB_INPUTS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFabComponent {
  protected el: MdFab = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
