import "@material/web/iconbutton/outlined-icon-button.js";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";
import { MdIconButtonComponent } from "./icon-button.component";

@Component({
  standalone: true,
  selector: "md-outlined-icon-button",
  template: ` <ng-content></ng-content>`,
  providers: [provideValueAccessor(MdOutlinedIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdOutlinedIconButtonComponent extends MdIconButtonComponent {}
