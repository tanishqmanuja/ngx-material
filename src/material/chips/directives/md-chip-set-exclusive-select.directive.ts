import {
  ContentChildren,
  DestroyRef,
  Directive,
  inject,
  QueryList,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ControlValueAccessor } from "@angular/forms";

import { MdFilterChip } from "@material/web/chips/filter-chip";
import { provideValueAccessor } from "@tqman/ngx-material/internal";
import { startWith, tap } from "rxjs";

import { MdFilterChipComponent } from "../filter-chip.component";

@Directive({
  selector: "md-chip-set[exclusive-select]",
  standalone: true,
  providers: [provideValueAccessor(MdChipSetExclusiveDirective)],
})
export class MdChipSetExclusiveDirective implements ControlValueAccessor {
  selected: string | null = null;

  private destroyRef = inject(DestroyRef);

  @ContentChildren(MdFilterChipComponent)
  private chips!: QueryList<MdFilterChipComponent & { el: MdFilterChip }>;

  ngAfterViewInit() {
    this.chips.changes
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(null),
        tap(() => this.writeValue(this.selected)),
        tap(() => this.registerChips()),
      )
      .subscribe();
  }

  registerChips() {
    this.chips.forEach(chip => {
      chip.registerOnTouched(this.onTouched.bind(this));
      chip.registerOnChange(v => {
        this.writeValue(v ? chip.el.ariaValueText : null);
      });
    });
  }

  selectChip(id: string | null, force = false) {
    this.selected = id;

    this.chips
      ?.filter(c => c.el.ariaValueText !== id)
      .forEach(c => c.writeValue(false));

    if (force) {
      this.chips
        ?.filter(c => c.el.ariaValueText === id)
        .forEach(c => c.writeValue(true));
    }
  }

  writeValue(selected: string | null): void {
    this.selectChip(selected, true);
    this.onChange(selected);
    this.onTouched();
  }

  protected onChange = (selected: string | null) => {
    this.selected = selected;
  };
  protected onTouched = () => {};

  registerOnChange(fn: (selected: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
