import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[courseListHighlight]',
})
export class CourseListHighlightDirective {
  @Input() creationDate: Date;
  ngOnInit() {
    let courseCreatedDate = new Date(this.creationDate);
    let currentDate = new Date();
    let beforeFourteenDays = new Date();
    beforeFourteenDays.setDate(beforeFourteenDays.getDate() - 14);
    if (courseCreatedDate> currentDate) {
      this.renderer.addClass(this.element.nativeElement, 'futureCourse');
    } else if (
      courseCreatedDate<= currentDate &&
      courseCreatedDate> beforeFourteenDays
    ) {
      this.renderer.addClass(this.element.nativeElement, 'freshCourse');
    } else {
      this.renderer.addClass(this.element.nativeElement, 'oldCourse');
    }
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
