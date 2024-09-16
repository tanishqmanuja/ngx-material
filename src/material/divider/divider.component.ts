import "@material/web/divider/divider";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

const DIVIDER_INPUTS = [
  { name: "inset", transform: booleanAttribute },
  { name: "insetStart", transform: booleanAttribute },
  { name: "insetEnd", transform: booleanAttribute },
];

@ProxyCmp({ inputs: DIVIDER_INPUTS })
@Component({
  selector: "md-divider",
  standalone: true,
  template: ` <ng-content />`,
  inputs: DIVIDER_INPUTS,
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
