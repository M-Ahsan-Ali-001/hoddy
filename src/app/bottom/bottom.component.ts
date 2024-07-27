import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css'], // Fixed typo here
  animations: [
    trigger('fadebottom', [

      state('hideme', style({ opacity: 0 })),

      state('showme', style({ opacity: 1 })),

      transition('hideme => showme', [
        animate('500ms ease-out')
      ]),

      transition('showme => hideme', [
        animate('500ms ease-out')
      ]),

    ])
  ]
})
export class BottomComponent {

  animationState1: string = 'showme';

  imagePathholder: string[] = [
    '../../assets/images/t2.png',
    '../../assets/images/Dining-Table-PNG.png',
    '../../assets/images/ww.png',
    '../../assets/images/orangeChair.png',
    '../../assets/images/blueChair.png'
  ];

  handleImageCategory = (cato: string) => {
    this.animationState1 = "hideme";
    const refTable=document.getElementsByClassName('table-h')[0] as HTMLElement;
    const refChair=document.getElementsByClassName('chair-h')[0] as HTMLElement;

    const refAll=document.getElementsByClassName('all-btn-bottom')[0] as HTMLElement;


    setTimeout(() => {

      switch (cato) {
        case 'table':



        if(refTable){
          refTable.style.backgroundColor="#393939"
          refChair.style.backgroundColor="transparent"
          refAll.style.backgroundColor="transparent"
          refAll.style.border="1px solid #f4ebc9"
          refAll.style.color="#f4ebc9"
        }
          this.imagePathholder = [
            '../../assets/images/t2.png',
            '../../assets/images/Dining-Table-PNG.png',
            '../../assets/images/ww.png',
            '../../assets/images/t4.png',
            '../../assets/images/t5.png'
          ];
          break;
        case 'all':


        
        if(refTable){
          refTable.style.backgroundColor="transparent"
          refChair.style.backgroundColor="transparent"
          refAll.style.backgroundColor="#f4ebc9"
          refAll.style.color="#282A2C"
        }

          this.imagePathholder = [
            '../../assets/images/t2.png',
            '../../assets/images/Dining-Table-PNG.png',
            '../../assets/images/ww.png',
            '../../assets/images/orangeChair.png',
            '../../assets/images/blueChair.png'
          ];
          break;
        case 'chair':

        
        if(refTable){
          refChair.style.backgroundColor="#393939"
          refTable.style.backgroundColor="transparent"
          refAll.style.backgroundColor="transparent"
          refAll.style.border="1px solid #f4ebc9"
          refAll.style.color="#f4ebc9"
        }
          this.imagePathholder = [
            '../../assets/images/c5.png',
            '../../assets/images/c4.png',
            '../../assets/images/c3.png',
            '../../assets/images/orangeChair.png',
            '../../assets/images/blueChair.png'
          ];
      }
      this.animationState1 = "showme";

    }, 500);
  };

  // Return a string template for angular binding
  imagescontroller = (text: string, className: string ) => {
    return `<img src="${text}" class="${className}"   [@fadebottom]="'animationState1'"   />`;
  };
}