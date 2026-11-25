# Jaroslav Keznikl — Personal Website

Personal portfolio website for Jaroslav Keznikl ([keznikl.com](https://keznikl.com)), built with Angular 21 and Tailwind CSS, deployed to Google App Engine via Cloud Build.

## Prerequisites

- Node.js 22+
- npm

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server (runs at `http://localhost:3000`):

```bash
npm run dev
```

Build the production bundle into `dist/`:

```bash
npm run build
```

## Deployment

The site is deployed to Google App Engine (`python312` static file serving configured in `app.yaml`) via Google Cloud Build (`cloudbuild.yaml`), which installs dependencies, runs `npm run build`, and deploys `dist/` with `gcloud app deploy`.
