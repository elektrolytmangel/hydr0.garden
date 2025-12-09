# 🌱 hydr0.garden

A small website to maintain information about plants growth.

## Overview

hydr0.garden is a full-stack web application for tracking and managing plant information with an interactive map interface. Built with a modern tech stack, it provides a CMS for plant data management and a responsive web frontend for viewing plants on an interactive map.

## Features

- 🗺️ Interactive map visualization of plant locations using MapLibre GL
- 📝 Content management system powered by Strapi
- 🌍 Multi-language support (i18next)
- 📱 Responsive design with TailwindCSS
- 🔍 Search functionality for plants
- 📊 Plant status tracking and information display

## Tech Stack

### Frontend (`/web`)

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **MapLibre GL** - Interactive maps
- **React Router** - Navigation
- **i18next** - Internationalization

### Backend (`/cms`)

- **Strapi 5** - Headless CMS

## Project Structure

```
hydr0.garden/
├── web/              # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── routes/       # Page components
│   │   ├── services/     # API and data services
│   │   ├── i18n/         # Translation files
│   │   └── config/       # Configuration files
│   └── public/
├── cms/              # Strapi CMS backend
│   ├── src/
│   │   ├── api/          # API endpoints
│   │   ├── components/   # Shared components
│   │   └── extensions/   # Strapi extensions
│   ├── config/           # Strapi configuration
│   └── database/         # Database and migrations
└── LICENSE
```

## Getting Started

See readMe in the sub-folders '/web' and '/cms'

## Configuration

### Environment Variables

Create appropriate `.env` files in each directory as needed:

**CMS (`/cms/.env`)**

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

**Web (`/web/.env`)**

```env
VITE_API_URL=http://localhost:1337
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** This is a personal project for maintaining plant growth information. For questions or issues, please open an issue on GitHub.
