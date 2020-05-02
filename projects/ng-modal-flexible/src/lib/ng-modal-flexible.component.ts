import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ModalConfig } from './modal-config.model'

@Component({
  selector: 'ng-modal-flexible',
  templateUrl:'./ng-modal-flexible.component.html',
  styleUrls: ['./ng-modal-flexible.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgModalFlexibleComponent implements OnInit {

  @Input() modalConfig: ModalConfig;
  @Output() buttonOneClicked = new EventEmitter();
  @Output() buttonTwoClicked = new EventEmitter();
  @Output() buttonThreeClicked = new EventEmitter();
  @Output() modalClosed = new EventEmitter();
  fadeOutAnimationClass = '';

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalConfig.isOpen = true;
  }

  closeModal() {
    if (this.modalConfig.showAnimation) this.fadeOutAnimationClass = 'animate-out';
    setTimeout(() => {
      this.modalConfig.isOpen = false;
      this.fadeOutAnimationClass = '';
    }, 500);
    this.modalClosed.emit();
  }
}
