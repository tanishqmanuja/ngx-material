import "@material/web/chips/suggestion-chip";

import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MdAssistChipComponent } from "./assist-chip.component";

@Component({
  selector: "md-suggestion-chip",
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSuggestionChipComponent extends MdAssistChipComponent {}
