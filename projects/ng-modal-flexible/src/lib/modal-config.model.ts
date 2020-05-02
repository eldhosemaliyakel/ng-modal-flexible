export class ModalConfig {
    isOpen: boolean = false;
    modalParentClass: string;
    headingText: string;
    headingTextClass: string;
    showCloseBtn: boolean = true;
    closeBtnContent:any = 'X';
    closeBtnClass: string;
    contentText: string;
    contentTextClass: string;
    buttonOneText: string;
    buttonOneClass: string = 'primary-btn';
    buttonTwoText: string;
    buttonTwoClass: string = 'danger-btn';
    buttonThreeText: string;
    buttonThreeClass: string;
    clickOutsideToClose: boolean = true;
    escapeToClose: boolean = false;
    showAnimation: boolean = true;
}