import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sign-in-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 91" 
    [attr.height]="height" [attr.width]="width" 
    [ngClass]="'bg-' + this.colorTheme + '-logo text-' + colorTheme + '-logo fill-' + colorTheme + '-logo'">
    
    <g><path d="m28.721 31.936c-4.68 3.34-7.04 8.279-7.42 15.542-.01.173.004.344.039.514.384 1.92 2.129 5.465 6.045 5.208 2.549-.181 4.046-1.247 4.921-2.349l-.432.987c-.107.258-2.521 6.223 1.667 10.271.091.33.185.927-.075 1.589-.526 1.354-5.442 11.302-8.621 17.656-.052.107-.097.217-.131.332-.245.819-1.384 5.038.402 7.514.763 1.059 1.953 1.663 3.408 1.706h56.741c1.145 0 2.072-.928 2.072-2.071v-86.507c0-1.146-.928-2.072-2.072-2.072h-47.994c-1.145 0-2.072.926-2.072 2.072v12.451c0 1.145.927 2.072 2.072 2.072 1.146 0 2.072-.927 2.072-2.072v-9.146l17.536 5.022v3.075c-.366-.144-.738-.285-1.123-.403-7.605-2.301-15.664 2.013-17.967 9.617-.942 3.118-.781 6.353.304 9.242-3.53-1.116-7.301-1.728-9.372-.25zm4.786 16.16c.044-.378.059-.84.072-1.454.021-.818.074-2.872.367-3.673.915-.237 1.473.135 1.539.184l.139.097zm16.571-43.697h33.116v82.364h-45.02c.378-1.496.985-3.514 1.908-5.563.767-1.708 3.204-6.856 5.844-12.403 1.168.494 1.919 1.14 2.273 1.982.608 1.46-.088 3.147-.137 3.271-.937 2.544-1.515 7.471 2.258 9.785 1.439.881 2.767 1.202 3.919 1.202 1.866 0 3.273-.848 3.933-1.544.196-.209.348-.453.444-.723.118-.321 2.862-7.956 3.846-13.215 1.088-5.798-7.618-11.157-10.757-12.881 1.474-3.083 2.557-5.335 2.572-5.371.012.04.294 1.128.41 1.507.889 2.892 3.824 8.283 8.545 8.013 5.41-.304 8.416-3.375 9.737-9.946.262-.891 1.409-5.301-.442-8.134-.844-1.292-2.161-2.076-3.808-2.264-2.229-.25-4.186.436-5.572 1.908-.811-1.4-2.052-2.523-3.488-3.367 2.676-1.821 4.738-4.503 5.713-7.727 1.694-5.594-.204-11.429-4.352-15.042v-7.158c0-.922-.61-1.736-1.501-1.991zm1.968 64.839c-.752-1.845-2.229-3.235-4.348-4.167.763-1.599 1.514-3.169 2.22-4.65 4.06 2.28 8.888 6.154 8.472 8.372-.771 4.124-2.798 10.089-3.457 11.976-.403.179-1.195.299-2.445-.465-1.754-1.076-.574-4.704-.583-4.704.147-.334 1.386-3.312.141-6.362zm-9.27-30.717c.41.317.835.623 1.29.9.971.591 2.249.287 2.846-.69.597-.975.287-2.252-.688-2.847-3.986-2.436-5.825-7.264-4.47-11.739 1.642-5.418 7.389-8.49 12.8-6.854 1.025.31 1.966.77 2.806 1.342.226.279.5.51.84.644 1.665 1.409 2.828 3.318 3.344 5.42-.559.417-.925 1.077-.925 1.823 0 .833.456 1.558 1.128 1.957-.073.54-.177 1.078-.338 1.616-.019.059-.049.114-.067.17-1.835 1.212-3.427.194-3.741-.04-.904-.692-2.188-.528-2.894.364-.704.9-.549 2.202.351 2.91.678.53 1.844 1.125 3.252 1.367-1.51 1.313-3.391 2.191-5.454 2.449 0 0-1.061.56-1.03 2.008.042 1.971 1.282 2.119 1.282 2.119.013 0 .022 0 .034-.002.009 0 .017.002.027.002 2.87-.071 6.375 1.511 6.825 4.227.733 4.397 2.414 5.859 2.912 6.201.825.567 1.936.465 2.644-.243.707-.711.805-1.821.235-2.645-.585-.84-.573-2.281.025-3.281.511-.858 1.327-1.232 2.44-1.104.582.067.731.292.811.412.635.969.325 3.412-.084 4.756-.02.069-.038.14-.053.21-1.174 5.957-3.472 6.574-5.926 6.714-1.98.149-3.804-3.321-4.35-5.097-.102-.33-.211-.751-.326-1.204-.621-2.401-1.073-3.915-2.167-4.699-.563-.403-1.278-.539-1.966-.369-.484.12-1.773.439-3.688 4.273-.5 1.048-12.277 25.636-14.197 29.909-1.263 2.811-2.007 5.559-2.392 7.269l-5.435.014c-.303-.368-.283-2.139.162-3.745 1.137-2.278 7.948-15.925 8.688-17.834 1.073-2.74-.073-5.022-.206-5.274-.122-.23-.288-.432-.486-.603-2.436-2.077-.993-5.749-.949-5.863l4.405-10.095c.393-.895.105-1.942-.689-2.511l-1.511-1.079c-1.59-1.137-3.741-1.347-5.763-.57-2.529.981-2.622 4.649-2.689 7.329-.012.468-.014.854-.038 1.031-.198.9-.974 1.404-2.305 1.498-.966.063-1.487-1.174-1.639-1.677.464-7.441 3.266-10.365 5.667-12.078 1.133-.693 6.65.83 11.652 3.209z"/><path d="m56.123 28.808c1.26 0 2.287-1.025 2.287-2.286 0-1.26-1.027-2.286-2.287-2.286-1.264 0-2.294 1.026-2.294 2.286s1.03 2.286 2.294 2.286z"/><path d="m3.187 19.015c0 1.144.926 2.072 2.071 2.072h14.988c1.144 0 2.073-.928 2.073-2.072 0-1.145-.929-2.072-2.073-2.072h-14.988c-1.145 0-2.071.927-2.071 2.072z"/><path d="m21.711 9.287c-.809-.809-2.12-.809-2.929 0-.809.81-.809 2.121 0 2.93l6.798 6.798-6.798 6.798c-.809.809-.809 2.121 0 2.93.405.405.933.607 1.464.607.53 0 1.061-.202 1.465-.607l8.263-8.263c.81-.81.81-2.12 0-2.929z"/></g>
    
    </svg>
  `,
  styles: ``
})
export class SignInLogoComponent {
  @Input() colorTheme = '';
  @Input() height = '20px';
  @Input() width = '20px';
}
