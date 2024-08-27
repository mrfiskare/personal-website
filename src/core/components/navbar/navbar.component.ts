import { Component, ViewChild } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMoonSolid, heroSunSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [provideIcons({ heroMoonSolid, heroSunSolid })]
})
export class NavbarComponent {
  @ViewChild(ThemeSwitcherComponent)
  themeSwitcherComponent!: ThemeSwitcherComponent;

  protected switchTheme() {
    if (this.themeSwitcherComponent) {
      this.themeSwitcherComponent.switchTheme();
    }
  }
}
