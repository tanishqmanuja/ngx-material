import "@material/web/chips/chip-set";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
} from "@angular/core";

@Component({
  selector: "md-chip-set",
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdChipSetComponent {
  protected el = inject(ElementRef).nativeElement;
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
