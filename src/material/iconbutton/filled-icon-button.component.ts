import "@material/web/iconbutton/filled-icon-button";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdIconButtonComponent } from "./icon-button.component";

@Component({
  selector: "md-filled-icon-button",
  standalone: true,
  template: `<ng-content />`,
  providers: [provideValueAccessor(MdFilledIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledIconButtonComponent extends MdIconButtonComponent {}
