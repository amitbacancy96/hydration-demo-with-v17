import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-constraints',
  standalone: true,
  imports: [],
  templateUrl: './constraints.component.html',
  styleUrl: './constraints.component.css'
})
export class ConstraintsComponent  implements AfterViewInit{
  paragraphToLoad = 'This is a text which is binded thought <strong>Inner HTML</strong> attribute.'
  htmlToAdd= '';
  @ViewChild('one') d1:ElementRef;

ngAfterViewInit(){
  this.paragraphToLoad = 'Content has been changed'
  this.htmlToAdd = '<div class="two">two</div>';
  // this.d1.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
  }

}
