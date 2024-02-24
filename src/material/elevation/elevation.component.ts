import "@material/web/elevation/elevation";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";

@Component({
  selector: "md-elevation",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdElevationComponent {
  private cd = inject(ChangeDetectorRef);
  constructor() {
    this.cd.detach();
  }
}
