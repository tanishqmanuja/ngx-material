import { Component } from "@angular/core";
import "@material/web/textfield/filled-text-field";

import { MdTextFieldComponent } from "./internal/text-field.component";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-filled-text-field",
  template: ` <ng-content></ng-content>`,
  providers: [provideValueAccessor(MdFilledTextFieldComponent)],
})
export class MdFilledTextFieldComponent extends MdTextFieldComponent {}
