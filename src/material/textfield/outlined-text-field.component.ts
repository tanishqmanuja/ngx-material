import "@material/web/textfield/outlined-text-field";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdTextFieldBase } from "./internal/text-field.component";

@Component({
  selector: "md-outlined-text-field",
  standalone: true,
  template: ` <ng-content />`,
  providers: [provideValueAccessor(MdOutlinedTextFieldComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdOutlinedTextFieldComponent extends MdTextFieldBase {}
