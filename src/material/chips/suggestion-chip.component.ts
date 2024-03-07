import "@material/web/chips/suggestion-chip";

import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";
import { MdAssistChipComponent } from "./assist-chip.component";

type MdSuggestionChipTarget = "_blank" | "_parent" | "_self" | "_top" | "";

@ProxyCmp({ inputs: ["elevated", "href", "target"] })
@Component({
  selector: "md-suggestion-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "elevated", transform: booleanAttribute },
    { name: "href" },
    { name: "target", transform: (v: string) => v as MdSuggestionChipTarget },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSuggestionChipComponent extends MdAssistChipComponent {}
