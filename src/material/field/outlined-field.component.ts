import "@material/web/field/outlined-field";

import { Component } from "@angular/core";
import { MdFieldComponent } from "./internal/field.component";

@Component({
  standalone: true,
  selector: "md-outlined-field",
  template: ` <ng-content></ng-content>`,
})
export class MdOutlinedFieldComponent extends MdFieldComponent {}
