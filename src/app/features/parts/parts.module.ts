import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsComponent } from './parts.component';
import { SharedModule } from '../../shared/shared.module';
import { PartComponent } from './part/part.component';
import { PartDetailsComponent } from './part/part-details/part-details.component';

@NgModule({
  declarations: [PartsComponent, PartComponent, PartDetailsComponent],
  imports: [CommonModule, PartsRoutingModule, SharedModule]
})
export class PartsModule {}
