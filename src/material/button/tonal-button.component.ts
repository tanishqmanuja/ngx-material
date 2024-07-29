import "@material/web/button/filled-tonal-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdButtonComponent } from "./internal/button.component";

@Component({
  selector: "md-filled-tonal-button",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledTonalButtonComponent extends MdButtonComponent {}
