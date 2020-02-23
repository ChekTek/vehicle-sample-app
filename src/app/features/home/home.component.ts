import { Component, OnInit, ViewChild } from '@angular/core';
import { GarageComponent } from './garage/garage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(GarageComponent)
  garage: GarageComponent;

  constructor() { }

  ngOnInit() {
  }

  toggleGarageButton() {
    if (this.garage.isOpen)
      this.garage.closeDoor();
    else
      this.garage.openDoor();
  }
}
