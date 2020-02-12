import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: object[];
  cols: Column[];
  @Output() rowClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    if (!this.data || this.data.length === 0) { return; }
    const properties = this.getPrimitivePropertyList(this.data[0]);
    this.cols = this.getColumnsFromPropertyList(properties);
  }

  onRowClicked(id: number) {
    this.rowClicked.emit(id);
  }

  getPrimitivePropertyList(object: object): string[] {
    return Object.getOwnPropertyNames(this.data[0]).filter((prop) => {
      return this.data[0][prop] !== Object(this.data[0][prop]);
    });
  }

  getColumnsFromPropertyList(properties: string[]): Column[] {
    return properties.map(field => {
      const header = field.charAt(0).toUpperCase() + field.slice(1);
      return { header, field };
    });
  }
}

export interface Column {
  header: string;
  field: string;
}
