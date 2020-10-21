import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example';

@NgModule({
  declarations: [
    ExampleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleComponent,
  ]
})
export class AModule { }
