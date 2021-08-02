import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  public toggle: boolean = false;
  items: Array<string> =[];
  circleDiameter!: number;


  handleAdd(count:number) {
    this.items.length = count;

    if(count === 100){
      this.circleDiameter = 50;
    } else if(count === 225){
      this.circleDiameter = 32;
    } else {
      this.circleDiameter = 23;
    }
  }

  handleReset() {
    this.items.length = 0;
  }


  public arrayColors: any = {

  };

  public selectedColor: string = 'color1';

  public color1: string = '#2889e9';

  constructor() {}

  ngOnInit(): void {
  }

}
