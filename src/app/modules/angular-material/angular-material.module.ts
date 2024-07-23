import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


const materialComponents: any[] = [
  MatButtonModule
];


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
  
})
export class AngularMaterialModule { }
