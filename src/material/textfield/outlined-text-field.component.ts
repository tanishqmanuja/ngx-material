import "@material/web/textfield/outlined-text-field";
import { Component } from "@angular/core";
import { MdTextFieldComponent } from "./internal/text-field.component";
import { provideValueAccessor } from "../../utils/value-accessor";

@Component({
  standalone: true,
  selector: "md-outlined-text-field",
  template: ` <ng-content></ng-content>`,
  providers: [provideValueAccessor(MdOutlinedTextFieldComponent)],
})
export class MdOutlinedTextFieldComponent extends MdTextFieldComponent {}
