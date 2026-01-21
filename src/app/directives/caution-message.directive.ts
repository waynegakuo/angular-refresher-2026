import { Directive, ElementRef, Input, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCautionMessage]',
  standalone: true
})
export class CautionMessageDirective implements OnInit {
  @Input('appCautionMessage') featureName: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const message = `Caution: As of Angular v21, the ${this.featureName} is still experimental and not production-ready. If using in production, be prepared for potential breaking changes in future releases until marked as stable.`;

      const p = this.renderer.createElement('p');
      const text = this.renderer.createText(message);
      this.renderer.appendChild(p, text);

      // Styling for the caution message
      this.renderer.setStyle(p, 'color', '#856404');
      this.renderer.setStyle(p, 'background-color', '#fff3cd');
      this.renderer.setStyle(p, 'border', '1px solid #ffeeba');
      this.renderer.setStyle(p, 'padding', '10px');
      this.renderer.setStyle(p, 'border-radius', '4px');
      this.renderer.setStyle(p, 'margin-bottom', '15px');
      this.renderer.setStyle(p, 'font-weight', 'bold');

      // Insert at the beginning of the host element
      this.renderer.insertBefore(this.el.nativeElement, p, this.el.nativeElement.firstChild);
    }
  }
}
