# Project Snowfall ❄️
**Student Name:** [Melanie Caines]
**Live Link:** [https://snowfall-debt-free-tracker.vercel.app/]

## 📖 Project Description
Project Snowfall is an interactive debt-management application designed to reduce the financial anxiety that often comes with debt. Debt can feel like a massive wall of ice, preventing you from reaching your goals. This application helps users "chip away" at that ice until they reach financial liberation. Every time you log a payment, you are effectively melting the wall, releasing a "snowfall" of progress that eventually clears your path to freedom.

By utilizing two proven mathematical and psychological strategies—the **Snowball** and **Avalanche** methods—Project Snowfall provides clarity, structure, and visual motivation to help users melt away their liabilities.

## ✨ Main Features
- **Dynamic Payoff Strategies:** Instantly re-sort debts based on Balance (Snowball) or Interest Rate (Avalanche).
- **"Melting" Progress Visuals:** Clean UI cards featuring real-time progress bars and styling.
- **Payment History & Undo:** Log payments with a specialized "Undo" feature to correct accidental entries.
- **Celebratory UI:** Integrated snow flurries on entry and payment-complete confetti effects to celebrate milestones.
- **Responsive Design:** A mobile-first approach fully optimized for desktop and mobile viewports.

## 🧠 React Concepts Used
- **Components:** Created at least 6 reusable components (Navbar, DebtCard, StrategyToggle, Footer, Input, and Button) to ensure modularity.
- **State & Props:** Managed complex state for debt lists and payoff strategies using `useState` and `useMemo`.
- **Context API:** Implemented a global `DebtProvider` to share data across the Dashboard and Add Debt pages without prop drilling.
- **React Router:** Established a multi-page structure with routes for Home, Dashboard, and Resources.
- **Conditional Rendering:** Used logic to display "Paid Off" badges, success alerts, and the "Undo" functionality.
- **Side Effects:** Leveraged `useEffect` to sync user data with LocalStorage and trigger canvas animations.

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS (Custom palette, Glassmorphism, and Gradients)
- **Animations:** Canvas-Confetti
- **Storage:** Browser LocalStorage for persistent user data

## 🚀 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## 🚧 Challenges Faced
- **State Synchronization:** One major challenge was ensuring that toggling the payoff strategy (Snowball vs. Avalanche) instantly updated the visual order of the cards. I solved this by wrapping the sorting logic in a `useMemo` hook that watches for changes in the strategy state.
- **State Persistence & Recovery:** "A major hurdle was ensuring that user data didn't disappear upon a page refresh. I had to implement logic to sync the React state with localStorage while ensuring the data was properly parsed back into numbers for the payoff calculations."

## 🎓 What I Learned
Through this project, I strengthened my ability to build a full CRUD (Create, Read, Update, Delete) application in React. I learned how to manage data persistence locally and how to use metaphor-driven design to make a functional tool feel more accessible and encouraging to the user.

## 🔮 Future Improvements
- **Firebase Backend:** Moving from LocalStorage to a cloud-based database to allow users to access their plans from any device.
- **Amortization Visualization:** Adding detailed charts to show users exactly how much interest they are saving over time.
- **Push Notifications:** Integrating reminders to encourage users to log their monthly payments.
