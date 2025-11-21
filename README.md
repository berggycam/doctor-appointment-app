# Healthcare Appointment Mobile App

A modern, production-grade healthcare appointment application built with React Native (Expo) and TypeScript. This app features a clean, clinical design and a comprehensive set of features for patients to manage their healthcare journey.

## Features

### 🔐 Authentication
- **Secure Login & Sign Up**: Email/password authentication with validation.
- **Auth Context**: Global state management for user sessions.

### 🏠 Home Dashboard
- **Personalized Greeting**: Welcomes the user by name.
- **Next Appointment Card**: Prominent display of upcoming visits.
- **Quick Actions**: One-tap access to key features (Find Doctor, Lab Results, Medicines).
- **Recent Doctors**: Horizontal scroll of recently visited specialists.

### 🔍 Doctor Search & Booking
- **Find Specialists**: Search doctors by name or specialty.
- **Detailed Profiles**: View doctor bio, experience, ratings, and patient reviews.
- **Easy Booking**: Select date and time slots to schedule appointments.

### 📅 Appointments Management
- **Upcoming & Past**: Tabbed view of appointment history.
- **Calendar View**: Monthly calendar integration.
- **Appointment Details**: View location, doctor info, and reschedule/cancel options.

### 🧪 Medical Records
- **Lab Results**: Access and view test results with status indicators.
- **Detailed Analysis**: Breakdown of metrics with normal ranges.
- **PDF Reports**: Option to download/view full reports.

### 💬 Communication
- **Chat System**: Real-time messaging interface with doctors.
- **Video Calls**: Integrated video call UI for telemedicine.

### ⚙️ Profile & Settings
- **User Profile**: Manage personal information.
- **Onboarding Flow**: Intro slides for new users.
- **Animated Splash Screen**: Custom startup animation.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling**: Custom `StyleSheet` with a centralized Theme system
- **Icons**: SF Symbols via `react-native-sfsymbols` (or compatible fallback)
- **Storage**: `@react-native-async-storage/async-storage`
- **Video/Audio**: `expo-av`

## Getting Started

1.  **Install dependencies**

    ```bash
    npm install
    ```

2.  **Start the app**

    ```bash
    npx expo start
    ```

3.  **Run on device/emulator**
    - Press `a` for Android emulator.
    - Press `i` for iOS simulator.
    - Scan the QR code with Expo Go on your physical device.

## Project Structure

```
/app                # Expo Router screens and layouts
  /(tabs)           # Main tab navigator (Home, Appointments, Chat, Profile)
  /auth             # Authentication stack (Login, Signup)
  /doctors          # Doctor search and booking stack
  /lab-results      # Medical records stack
  /onboarding       # Onboarding flow
/components         # Reusable UI components
  /ui               # Core primitives (Button, Input, Typography)
/constants          # Theme definitions (Colors, Spacing)
/context            # React Context (Auth)
/services           # API services (Mock)
```

## Design Guidelines

The app follows a strict clinical design system:
- **Colors**: Solid white backgrounds, charcoal text, soft blue accents (`#2A72E5`).
- **Typography**: Clean, legible fonts with clear hierarchy.
- **Layout**: Spacious, organized, and professional.
