import "@material/web/fab/fab";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  booleanAttribute,
  inject,
} from "@angular/core";
import type { FabSize, FabVariant, MdFab } from "@material/web/fab/fab";
import { ProxyCmp } from "@tqman/ngx-material/internal";

@ProxyCmp({ inputs: ["label", "size", "variant", "lowered"] })
@Component({
  standalone: true,
  selector: "md-fab",
  template: ` <ng-content></ng-content>`,
  inputs: [
    { name: "label", transform: (v: string) => v },
    { name: "size", transform: (v: FabSize) => v },
    { name: "variant", transform: (v: FabVariant) => v },
    { name: "lowered", transform: booleanAttribute },
  ],
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
