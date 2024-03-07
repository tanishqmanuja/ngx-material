import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  booleanAttribute,
  inject,
} from "@angular/core";
import { Chip } from "@material/web/chips/internal/chip";
import { ProxyCmp } from "@tqman/ngx-material/internal";

@ProxyCmp({ inputs: ["disabled", "alwaysFocusable", "hasIcon", "label"] })
@Component({
  selector: "md-chip",
  template: `<ng-content />`,
  inputs: [
    { name: "disabled", transform: booleanAttribute },
    { name: "alwaysFocusable", transform: booleanAttribute },
    { name: "hasIcon", transform: booleanAttribute },
    { name: "label" },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdChipComponent {
  protected el: Chip = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
