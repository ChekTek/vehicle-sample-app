import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }
