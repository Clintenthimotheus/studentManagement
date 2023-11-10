import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.handleLoad();
  }

  handleLoad() {
    const animationElement = this.elementRef.nativeElement.querySelector('#animation');
    if (animationElement) {
      animationElement.classList.remove('animation-hidden');
    }
  }
}
