import { Component,Output,Input,EventEmitter } from '@angular/core';

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
  @Input() public Bowl : string = "";
  
  public SendMessage()
  {
    this.LaserLight.emit("How are you Parent...");
  }

  public SendMessagex()
  {
    return this.Bowl = "I am Fine Child...";
  }

}
