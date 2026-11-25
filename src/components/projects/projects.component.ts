import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ExperienceCard {
  category: string;
  title: string;
  descriptionHtml: string;
  safeDescription?: SafeHtml;
  link?: {
    text: string;
    url: string;
  };
  date: string;
}


@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private sanitizer = inject(DomSanitizer);

  projects = signal<ExperienceCard[]>([
    {
      category: 'WORK',
      title: 'Reliable Google Cloud',
      descriptionHtml: 'I am a Staff Software Engineer making sure Google Cloud has smooth incident response and customer communication processes.',
      link: { text: 'cloud.google.com', url: 'https://cloud.google.com' },
      date: '2022 - PRESENT'
    },
    {
      category: 'WORK',
      title: 'H2O.ai In The Cloud',
      descriptionHtml: 'I was a Lead Engineer for H2O.ai products in the Cloud, making the power of H2O.ai machine learning available to everyone.',
      link: { text: 'h2o.ai', url: 'https://h2o.ai' },
      date: '2020 - 2022'
    },
    {
      category: 'WORK',
      title: 'Reliable Google Cloud AI Products',
      descriptionHtml: 'I worked on making sure that Google Cloud AI services are reliable, secure, and high performance, while maintaining high feature velocity.',
      link: { text: 'cloud.google.com/products/ai/', url: 'https://cloud.google.com/products/ai/' },
      date: '2017 - 2020'
    },
    {
      category: 'PROFESSIONAL INTERESTS',
      title: 'Site Reliability Engineering & DevOps',
      descriptionHtml: 'I have developed a conviction for SRE/DevOps and I firmly believe reliability is the most important feature; or as one of my colleagues puts it: "Would you rather have Gmail 2.0 or Gmail 503?".',
      date: '2014 - PRESENT'
    },
    {
      category: 'WORK',
      title: 'Reliable Google Cloud SQL',
      descriptionHtml: 'I worked on making sure that Google Cloud SQL is a reliable and fast managed MySQL offering.',
      link: { text: 'cloud.google.com/sql', url: 'https://cloud.google.com/sql' },
      date: '2014 - 2017'
    },
    {
      category: 'RESEARCH',
      title: 'Self-Adaptive Software Architectures',
      descriptionHtml: 'I have published <a href="https://scholar.google.com/citations?user=rH_zD8wAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:underline">a few publications</a> on the topic of self-adapting peer-to-peer software component systems. The research was mostly exploratory, but I gained good writing skills :-)',
      date: '2010 - 2014'
    },
    {
      category: 'PROFESSIONAL INTERESTS',
      title: 'I don\'t care about a particular technology',
      descriptionHtml: 'I always try to use the right tool for the job. I\'ve implemented apps in Java, Python, Go, C++, C#, even Prolog; for PC or as services in the cloud; using various automation tools.',
      date: 'PRESENT'
    },
    {
      category: 'ASPIRATIONS',
      title: 'Community',
      descriptionHtml: 'Historically, I have not done a stellar job at being part of the community and I would like to change that. Hit me up at <a href="https://twitter.com/jkeznikl" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:underline">@jkeznikl</a> if you have ideas (especially if you\'re from Vysocina, Czechia).',
      date: 'PRESENT'
    }
  ].map(p => ({
    ...p,
    safeDescription: this.sanitizer.bypassSecurityTrustHtml(p.descriptionHtml)
  })));
}