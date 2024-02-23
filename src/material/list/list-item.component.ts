import "@material/web/list/list-item";

import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
} from "@angular/core";

import type { ListItemType, MdListItem } from "@material/web/list/list-item";

export type ListItemTarget = "_blank" | "_parent" | "_self" | "_top" | "";

@Component({
  selector: "md-list-item",
  standalone: true,
  template: ` <ng-content />`,
  inputs: [
    "type",
    "href",
    "target",
    { name: "disabled", transform: booleanAttribute },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdListItemComponent {
  private el: MdListItem = inject(ElementRef).nativeElement;
  private ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }

  get disabled() {
    return this.el.disabled;
  }
  set disabled(v) {
    this.ngZone.runOutsideAngular(() => {
      this.el.disabled = v;
    });
  }

  get type() {
    return this.el.type;
  }
  set type(v: ListItemType) {
    this.ngZone.runOutsideAngular(() => {
      this.el.type = v;
    });
  }

  get href() {
    return this.el.href;
  }
  set href(v: string) {
    this.ngZone.runOutsideAngular(() => {
      this.el.href = v;
    });
  }

  get target() {
    return this.el.target;
  }
  set target(v: ListItemTarget) {
    this.ngZone.runOutsideAngular(() => {
      this.el.target = v;
    });
  }
}
