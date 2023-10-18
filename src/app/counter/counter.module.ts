import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// Los componentes solo son visibles para el scope de este modulo. Para poder usarlo desde otro lugar, se
// debe exportar el componente.
// Para que este modulo pueda ser utilizado, se debe agregar en el app.module de la aplicacion.

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
