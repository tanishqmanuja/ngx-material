import "@material/web/button/filled-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonBase } from "./internal/button.directive";

@Component({
  selector: "md-filled-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledButtonComponent extends MdButtonBase {}
