# ng-modal-flexible
  
  
> A simple, light-weight, highly customizable modal for Angular 2+ projects.

ng-modals-flexible allows you to create a fully functional modal in few lines of code. This modal is fully customizable with no pain and comes default with opening and closing animations. 
  
  
### Installation
```bash
npm install ng-modal-flexible --save
```
  
  
### API
  
In the module `app.module.ts` :

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { NgModalFlexibleModule } from 'ng-modal-flexible';
 
@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgModalFlexibleModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, in the `component` where you have to call modal :

```javascript
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="modalOne.openModal()">Open Modal</button>
    <ng-modal-flexible 
      [modalConfig]="modalConfig"
      (modalClosed)="modalClosedFn()"
      (buttonOneClicked)="buttonOneClickedFn()"
      #modalOne>
    </ng-modal-flexible>
  `
})
export class AppComponent {

  // Second param for ViewChild is only needed for angular 8+
  @ViewChild('modalOne', {static: false}) modalOne; 
  modalConfig = { buttonOneText: 'OK', escapeToClose: true }

  modalClosedFn() { /* console.log(`modalClosedFn called !!`); */ }

  buttonOneClickedFn() {
    /* Drop your logic here */
    this.modalOne.closeModal();
  }

}
```

    
### Properties for modalConfig
  
  
`modalParentClass` (string) : CSS class for modal's parent.<br />
`headingText` (string) : Heading text for modal.<br />
`headingTextClass` (string) : CSS class for heading text for modal.<br />
`showCloseBtn` (boolean) : To show/hide close button. True by default.<br />
`closeBtnContent` (string | HTML) : Content for close button. 'X' by default.<br />
`closeBtnClass` (string) : CSS class for close button.<br />
`contentText` (string) : Main content.<br />
`contentTextClass` (string) : CSS class for main content.<br />
`buttonOneText` (string) : Text for first button. Button will only be rendered if this has a value.<br />
`buttonOneClass` (string) : CSS class for first button.<br />
`buttonTwoText` (string) : Text for second button. Button will only be rendered if this has a value.<br />
`buttonTwoClass` (string) : CSS class for second button.<br />
`buttonThreeText` (string) : Text for third button. Button will only be rendered if this has a value.<br />
`buttonThreeClass` (string) : CSS class for third button.<br />
`clickOutsideToClose` (boolean) : To close/not close the modal clicking outside of it. True by default.<br />
`escapeToClose` (boolean) : To close/not close the modal on escape key press.<br />
`showAnimation` (boolean) : To show/hide opening and closing animation.<br />
  
  
### Events for modal
  
  
`(buttonOneClicked)` : Event will trigger on button 1 click.<br />
`(buttonTwoClicked)` : Event will trigger on button 2 click.<br />
`(buttonThreeClicked)` : Event will trigger on button 3 click.<br />
`(modalClosed)` : Event will trigger on modal close.<br />
  
  
#### All set to go !
