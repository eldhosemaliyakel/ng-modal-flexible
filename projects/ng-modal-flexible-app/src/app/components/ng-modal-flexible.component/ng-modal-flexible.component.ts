import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ModalConfig } from './modal-config.model'

@Component({
  selector: 'app-ng-modal-flexible',
  templateUrl:'./ng-modal-flexible.component.html',
  styleUrls: ['./ng-modal-flexible.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class NgModalFlexibleComponent implements OnInit {

  @Input() modalConfig: ModalConfig;
  @Output() buttonOneClicked = new EventEmitter();
  @Output() buttonTwoClicked = new EventEmitter();
  @Output() buttonThreeClicked = new EventEmitter();
  @Output() modalClosed = new EventEmitter();
  fadeOutAnimationClass = '';

  constructor() { }

  ngOnInit() { }

  openModal() { 
    if(!this.modalConfig.headingText) this.modalConfig.headingText = 'Welcome to ng-modal-flexible';
    if(!this.modalConfig.contentText) this.modalConfig.contentText = 'Please assign you contents to \'contentText\'property of modalConfig and you are good to go!';
    if(!this.modalConfig.closeBtnContent) this.modalConfig.closeBtnContent = 'X';
    if(typeof(this.modalConfig.showCloseBtn) === 'undefined') this.modalConfig.showCloseBtn = true;  
    if(typeof(this.modalConfig.showAnimation) === 'undefined') this.modalConfig.showAnimation = true;  
    if(typeof(this.modalConfig.clickOutsideToClose) === 'undefined') this.modalConfig.clickOutsideToClose = true;
    this.modalConfig.isOpen = true; 
  }

  closeModal() {
    if (this.modalConfig.showAnimation) this.fadeOutAnimationClass = 'animate-out';
    setTimeout(() => {
      this.modalConfig.isOpen = false;
      this.fadeOutAnimationClass = '';
    }, this.modalConfig.showAnimation ? 500 : 0);
    this.modalClosed.emit();
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.modalConfig.escapeToClose && event.key === 'Escape') this.closeModal();
  }
}
