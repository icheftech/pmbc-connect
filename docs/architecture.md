# PMBC Connect Architecture

## System Overview

PMBC Connect is built on a modern monorepo architecture with separate frontend and backend services.

## Technology Stack

### Frontend
- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + Hooks

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions

## Architecture Patterns

- **Frontend**: Component-based architecture
- **Backend**: MVC (Model-View-Controller)
- **API**: RESTful API design

## Security

- JWT-based authentication
- Role-based access control (RBAC)
- HTTPS encryption
