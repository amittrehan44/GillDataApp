import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ClientDataComponent } from "./client-data/client-data.component";
import { ReactiveClientInputComponent } from "./client-data/reactive-client-input/reactive-client-input.component";
import { ClientDisplayComponent } from "./client-data/client-display/client-display.component";

const routes: Routes = [
  { path: 'reactiveInputData/:id', component: ReactiveClientInputComponent },
  { path: 'inputData', component: ClientDataComponent },
  { path: 'Register', component: ClientDisplayComponent },
  { path: '', redirectTo: 'reactiveInputData/0', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
