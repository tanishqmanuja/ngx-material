import "@material/web/field/outlined-field";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdFieldBase } from "./internal/field.component";

@Component({
  selector: "md-outlined-field",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdOutlinedFieldComponent extends MdFieldBase {}
