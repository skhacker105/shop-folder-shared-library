import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-todo-backlog-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" 
  [attr.height]="height" [attr.width]="width" 
  [ngClass]="'bg-' + this.colorTheme + '-logo text-' + colorTheme + '-logo fill-' + colorTheme + '-logo'">
  
  <path d="M5,52h6v2a2,2,0,0,0,2,2h6v2a2,2,0,0,0,2,2H55a2,2,0,0,0,2-2V19.243a3.975,3.975,0,0,0-1.172-2.829L48.586,9.172A4.022,4.022,0,0,0,45.758,8H43.414L40.587,5.173A4.025,4.025,0,0,0,37.76,4H35.414L32.587,1.173A4.025,4.025,0,0,0,29.76,0H5A2,2,0,0,0,3,2V50A2,2,0,0,0,5,52ZM53.586,17H48V11.414ZM46,10.024V17a2,2,0,0,0,2,2h6.976a1.96,1.96,0,0,1,.024.243V58H21V10H45.758A1.983,1.983,0,0,1,46,10.024ZM39.173,6.587,40.586,8H21a2,2,0,0,0-2,2V41H17a1,1,0,0,0,0,2h2v2H17a1,1,0,0,0,0,2h2v2H17a1,1,0,0,0,0,2h2v3H13V6H37.76A2.013,2.013,0,0,1,39.173,6.587ZM5,2H29.76a2.013,2.013,0,0,1,1.413.587L32.586,4H13a2,2,0,0,0-2,2V37H9a1,1,0,0,0,0,2h2v2H9a1,1,0,0,0,0,2h2v2H9a1,1,0,0,0,0,2h2v3H5Z"/><path d="M26,19h4a2,2,0,0,0,2-2V15a2,2,0,0,0-2-2H26a2,2,0,0,0-2,2v2A2,2,0,0,0,26,19Zm0-4h4v2H26Z"/><path d="M31,23v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V23a2,2,0,0,0-2-2H33A2,2,0,0,0,31,23Zm2,0h4v2H33Z"/><path d="M38,31v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V31a2,2,0,0,0-2-2H40A2,2,0,0,0,38,31Zm2,0h4l0,2H40Z"/><path d="M45,39v2a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V39a2,2,0,0,0-2-2H47A2,2,0,0,0,45,39Zm2,0h4l0,2H47Z"/><path d="M35,15h1v1a1,1,0,0,0-.707,1.707l1,1a1,1,0,0,0,1.414,0l1-1A1,1,0,0,0,38,16V15a2,2,0,0,0-2-2H35a1,1,0,0,0,0,2Z"/><path d="M42,23h1v1a1,1,0,0,0-.707,1.707l1,1a1,1,0,0,0,1.414,0l1-1A1,1,0,0,0,45,24V23a2,2,0,0,0-2-2H42a1,1,0,0,0,0,2Z"/><path d="M49,31h1v1a1,1,0,0,0-.707,1.707l1,1a1,1,0,0,0,1.414,0l1-1A1,1,0,0,0,52,32V31a2,2,0,0,0-2-2H49a1,1,0,0,0,0,2Z"/><path d="M25,47h1a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/><path d="M51,45H30a1,1,0,0,0,0,2H51a1,1,0,0,0,0-2Z"/><path d="M25,51h1a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/><path d="M51,49H30a1,1,0,0,0,0,2H51a1,1,0,0,0,0-2Z"/><path d="M25,55h1a1,1,0,0,0,0-2H25a1,1,0,0,0,0,2Z"/><path d="M51,53H30a1,1,0,0,0,0,2H51a1,1,0,0,0,0-2Z"/>
  
  </svg>
  `,
  styles: ``
})
export class TodoBacklogLogoComponent {
  @Input() colorTheme = '';
  @Input() height = '20px';
  @Input() width = '20px';
}
