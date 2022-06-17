import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  @Input() item!:string;
  @Output() newmsg = new EventEmitter<string>(); 
   constructor() { }

  ngOnInit(): void {
  }

  addmessage(value: string) {
    this.newmsg.emit(value);
  }
}

