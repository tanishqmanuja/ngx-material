import "@material/web/chips/assist-chip";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

import { MdChipBase } from "./internal/chip.component";

export type MdAssistChipTarget = "_blank" | "_parent" | "_self" | "_top" | "";

const ASSIST_CHIP_INPUTS = [
  { name: "elevated", transform: booleanAttribute },
  { name: "href" },
  {
    name: "target",
    transform: (v: MdAssistChipTarget) => v,
  },
];

@ProxyCmp({ inputs: ASSIST_CHIP_INPUTS })
@Component({
  selector: "md-assist-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: ASSIST_CHIP_INPUTS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdAssistChipComponent extends MdChipBase {}
