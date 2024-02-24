import "@material/web/field/filled-field";

import { Component } from "@angular/core";
import { MdFieldComponent } from "./internal/field.component";

@Component({
  standalone: true,
  selector: "md-filled-field",
  template: ` <ng-content></ng-content>`,
})
export class MdFilledFieldComponent extends MdFieldComponent {}
