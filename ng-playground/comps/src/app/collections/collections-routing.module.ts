import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import {BiographyComponent} from './biography/biography.component';
import {PartnerComponent} from './partner/partner.component';
import {CompaniesComponent} from './companies/companies.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      {path: 'companies', component: CompaniesComponent},
      {path: 'partner', component: PartnerComponent},
      {path: '', component: BiographyComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
