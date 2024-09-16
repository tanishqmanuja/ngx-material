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
import { ProxyCmp } from "@tqman/ngx-material/internal";

export type ListItemTarget = "_blank" | "_parent" | "_self" | "_top" | "";

const LIST_ITEM_INPUTS = [
  { name: "disabled", transform: booleanAttribute },
  { name: "type", transform: (v: ListItemType) => v },
  { name: "isListItem", transform: booleanAttribute },
  { name: "href" },
  { name: "target", transform: (v: ListItemTarget) => v },
];

@ProxyCmp({ inputs: LIST_ITEM_INPUTS })
@Component({
  selector: "md-list-item",
  standalone: true,
  template: ` <ng-content />`,
  inputs: LIST_ITEM_INPUTS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdListItemComponent {
  protected el: MdListItem = inject(ElementRef).nativeElement;
  protected ngZone = inject(NgZone);
  private cdRef = inject(ChangeDetectorRef);

  constructor() {
    this.cdRef.detach();
  }
}
