import { AfterViewInit, Component, ElementRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-constraints',
  standalone: true,
  imports: [],
  templateUrl: './constraints.component.html',
  styleUrl: './constraints.component.css'
})
export class ConstraintsComponent implements OnInit, AfterViewInit {
  paragraphToLoad = 'This is a text which is binded thought <strong>Inner HTML</strong> attribute.'
  htmlToAdd = '';
  hostElement = inject(ElementRef).nativeElement;
  newNode: any;

  ngOnInit() {
    // Create a new <p> element with the `Hello` text inside
    const newNode = document.createElement('p');
    newNode.innerHTML = 'Hello';
    this.newNode = newNode;
  }
  ngAfterViewInit() {
    this.paragraphToLoad = 'Content has been changed'
    // this.htmlToAdd = '<div class="two">two</div>';

    /* Insert the <p> before the first element. Since Angular has no information
   about the <p> element, it will be looking for the <div> element at the first
   element position instead. As a result, a hydration mismatch error would be
   thrown. Instead, update component's template to create the <p> element. */

    //  https://angular.dev/errors/NG0500
    // this.hostElement.insertBefore(this.newNode, this.hostElement.firstChild);
  }

}
