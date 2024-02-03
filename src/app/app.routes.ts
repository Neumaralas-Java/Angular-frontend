
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PricecalculatorComponent } from './component/pricecalculator/pricecalculator.component';
import { PricetableComponent } from './component/pricetable/pricetable.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'price-table', component: PricetableComponent },
  { path: 'price-calculator', component: PricecalculatorComponent },
  {path:'product-form', component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
