import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSidenavModule, MatRippleModule, MatListModule]
})
export class PageLayoutComponent {
  @Input() title = '';
  @Input() backURL = '';
  @Input() hideSearch = false;

  constructor(private router: Router) { }

  goBack() {
    if (this.backURL) {
      this.router.navigateByUrl(this.backURL);
    }
  }
}
