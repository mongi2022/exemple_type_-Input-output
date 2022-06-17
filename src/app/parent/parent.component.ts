import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  currentItem = '';

  constructor() { }

  ngOnInit(): void {
  }
  childEvent(x:string){
 this.currentItem=x;
     
  }
}
