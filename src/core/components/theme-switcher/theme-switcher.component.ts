import { Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMoonSolid, heroSunSolid } from '@ng-icons/heroicons/solid';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  standalone: true,
  imports: [NgIcon, NgIf],
  providers: [provideIcons({ heroMoonSolid, heroSunSolid })]
})
export class ThemeSwitcherComponent implements OnInit {
  defaultTheme = 'emerald';

  public ngOnInit(): void {
    this.loadTheme();
  }

  public switchTheme(): void {
    this.defaultTheme = this.defaultTheme === 'emerald' ? 'dracula' : 'emerald';
    this.applyTheme();
  }

  protected applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.defaultTheme);
    localStorage.setItem('theme', this.defaultTheme);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.defaultTheme = savedTheme;
      this.applyTheme();
    }
  }
}
