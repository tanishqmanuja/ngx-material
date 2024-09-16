import "@material/web/button/outlined-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonBase } from "./internal/button.directive";

@Component({
  selector: "md-outlined-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdOutlinedButtonComponent extends MdButtonBase {}
