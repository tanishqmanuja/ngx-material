import "@material/web/chips/input-chip";

import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";
import { MdChipComponent } from "./internal/chip.component";

type MdInputChipTarget = "_blank" | "_parent" | "_self" | "_top" | "";

@ProxyCmp({ inputs: ["avatar", "removeOnly", "selected", "href", "target"] })
@Component({
  selector: "md-input-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "avatar", transform: booleanAttribute },
    { name: "removeOnly", transform: booleanAttribute },
    { name: "selected", transform: booleanAttribute },
    { name: "href" },
    { name: "target", transform: (v: string) => v as MdInputChipTarget },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdInputChipComponent extends MdChipComponent {}
