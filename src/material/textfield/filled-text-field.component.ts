import "@material/web/textfield/filled-text-field";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdTextFieldBase } from "./internal/text-field.component";

@Component({
  selector: "md-filled-text-field",
  standalone: true,
  template: ` <ng-content />`,
  providers: [provideValueAccessor(MdFilledTextFieldComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledTextFieldComponent extends MdTextFieldBase {}
