import "@material/web/chips/assist-chip";

import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";
import { MdChipComponent } from "./internal/chip.component";

type MdAssistChipTarget = "_blank" | "_parent" | "_self" | "_top" | "";

@ProxyCmp({ inputs: ["elevated", "href", "target"] })
@Component({
  selector: "md-assist-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "elevated", transform: booleanAttribute },
    { name: "href" },
    { name: "target", transform: (v: string) => v as MdAssistChipTarget },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdAssistChipComponent extends MdChipComponent {}
