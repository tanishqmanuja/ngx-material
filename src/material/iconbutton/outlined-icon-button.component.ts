import "@material/web/iconbutton/outlined-icon-button";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdIconButtonComponent } from "./icon-button.component";

@Component({
  selector: "md-outlined-icon-button",
  standalone: true,
  template: ` <ng-content />`,
  providers: [provideValueAccessor(MdOutlinedIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdOutlinedIconButtonComponent extends MdIconButtonComponent {}
