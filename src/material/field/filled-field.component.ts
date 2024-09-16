import "@material/web/field/filled-field";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdFieldBase } from "./internal/field.component";

@Component({
  selector: "md-filled-field",
  standalone: true,
  template: ` <ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledFieldComponent extends MdFieldBase {}
