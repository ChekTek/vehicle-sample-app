import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartsComponent } from './parts.component';
import { PartComponent } from './part/part.component';
import { PartDetailsComponent } from './part/part-details/part-details.component';

const routes: Routes = [{
  path: '',
  component: PartsComponent,
  children: [
    {
      path: ':id',
      component: PartComponent,
      children: [
        {
          path: 'details',
          component: PartDetailsComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule {}
