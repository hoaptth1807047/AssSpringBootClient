import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {CreateEditProductComponent} from './product/create-edit/create-edit.component';


const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/create-edit',
    component: CreateEditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
