# Angular + Express Authentication Project

This project is a full-stack application consisting of an Angular frontend and an Express backend that manages authentication using the Kinde service. The Angular application proxies authentication-related requests to the backend to ensure proper access control.

## Features
- Angular frontend for user interaction
- Express backend for authentication handling
- Proxy configuration for secure API communication between frontend and backend
- Authentication guard to restrict access to authenticated users only

## Project Structure
```
project-root/
  ├── expressjs-starter-kit/
  │   ├── app.js          # Main Express server
  ├── kinde-angular-project/
  │   ├── src/
  │   │   ├── app/
  │   │   │   ├── services/
  │   │   │   │   └── auth.service.ts  # Angular Auth Service
  │   │   │   ├── guards/
  │   │   │   │   └── auth.guard.ts    # Angular Auth Guard
  │   │   │   └── components/
  │   │   │       ├── dashboard/
  │   │   │       │   └── dashboard.component.ts  # Dashboard Component
  │   │   │       └── login/
  │   │   │           └── login.component.ts      # Login Component
  └── README.md
```

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org) (version 14 or higher)
- [Angular CLI](https://angular.io/cli)

### Backend Setup
1. Navigate to the `expressjs-starter-kit` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The server should start on `http://localhost:3000`.

### Frontend Setup
1. Navigate to the `kinde-angular-project` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular development server:
   ```sh
   ng serve
   ```
   The application should be available on `http://localhost:4200`.

### Proxy Configuration
The Angular application is configured to proxy authentication requests to the Express backend.
- Proxy settings are defined in `proxy.conf.json` in the `frontend` folder.
- When running `ng serve`, Angular uses the proxy configuration to forward requests to `/api/authenticated` to the backend server.

### Authentication Workflow
1. Users access the `/login` route from the Angular frontend.
2. The Angular app uses a proxy to forward `/login` and `/callback` requests to the backend Express server.
3. The backend server handles authentication and then redirects users to the dashboard upon successful login.
4. The Angular app uses the `AuthGuard` to secure the `/dashboard` route to only allow authenticated users.

## Key Files and Components
- **`auth.service.ts`**: Angular service for handling authentication. It checks with the backend to verify if the user is authenticated.
- **`auth.guard.ts`**: Angular route guard to restrict access to authenticated users only.
- **`protectRoute.js`**: Express middleware to protect routes on the backend.
- **`server.js`**: The main server file for the Express backend.

## API Endpoints
- **`GET /isAuthenticated`**: Checks if the user is authenticated and returns a JSON response.
- **`GET /login`**: Initiates the authentication flow via Kinde.
- **`GET /callback`**: Handles the callback from Kinde after authentication.

## Running the Project
1. Make sure both the backend and frontend servers are running.
2. Navigate to `http://localhost:4200` to access the Angular frontend.
3. Try accessing the dashboard (`/dashboard`). If not authenticated only the bannor will appear. If authenticated the dashboard message will appear

## Troubleshooting
- **`NullInjectorError: No provider for HttpClient`**: Ensure `HttpClientModule` is imported in your `app.module.ts` file.
- **URL not updating**: Ensure that Angular's router is properly set up and that `RouterModule` is imported correctly in `app.module.ts`.

## Contributions
Contributions are welcome. Please submit a pull request or open an issue to contribute.

## Contact
For questions or support, please contact [Your Name] at [your-email@example.com].

