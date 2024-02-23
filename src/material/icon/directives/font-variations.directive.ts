import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  Renderer2,
  RendererStyleFlags2,
} from "@angular/core";

import type { MdIcon } from "@material/web/icon/icon";

@Directive({
  standalone: true,
  selector: "md-icon[fill], md-icon[wght], md-icon[grad], md-icon[opsz]",
  inputs: [
    { name: "fill", transform: numberAttribute },
    { name: "wght", transform: numberAttribute },
    { name: "grad", transform: numberAttribute },
    { name: "opsz", transform: numberAttribute },
  ],
})
export class MdIconFontVariationsDirective {
  private el: MdIcon = inject(ElementRef).nativeElement;
  private renderer = inject(Renderer2);

  private variations: Record<string, number | undefined> = {};

  set fill(v: number) {
    this.variations["fill"] = v;
    this._reflect();
  }

  set wght(v: number) {
    this.variations["wght"] = v;
    this._reflect();
  }

  set grad(v: number) {
    this.variations["grad"] = v;
    this._reflect();
  }

  set opsz(v: number) {
    this.variations["opsz"] = v;
    this._reflect();
  }

  private _reflect() {
    const fontVariationSettings: string[] = [];

    if (this.variations["fill"]) {
      fontVariationSettings.push(`'FILL' ${this.variations["fill"]}`);
    }

    if (this.variations["wght"]) {
      fontVariationSettings.push(`'wght' ${this.variations["wght"]}`);
    }

    if (this.variations["grad"]) {
      fontVariationSettings.push(`'GRAD' ${this.variations["grad"]}`);
    }

    if (this.variations["opsz"]) {
      fontVariationSettings.push(`'opsz' ${this.variations["opsz"]}`);
    }

    if (fontVariationSettings.length === 0) return;

    this.renderer.setStyle(
      this.el,
      "font-variation-settings",
      fontVariationSettings.join(", "),
      RendererStyleFlags2.DashCase
    );
  }
}
