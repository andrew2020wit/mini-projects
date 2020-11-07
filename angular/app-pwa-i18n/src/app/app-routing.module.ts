import { HomeComponent } from './home/home.component';
import { HttpJsonplaceholderComponent } from './http-jsonplaceholder/http-jsonplaceholder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'http-get', component: HttpJsonplaceholderComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
