import "@material/web/chips/input-chip";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";

import { MdChipBase } from "./internal/chip.component";

export type MdInputChipTarget = "_blank" | "_parent" | "_self" | "_top" | "";

const INPUT_CHIP_INPUTS = [
  { name: "avatar", transform: booleanAttribute },
  { name: "href" },
  {
    name: "target",
    transform: (v: MdInputChipTarget) => v,
  },
  { name: "removeOnly", transform: booleanAttribute },
  { name: "selected", transform: booleanAttribute },
];

@ProxyCmp({ inputs: INPUT_CHIP_INPUTS })
@Component({
  selector: "md-input-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: INPUT_CHIP_INPUTS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdInputChipComponent extends MdChipBase {}
