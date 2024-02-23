import "@material/web/button/text-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonComponent } from "./internal/button.component";

@Component({
  selector: "md-text-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdTextButtonComponent extends MdButtonComponent {}
