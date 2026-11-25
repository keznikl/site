import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

interface NavLink {
  name: string;
  url: string;
  isExternal: boolean;
}

interface SocialLink {
  name: string;
  url: string;
  svg: string;
  safeSvg?: SafeHtml;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProjectsComponent,
    FooterComponent
  ],
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class AppComponent {
  private sanitizer = inject(DomSanitizer);

  navLinks = signal<NavLink[]>([
    { name: 'About Me', url: '#about', isExternal: false },
    { name: 'Twitter', url: 'https://twitter.com/jkeznikl', isExternal: true },
    { name: 'GitHub', url: 'https://github.com/keznikl', isExternal: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/keznikl/', isExternal: true },
  ]);

  socials = signal<SocialLink[]>([
    {
      name: 'Twitter',
      url: 'https://twitter.com/jkeznikl',
      svg: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/keznikl',
      svg: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/keznikl/',
      svg: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    },
  ].map(social => ({
    ...social,
    safeSvg: this.sanitizer.bypassSecurityTrustHtml(social.svg)
  })));

  imageOpacity = signal(1);

  onWindowScroll(): void {
    const scrollY = window.scrollY;
    const fadeOutDistance = 400; // The image will be fully transparent after scrolling 400px
    const opacity = Math.max(0, 1 - scrollY / fadeOutDistance);
    this.imageOpacity.set(opacity);
  }
}