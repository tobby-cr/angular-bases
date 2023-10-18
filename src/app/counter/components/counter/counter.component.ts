import { Component } from "@angular/core";

// Este componente debe ser parte de un modulo, en este caso en app.module.
// NOTA: Desde esta version 16 de Angular, tambien existen los "standalone components" los cuales no necesitan
// ser parte de un modulo.
@Component({
  selector: 'app-counter',
  // Con este template se debe crear todo el htmo aquí:
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  // Con este template, se debe indicar el path del archivo html:
  // templateUrl: ''
})
export class CounterComponent {

  public counter: number = 10;

  // Por defecto los metodos son publicos, por lo tanto no es necesario colocar la palabra public:
  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}

