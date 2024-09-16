import "@material/web/progress/circular-progress";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdProgressBase } from "./internal/progress.directive";

@Component({
  selector: "md-circular-progress",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdCircularProgressComponent extends MdProgressBase {}
