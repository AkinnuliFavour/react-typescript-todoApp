/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/App.tsx",
    "./src/Container.tsx",
    "./src/NewTask.tsx",
    "./src/EditTask.tsx",
    "./src/AllTasks.tsx",
    "./src/CompletedTasks.tsx",
    "./src/PendingTasks.tsx",
    "./src/components/Header.tsx",
    "./src/components/Nav.tsx",
    "./src/components/Task.tsx",
    "./src/components/EditAndDeleteButton.tsx",
    "./src/components/Footer.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
