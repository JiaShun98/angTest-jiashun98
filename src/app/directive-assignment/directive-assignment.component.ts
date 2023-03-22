import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent {
  choice : String ='';
  choiceArr = [];
  num: number = 0;
  isDisplay = false;
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  onClick(){
    const d = new Date();

    this.choiceArr.push(this.choice + "| Increment number :"+ this.num +"| TimeStamp :" + d);
    this.num++;
    console.log(this.num);
  }

  onClickShow(){
    this.isDisplay = !this.isDisplay;
  }
}
