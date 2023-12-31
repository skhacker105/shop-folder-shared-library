import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-purchase-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="26 0 464 464.24102" 
  [attr.height]="height" [attr.width]="width" 
  [ngClass]="'bg-' + this.colorTheme + '-logo text-' + colorTheme + '-logo fill-' + colorTheme + '-logo'">
  
  <path d="m200.601562 425.769531c0-21.246093-17.226562-38.46875-38.472656-38.46875s-38.46875 17.226563-38.46875 38.472657c0 21.246093 17.226563 38.46875 38.472656 38.46875 21.234376-.027344 38.445313-17.234376 38.46875-38.472657zm-64.941406 0c0-14.617187 11.851563-26.46875 26.46875-26.46875 14.621094 0 26.472656 11.851563 26.472656 26.46875 0 14.621094-11.851562 26.472657-26.46875 26.472657-14.613281-.015626-26.457031-11.859376-26.472656-26.472657zm0 0"></path><path d="m346.757812 425.769531c0-21.246093-17.222656-38.46875-38.46875-38.46875-21.25 0-38.472656 17.222657-38.472656 38.46875 0 21.246094 17.222656 38.472657 38.472656 38.472657 21.234376-.023438 38.445313-17.234376 38.46875-38.472657zm-64.941406 0c0-14.617187 11.851563-26.46875 26.472656-26.46875 14.617188 0 26.46875 11.851563 26.46875 26.46875 0 14.621094-11.851562 26.472657-26.46875 26.472657-14.613281-.019532-26.453124-11.859376-26.46875-26.472657zm0 0"></path><path d="m406.121094 135.253906h-75.21875v-43.171875h26.21875c2.597656 0 4.898437-1.671875 5.703125-4.140625.804687-2.472656-.074219-5.179687-2.171875-6.707031l-110-80.085937c-2.105469-1.53125-4.957032-1.53125-7.0625 0l-110 80.085937c-2.101563 1.527344-2.976563 4.234375-2.171875 6.707031.800781 2.46875 3.105469 4.140625 5.703125 4.140625h26.21875v43.171875h-69.460938l-4.050781-25.585937c-3.117187-20.214844-20.554687-35.105469-41.007813-35.027344h-42.699218c-3.3125 0-6 2.6875-6 6s2.6875 6 6 6h42.699218c14.542969-.058594 26.941407 10.53125 29.160157 24.90625l33.800781 213.511719c3.117188 20.21875 20.554688 35.113281 41.011719 35.03125h208.925781c3.316406 0 6-2.6875 6-6 0-3.316406-2.683594-6-6-6h-208.925781c-14.542969.058594-26.941407-10.53125-29.160157-24.90625l-5.929687-37.464844h215.152344c17.691406-.007812 33.4375-11.214844 39.234375-27.925781l39.699218-114.578125c.636719-1.835938.34375-3.863282-.78125-5.441406-1.125-1.582032-2.945312-2.519532-4.886718-2.519532zm-250.566406-55.171875 91.566406-66.660156 91.5625 66.660156h-13.78125c-3.316406 0-6 2.6875-6 6v51.847657c-1.34375 2.011718-1.34375 4.632812 0 6.648437v40.984375h-143.5625v-99.480469c0-3.3125-2.6875-6-6-6zm205.203124 173.785157c-4.125 11.882812-15.320312 19.851562-27.902343 19.855468h-217.054688l-20.023437-126.46875h67.5625v44.308594c0 3.3125 2.6875 6 6 6h155.5625c3.3125 0 6-2.6875 6-6v-44.308594h66.789062zm0 0"></path><path d="m234.40625 142.226562c1.121094 1.136719 2.652344 1.777344 4.25 1.78125h.011719c1.59375 0 3.117187-.632812 4.242187-1.757812l38.453125-38.453125c1.550781-1.507813 2.167969-3.734375 1.617188-5.824219-.550781-2.09375-2.183594-3.726562-4.273438-4.277344-2.09375-.550781-4.320312.066407-5.828125 1.617188l-34.1875 34.1875-17.308594-17.480469c-2.328124-2.355469-6.128906-2.375-8.484374-.042969-2.355469 2.332032-2.375 6.132813-.042969 8.488282zm0 0"></path>
  
  `,
  styles: ``
})
export class PurchaseLogoComponent {
  @Input() colorTheme = '';
  @Input() height = '20px';
  @Input() width = '20px';
}