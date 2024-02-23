import "@material/web/button/elevated-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonComponent } from "./internal/button.component";

@Component({
  selector: "md-elevated-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdElevatedButtonComponent extends MdButtonComponent {}
