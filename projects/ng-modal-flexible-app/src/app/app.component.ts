import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="modalOne.openModal()">Open Modal</button>
    <ng-modal-flexible 
      [modalConfig]="modalConfig"
      (modalClosed)="modalClosed()"
      (buttonOneClicked)="buttonOneClicked()"
      #modalOne>
    </ng-modal-flexible>
  `
})
export class AppComponent {

  @ViewChild('modalOne', {static: false}) modalOne;
  modalConfig = { buttonOneText: 'OK', escapeToClose: true }

  modalClosed() { console.log(`modalClosed !!`); }

  buttonOneClicked() {
    /* Dro your logic here. console.log(`buttonOneClicked !!`); */
    this.modalOne.closeModal();
  }

}