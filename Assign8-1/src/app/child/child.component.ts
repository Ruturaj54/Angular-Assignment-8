import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() public LaserLight = new EventEmitter();

  public SendMessage()
  {
    this.LaserLight.emit("Hello Parent...");
  }

}
