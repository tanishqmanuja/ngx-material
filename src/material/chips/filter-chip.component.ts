import "@material/web/chips/filter-chip";

import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  booleanAttribute,
  inject,
} from "@angular/core";

import { ProxyCmp } from "@tqman/ngx-material/internal";
import { provideValueAccessor } from "@tqman/ngx-material/internal";

import { MdChipComponent } from "./internal/chip.component";
import { MdFilterChip } from "@material/web/chips/filter-chip";
import { ControlValueAccessor } from "@angular/forms";

@ProxyCmp({ inputs: ["elevated", "removable", "selected", "hasSelectedIcon"] })
@Component({
  selector: "md-filter-chip",
  standalone: true,
  template: `<ng-content />`,
  inputs: [
    { name: "elevated", transform: booleanAttribute },
    { name: "removable", transform: booleanAttribute },
    { name: "selected", transform: booleanAttribute },
    { name: "hasSelectedIcon", transform: booleanAttribute },
  ],
  host: {
    "(click)": "onChange($event.target.selected)",
    "(blur)": "onTouched()",
  },
  providers: [provideValueAccessor(MdFilterChipComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFilterChipComponent
  extends MdChipComponent
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
