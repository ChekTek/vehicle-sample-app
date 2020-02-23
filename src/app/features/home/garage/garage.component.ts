import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  private doorIsOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openDoor() {
    this.doorIsOpen = true;
  }

  closeDoor() {
    this.doorIsOpen = false;
  }

  get isOpen(){
    return this.doorIsOpen;
  }
}
