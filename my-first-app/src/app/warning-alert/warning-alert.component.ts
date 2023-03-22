import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is warning alert, code {{ warningStatusCode}} !</p>`,
  styles: [`
  p {
    padding : 20px;
    color: red;
    background-color: mistyrose;
    border : 1 px solid red;
  }
  `]
})
export class WarningAlertComponent {

  warningStatusCode = '200';
}
