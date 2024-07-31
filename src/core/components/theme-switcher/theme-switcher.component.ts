import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  standalone: true
})
export class ThemeSwitcherComponent implements OnInit {
  defaultTheme = 'emerald';

  ngOnInit(): void {
    this.loadTheme();
  }

  switchTheme(): void {
    this.defaultTheme = this.defaultTheme === 'emerald' ? 'dracula' : 'emerald';
    this.applyTheme();
  }

  applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.defaultTheme);
    localStorage.setItem('theme', this.defaultTheme);
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.defaultTheme = savedTheme;
      this.applyTheme();
    }
  }
}
