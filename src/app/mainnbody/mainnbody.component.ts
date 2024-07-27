import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'MainBody',
  templateUrl: './mainnbody.component.html',
  styleUrls: ['./mainnbody.component.css'], 
  
  animations: [
    trigger('fadeAnimation', [
     
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ]),
      transition('hidden => visible', [
        animate('500ms ease-out')
      ]),
    ])
  ]
})
export class MainnbodyComponent {
  animationState: string = 'visible'; 
  amount: number = 26;
  imagePath: string = "../../assets/images/furniture-dining-table-icon-3d-illustration-png.png";

  handleNumberChange = (amt: number, imgNumber: number) => {

    this.animationState = 'hidden';
setTimeout(()=>{
  this.amount = amt;
  switch (imgNumber) {
    case 1:
      this.imagePath = "../../assets/images/furniture-dining-table-icon-3d-illustration-png.png";
      break;
    case 2:
      this.imagePath = "../../assets/images/pngtree-watercolor-illustration-of-old-rusty-green-table-png-image_11555732.png";
      break;
    case 3:
    default:
      this.imagePath = "../../assets/images/Table-PNG-HD.png";
      break;
  }

  this.animationState = 'visible';
},500)
  };

  AAlert = () => {
    alert("Hello World");
  };
}
