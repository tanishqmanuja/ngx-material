import "@material/web/divider/divider.js";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  booleanAttribute,
  inject,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

@ProxyCmp({ inputs: ["inset", "insetStart", "insetEnd"] })
@Component({
  selector: "md-divider",
  standalone: true,
  template: ` <ng-content />`,
  inputs: [
    { name: "inset", transform: booleanAttribute },
    { name: "insetStart", transform: booleanAttribute },
    { name: "insetEnd", transform: booleanAttribute },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdDividerComponent {
  protected el = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
