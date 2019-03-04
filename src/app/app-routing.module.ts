import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { OrderDetailsComponent } from './search-user/order-details/order-details.component';
import { UsersResolver } from './search-user/order.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchUserComponent
  },
  {
    path: 'order/:custId/:startDate/:endDate',
    component: OrderDetailsComponent,
    resolve :{
      order: UsersResolver
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
