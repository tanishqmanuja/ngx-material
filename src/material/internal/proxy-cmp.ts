import { fromEvent } from "rxjs";

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val: any) {
        this.ngZone.runOutsideAngular(() => (this.el[item] = val));
      },
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.ngZone.runOutsideAngular(() =>
        this.el[methodName].apply(this.el, args),
      );
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => (instance[eventName] = fromEvent(el, eventName)));
};

/**
 * @requirements el, ngZone
 */
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator = function (cls: any) {
    const { inputs, methods } = opts;

    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
