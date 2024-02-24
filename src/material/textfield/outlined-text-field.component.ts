import "@material/web/textfield/outlined-text-field";

import { Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdTextFieldComponent } from "./internal/text-field.component";

@Component({
  selector: "md-outlined-text-field",
  standalone: true,
  template: ` <ng-content />`,
  providers: [provideValueAccessor(MdOutlinedTextFieldComponent)],
})
export class MdOutlinedTextFieldComponent extends MdTextFieldComponent {}
