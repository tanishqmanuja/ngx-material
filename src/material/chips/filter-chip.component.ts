import "@material/web/chips/filter-chip";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  inject,
  Renderer2,
} from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

import { MdFilterChip } from "@material/web/chips/filter-chip";
import { provideValueAccessor, ProxyCmp } from "@tqman/ngx-material/internal";

import { MdChipBase } from "./internal/chip.component";

const FILTER_CHIP_INPUTS = [
  { name: "elevated", transform: booleanAttribute },
  { name: "removable", transform: booleanAttribute },
  { name: "selected", transform: booleanAttribute },
  { name: "hasSelectedIcon", transform: booleanAttribute },
];

@ProxyCmp({ inputs: FILTER_CHIP_INPUTS })
@Component({
  selector: "md-filter-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: FILTER_CHIP_INPUTS,
  host: {
    "(click)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdFilterChipComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilterChipComponent
  extends MdChipBase
  implements ControlValueAccessor
{
  private renderer = inject(Renderer2);

  protected onChange = (_value: MdFilterChip["selected"]) => {};
  protected onTouched = () => {};

  registerOnChange(fn: (value: MdFilterChip["selected"]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    this.renderer.setProperty(this.el, "selected", value);
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.el, "disabled", isDisabled);
  }
}
