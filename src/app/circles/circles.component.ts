import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  generated: boolean = false
  items: Array<string> =[];
  arrayColors: any = {};
  circleDiameter!: number;
  selectedColor: string = 'color';
  k!:number


  onAdd(count:number) {
    this.items.length = 0;
    this.items.length = count;
    this.generated = true
    if(count === 100){
      this.k = 111
      this.circleDiameter = 50;
    } else if(count === 225){
      this.k = 222
      this.circleDiameter = 32;
    } else {
      this.k = 333
      this.circleDiameter = 24;
    }
  }

  onReset() {
    this.items.length = 0;
    this.generated = !this.generated
  }

  ngOnInit(): void {
  }

}
