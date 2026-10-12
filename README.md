# TenantCompass

**A property-management dashboard prototype — 2nd place at a hackathon**

TenantCompass was built by our team for a hackathon, where we placed **second**. We used [Lovable](https://lovable.dev/) for rapid, AI-assisted prototyping and built an interactive interface for exploring how property managers could handle tenant communications, properties, events, and reporting in one place.

This repository contains the hackathon **frontend prototype**, now maintained as a standalone React application. It is a demonstration of the proposed user experience, **not a production property-management platform**.

## What you can explore

- **Dashboard:** summary cards, recent tenant messages, property overview, and upcoming events.
- **Properties:** cards showing sample property information, unit occupancy, maintenance status, and text search.
- **Messages:** sample tenant messages with searchable text, status filters, priority labels, and message details.
- **Calendar:** browse dates and see predefined maintenance, inspection, and meeting events.
- **Reports:** charts displaying sample message activity, message categories, and response times.

### Prototype scope

**All properties, messages, events, and reported statistics are sample data defined in the frontend source code.** The interface does not connect to a backend or database. Features such as creating properties, sending tenant replies, exporting reports, and administering accounts are not implemented; some buttons and sections are visual placeholders. Labels such as “Auto-replied” illustrate the intended workflow, **not a working AI auto-reply integration**.

## Built with

- React 18 and TypeScript
- Vite 5
- Tailwind CSS and shadcn/ui / Radix UI components
- React Router
- Recharts for reporting visualizations
- Lucide icons

Lovable was used to accelerate the original hackathon prototype. The source code can be developed and built locally without a Lovable account or hosted editor.

## Run locally

You need a recent Node.js version and npm.

```bash
git clone https://github.com/kessleraqu/tenant-compass-hub.git
cd tenant-compass-hub
npm ci
npm run dev
```

Open the local URL printed by Vite (configured to use **http://localhost:8080/**).

To produce a static build:

```bash
npm run build
npm run preview
```

The build output is created in `dist/`. This is a client-side React application; a static host can serve the built assets. When deploying, configure single-page-app route fallbacks so URLs such as `/properties` and `/messages` work when opened directly.

Other available command:

```bash
npm run lint
```

## Project structure

```text
src/pages/                 Dashboard, Properties, Messages, Calendar, Reports
src/components/dashboard/  Dashboard widgets
src/components/layout/     Navigation and application shell
src/components/ui/         Shared interface components
src/App.tsx                Routes and application setup
index.html                 HTML entry point and metadata
vite.config.ts             Development/build configuration
```

## Hackathon background

TenantCompass began as a team hackathon prototype. **Our team placed second.** We used Lovable as an AI-assisted design and development tool to quickly explore and present the property-management concept. This README documents the implementation as it exists in the repository, without claiming features that were not built during the event.

## Limitations and next steps

This project is preserved as a hackathon prototype. A production implementation would need a secure backend, authentication and authorization, data persistence, real communications integrations, proper handling of tenant information, and working management/reporting actions.

No application license is included in this repository at present. Making the repository public allows people to inspect and clone its contents, but does not by itself grant broad rights to reuse or redistribute the code.
