import "@material/web/iconbutton/filled-tonal-icon-button";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdIconButtonComponent } from "./icon-button.component";

@Component({
  selector: "md-filled-tonal-icon-button",
  standalone: true,
  template: `<ng-content />`,
  providers: [provideValueAccessor(MdFilledTonalIconButtonComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilledTonalIconButtonComponent extends MdIconButtonComponent {}
