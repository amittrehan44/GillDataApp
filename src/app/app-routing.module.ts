import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ClientDataComponent } from "./client-data/client-data.component";
import { ReactiveClientInputComponent } from "./client-data/reactive-client-input/reactive-client-input.component";


const routes: Routes = [
  { path: 'inputData', component: ClientDataComponent },
  { path: 'reactiveInputData', component: ReactiveClientInputComponent },
  { path: '', redirectTo: 'inputData', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
