import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-modal-flexible-app';

  modalClosedEventTriggered() {
    console.log(`modalClosedEventTriggered !!`);
  }

  buttonOneClickedTriggered() {
    console.log(`buttonOneClickedTriggered !!`);
  }

}