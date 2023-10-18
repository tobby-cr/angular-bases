import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    // Debemos importar el CommonModule para que funcione la directiva *ngIf.
    CommonModule,
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {}

// CommonModule exporta todas las directivas y canalizaciones básicas de Angular, como NgIf, NgForOf, DecimalPipe, etc. Reexportado por
// BrowserModule, que se incluye automáticamente en el AppModule raíz cuando crea una nueva aplicación con el nuevo comando CLI. Por esta razon es
// que cuando separamos la aplicacion en modulos, debemos realizar la importacion de CommonModule porque ya no estamos en el mismo scope del
// AppModule que importa el BrowserModule que a su vez exporta el CommonModule.

// Las siguientes directivas vienen incluidas dentro del módulo “CommonModule” de @angular/common: (https://angular.io/api/common/CommonModule)

// Directives
// - *ngIf
// - *ngFor
// - ngSwitch
// - ngClass
// - ngStyle
// - ngComponentOutlet
// - ngForOf
// - ngPlural
// - ngPluralCase
// - ngSwitchCase
// - ngSwitchDefault
// - ngTemplateOutlet

// Pipes
// - asyncPipe
// - currencyPipe
// - datePipe
// - decimalPipe
// - i18nPluralPipe
// - i18nSelectPipe
// - jsonPipe
// - keyValuePipe
// - lowerCasePipe
// - percentPipe
// - slicePipe
// - titleCasePipe
// - upperCasePipe
