import "@material/web/field/filled-field";

import { Component } from "@angular/core";
import { MdFieldComponent } from "./internal/field.component";

@Component({
  selector: "md-filled-field",
  standalone: true,
  template: ` <ng-content />`,
})
export class MdFilledFieldComponent extends MdFieldComponent {}
