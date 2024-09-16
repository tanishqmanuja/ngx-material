import "@material/web/progress/linear-progress";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdProgressBase } from "./internal/progress.directive";

@Component({
  selector: "md-linear-progress",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdLinearProgressComponent extends MdProgressBase {}
