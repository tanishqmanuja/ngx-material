import "@material/web/field/outlined-field";

import { Component } from "@angular/core";
import { MdFieldComponent } from "./internal/field.component";

@Component({
  selector: "md-outlined-field",
  standalone: true,
  template: ` <ng-content />`,
})
export class MdOutlinedFieldComponent extends MdFieldComponent {}
