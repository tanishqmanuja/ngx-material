import "@material/web/textfield/filled-text-field";

import { Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdTextFieldComponent } from "./internal/text-field.component";

@Component({
  selector: "md-filled-text-field",
  standalone: true,
  template: ` <ng-content />`,
  providers: [provideValueAccessor(MdFilledTextFieldComponent)],
})
export class MdFilledTextFieldComponent extends MdTextFieldComponent {}
