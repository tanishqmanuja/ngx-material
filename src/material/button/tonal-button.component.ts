import "@material/web/button/tonal-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonComponent } from "./internal/button.component";

@Component({
  selector: "md-tonal-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdTonalButtonComponent extends MdButtonComponent {}
