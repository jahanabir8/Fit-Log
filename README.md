# FitLog

A dark-themed, no-nonsense gym companion built with Next.js. Browse a workout library, build today's plan, save exercises for later, and track your session totals — all in a fast, minimal interface designed for the gym, not the couch.

## Description

FitLog helps you plan and log workouts without the clutter of a full fitness-tracking app. Pick exercises from a searchable library, add them to today's plan or save them for later, and see your total exercises, minutes, and calories update instantly. Built as a learning project to practice the Next.js App Router, TypeScript, and global state management with React Context.

## Technologies Used

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS** with **daisyUI** components
- **React Context API** for global plan/wishlist state
- **react-toastify** for user feedback notifications
- Data served from a REST API (Cloudflare Worker)

## Key Features

1. **Workout Library** — Browse a full catalog of exercises, each with muscle group tags, equipment, duration, calories burned, and rating.

2. **Today's Plan** — Add any exercise to your current session's plan with one click; duplicate entries are automatically detected and blocked.

3. **Save for Later (Wishlist)** — Bookmark exercises you want to try another day, kept separate from today's active plan.

4. **My Plan Dashboard** — A dedicated page with live stats (total exercises, minutes, calories) that update based on which tab — Today's Plan or Saved — is active, plus the ability to remove entries.

5. **Dynamic Sorting** — Sort your plan by Duration, Calories, or Rating on the fly, without a page reload.

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or yarn/pnpm)

### Installation

```bash
git clone <your-repo-url>
cd fit-log
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
fit-log/
├── app/
│   ├── Component/
│   │   ├── Homepage/       # Navbar, banner, homepage sections
│   │   ├── MyPlan/         # Plan management (tabs, sorting, list)
│   │   ├── Shared/         # Reusable UI (buttons, cards)
│   │   └── Types/          # Shared TypeScript types
│   ├── myplan/              # My Plan page route
│   ├── workout/             # Workout library + detail routes
│   └── layout.tsx           # Root layout
├── CreateContext/
│   └── LibrariesProvider.tsx  # Global state (plans, saved list)
└── public/                  # Static assets
```

## License

This project is for educational purposes.
