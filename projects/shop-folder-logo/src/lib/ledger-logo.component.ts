import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ledger-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" 
  [attr.height]="height" [attr.width]="width" 
  [ngClass]="'bg-' + this.colorTheme + '-logo text-' + colorTheme + '-logo fill-' + colorTheme + '-logo'">
  
  ><g id="_x36_0"><path d="m47.4342194 20.810854h-16.041895c-1.6931896 0-3.0657806 1.372591-3.0657806 3.0657806v22.5484447c0 1.6931915 1.372591 3.0657806 3.0657806 3.0657806h16.0418949c1.6931915 0 3.0657806-1.3725891 3.0657806-3.0657806v-22.5484447c.0000001-1.6931896-1.372589-3.0657806-3.0657805-3.0657806zm-15.0199662 4.0875206h13.9981003v8.4024525h-13.9981003zm1.7659798 21.5265789h-1.7659187c-.5643559 0-1.0219269-.4575691-1.0219269-1.0219269 0-.5643539.457571-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575729 1.0219269 1.0219269 0 .5643577-.457573 1.0219269-1.0219269 1.0219269zm0-4.0343132h-1.7659187c-.5643559 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.457571-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269 0 .5643539-.457573 1.0219269-1.0219269 1.0219269zm0-4.0338173h-1.7659187c-.5643559 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.457571-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269 0 .5643539-.457573 1.0219269-1.0219269 1.0219269zm6.1160927 8.0681305h-1.7659187c-.5643539 0-1.0219269-.4575691-1.0219269-1.0219269 0-.5643539.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575729 1.0219269 1.0219269 0 .5643577-.457573 1.0219269-1.0219269 1.0219269zm0-4.0343132h-1.7659187c-.5643539 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269 0 .5643539-.457573 1.0219269-1.0219269 1.0219269zm0-4.0338173h-1.7659187c-.5643539 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269 0 .5643539-.457573 1.0219269-1.0219269 1.0219269zm6.1160927 8.0681305h-1.7659187c-.5643539 0-1.0219269-.4575691-1.0219269-1.0219269 0-.5643539.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575729 1.0219269 1.0219269-.0000001.5643577-.457573 1.0219269-1.0219269 1.0219269zm0-4.0343132h-1.7659187c-.5643539 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269-.0000001.5643539-.457573 1.0219269-1.0219269 1.0219269zm0-4.0338173h-1.7659187c-.5643539 0-1.0219269-.4575729-1.0219269-1.0219269 0-.5643578.4575729-1.0219269 1.0219269-1.0219269h1.7659187c.5643539 0 1.0219269.4575691 1.0219269 1.0219269-.0000001.5643539-.457573 1.0219269-1.0219269 1.0219269z"></path><path d="m15.2062235 17.4123116v-.0004997c0-.7704372-.6272278-1.397665-1.3981638-1.397665h-3.6336288v2.7958279h3.6336288c.770936-.0000001 1.3981638-.6272279 1.3981638-1.3976632z"></path><path d="m15.2062235 12.5721292c0-.7704363-.6272278-1.3976641-1.3981638-1.3976641h-3.6336288v2.7958279h3.6336288c.770936 0 1.3981638-.6272268 1.3981638-1.3981638z"></path><path d="m31.3898926 18.7683716h6.8264656v-12.3142057c0-1.7623.9186974-2.8174095.9606133-2.9431543h-33.7951303c-1.5839741 0-2.8818412 1.2978668-2.8818412 2.8818412v39.1909332c0 1.5942039 1.2978671 2.8817787 2.8818412 2.8817787h21.317379c-.2657108-.6233597-.4189625-1.318264-.4189625-2.0438538v-22.5437049c.0000005-2.8204651 2.299336-5.1096344 5.1096349-5.1096344zm-12.6616898-11.4762182h14.6748543c.5620499 0 1.0219269.4598794 1.0219269 1.0219269s-.459877 1.0219269-1.0219269 1.0219269h-14.6748543c-.5722752 0-1.0219269-.4598799-1.0219269-1.0219269s.4496518-1.0219269 1.0219269-1.0219269zm-11.4251342 3.8833093c-.562047 0-1.0219269-.4598169-1.0219269-1.0219269 0-.562047.4598799-1.0219269 1.0219269-1.0219269h1.0730109v-.8175287c0-.5620475.4598799-1.0219269 1.0219269-1.0219269s1.0219269.4598794 1.0219269 1.0219269v.8175288h2.2277927v-.8175288c0-.5620475.4598799-1.0219269 1.0219269-1.0219269.562048 0 1.0219269.4598794 1.0219269 1.0219269v.9503841c1.4715767.3883381 2.5548172 1.7168303 2.5548172 3.3110332 0 .940218-.3781071 1.7986012-.9912395 2.4117947.6131325.6233606.9912395 1.4817438.9912395 2.4219618 0 1.5942039-1.0832405 2.9226971-2.5548172 3.3110332v.9503841c0 .562048-.4598789 1.0219269-1.0219269 1.0219269-.562047 0-1.0219269-.4598789-1.0219269-1.0219269v-.8175278h-2.2277927v.8175278c0 .562048-.4598799 1.0219269-1.0219269 1.0219269s-1.0219269-.4598789-1.0219269-1.0219269v-.8175278h-1.0730109c-.562047 0-1.0219269-.4598808-1.0219269-1.0219269 0-.562048.4598799-1.0219269 1.0219269-1.0219269h.8277584v-7.6338272h-.8277584zm14.8894821 33.5090237h-14.8894821c-.562047 0-1.0219269-.4496498-1.0219269-1.0219269 0-.5621109.4598799-1.0219269 1.0219269-1.0219269h14.8894825c.562048 0 1.0219269.459816 1.0219269 1.0219269-.0000005.5722771-.4598794 1.0219269-1.0219273 1.0219269zm0-5.0585518h-14.8894821c-.562047 0-1.0219269-.4496498-1.0219269-1.0219269 0-.5620461.4598799-1.0219269 1.0219269-1.0219269h14.8894825c.562048 0 1.0219269.4598808 1.0219269 1.0219269-.0000005.5722771-.4598794 1.0219269-1.0219273 1.0219269zm0-5.0483208h-14.8894821c-.562047 0-1.0219269-.4496498-1.0219269-1.0219269 0-.5620461.4598799-1.0219269 1.0219269-1.0219269h14.8894825c.562048 0 1.0219269.4598808 1.0219269 1.0219269-.0000005.5722771-.4598794 1.0219269-1.0219273 1.0219269zm0-5.0483207h-14.8894821c-.562047 0-1.0219269-.4496517-1.0219269-1.0219269 0-.562048.4598799-1.0219269 1.0219269-1.0219269h14.8894825c.562048 0 1.0219269.4598789 1.0219269 1.0219269-.0000005.5722751-.4598794 1.0219269-1.0219273 1.0219269zm0-5.0483227h-4.9461537c-.562048 0-1.0219269-.4496498-1.0219269-1.0219269 0-.5620461.4598789-1.0219269 1.0219269-1.0219269h4.9461536c.562048 0 1.0219269.4598808 1.0219269 1.0219269 0 .5722771-.4598789 1.0219269-1.0219268 1.0219269zm2.1153965-5.0483208h-4.0775414c-.5620461 0-1.0219269-.4496498-1.0219269-1.0219269 0-.562048.4598808-1.0219269 1.0219269-1.0219269h4.0775414c.562048 0 1.0219269.4598789 1.0219269 1.0219269-.0000001.5722771-.459879 1.0219269-1.0219269 1.0219269zm-4.0775414-5.0483208c-.5620461 0-1.0219269-.4496508-1.0219269-1.0219269 0-.562048.4598808-1.0219269 1.0219269-1.0219269h13.1726513c.5620499 0 1.0219269.4598789 1.0219269 1.0219269 0 .5722761-.459877 1.0219269-1.0219269 1.0219269z"></path><path d="m46.1604271 6.4575338c0-.7849073-.3058777-1.5229101-.8612518-2.0782838-.5571823-.5571821-1.2915688-.8644962-2.0685539-.8701098-.0094185.0002496-.0172157.0053642-.0266953.0053642-1.6227074 0-2.9430313 1.3203216-2.9430313 2.9430294v3.9205465h5.8995323z"></path></g>
  
  </svg>
  `,
  styles: ``
})
export class LedgerLogoComponent {
  @Input() colorTheme = '';
  @Input() height = '20px';
  @Input() width = '20px';

}