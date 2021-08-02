import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  generated: boolean = false
  items: Array<string> =[];
  arrayColors: any = { };
  circleDiameter!: number;
  selectedColor: string = 'color';


  onAdd(count:number) {
    this.items.length = count;
    this.generated = true
    if(count === 100){
      this.circleDiameter = 50;
    } else if(count === 225){
      this.circleDiameter = 40;
    } else {
      this.circleDiameter = 26;
    }
  }

  onReset() {
    this.items.length = 0;
    this.generated = !this.generated
  }








  ngOnInit(): void {
  }

}
