# Mobile Game — Architecture Overview

## Project Structure

```
mobile-game/
├── client/          → React Native (Expo) frontend
│   ├── src/
│   │   ├── components/    → Reusable UI elements (Button, ScoreCard, GameBoard, Header)
│   │   ├── screens/       → Full-page views (Home, Game, Login, Register, Leaderboard, Profile)
│   │   ├── context/       → Global state management (AuthContext, GameContext)
│   │   ├── services/      → API communication layer (api, authService, gameService, externalApi)
│   │   ├── navigation/    → React Navigation setup (AppNavigator)
│   │   ├── hooks/         → Custom React hooks (useAuth)
│   │   ├── utils/         → Helper functions
│   │   └── constants/     → Config values, color palette, game settings
│   ├── assets/            → Images, fonts, sounds
│   ├── App.js             → Entry point
│   ├── app.json           → Expo config
│   └── package.json
│
├── server/          → Node.js + Express backend
│   ├── config/            → Database connection (db.js)
│   ├── controllers/       → Request handlers (auth, game, leaderboard)
│   ├── middleware/        → Auth guard (JWT), error handler
│   ├── models/            → Mongoose schemas (User, Score)
│   ├── routes/            → Express route definitions
│   ├── services/          → Business logic + third-party API integration
│   ├── utils/             → Shared helper functions
│   ├── server.js          → Entry point
│   └── package.json
│
└── ARCHITECTURE.md  → This file
```

---

## Low Coupling

**Low coupling** means modules have minimal dependencies on each other. This architecture achieves it through:

| Technique                  | Where Applied                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Layered backend**        | Routes → Controllers → Services → Models. Each layer only talks to the one directly below it. Changing a model doesn't require changing routes. |
| **REST API boundary**      | Client and server communicate **only** via HTTP/JSON. Neither knows the other's internal structure.                                             |
| **Context API**            | Screens don't manage auth/game state directly — they consume it from context providers, decoupling state logic from UI.                         |
| **Centralized API client** | `services/api.js` is the single HTTP configuration point. Swapping the backend URL or adding headers happens in one place.                      |
| **Service layer**          | Business logic lives in `services/`, not in controllers. Controllers only handle request/response — they delegate to services.                  |

---

## High Cohesion

**High cohesion** means each module has a single, focused responsibility. This architecture achieves it through:

| Module                   | Responsibility                                                |
| ------------------------ | ------------------------------------------------------------- |
| `authController.js`      | Only handles auth-related HTTP requests                       |
| `authService.js`         | Only contains auth business logic (hashing, token generation) |
| `User.js` model          | Only defines user data shape and validation                   |
| `AuthContext.js`         | Only manages authentication state                             |
| `GameBoard.js` component | Only renders the interactive game area                        |
| `useAuth.js` hook        | Only provides auth context access                             |

Each file does **one thing well**.

---

## GUI & Event Handling

- **React Native components** (`Button`, `GameBoard`) handle user interactions via `onPress`, `onTouch` event props
- **Screens** compose components and respond to navigation events
- **Context providers** react to state changes and re-render dependent components

---

## Interoperability

| Type                  | Implementation                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **Client ↔ Server**   | REST API over HTTP (JSON payloads). Client uses Axios; server uses Express.                       |
| **Server ↔ Database** | Mongoose ODM connects Express to MongoDB                                                          |
| **External APIs**     | `externalApiService.js` (server) and `externalApi.js` (client) integrate third-party data sources |

---

## Third-Party API Integration

Dedicated service files on **both** client and server handle external API calls:

- **Server**: `services/externalApiService.js` — fetches data from external APIs, processes it, and serves it to the client
- **Client**: `services/externalApi.js` — can also call external APIs directly when appropriate (e.g., public read-only APIs)

---

## npm Install Commands

### Server

```bash
cd server
npm install express mongoose dotenv cors bcryptjs jsonwebtoken axios
npm install --save-dev nodemon
```

### Client

```bash
cd client
npx -y create-expo-app@latest ./
npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install axios @react-native-async-storage/async-storage
```
