import "@material/web/progress/linear-progress";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  booleanAttribute,
  inject,
  numberAttribute,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

@ProxyCmp({ inputs: ["value", "max", "indeterminate", "fourColor"] })
@Component({
  selector: "md-linear-progress",
  standalone: true,
  template: ` <ng-content />`,
  inputs: [
    { name: "value", transform: numberAttribute },
    { name: "max", transform: numberAttribute },
    { name: "indeterminate", transform: booleanAttribute },
    { name: "fourColor", transform: booleanAttribute },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdLinearProgressComponent {
  protected el = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
