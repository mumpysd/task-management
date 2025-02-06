# React Task Management App

## Overview
The **React Task Management App** is a simple and interactive task tracker that allows users to add, update, and manage their tasks efficiently. It includes features such as due date validation, status tracking, and dynamic styling based on deadlines.

## Features
- ✅ **Add, Edit, and Delete Tasks**
- 📅 **Date Selection with Restriction** (Only future dates allowed)
- 🎨 **Dynamic Styling** (Tasks change color based on due dates)
  - **Red**: Overdue tasks
  - **Orange**: Due today
  - **Green**: Upcoming tasks
- 🔄 **Mark Tasks as Completed**
- 📂 **Persistent State Management** (Optional: LocalStorage or API integration)

## Tech Stack
- **React.js** (Frontend Framework)
- **Material-UI** (UI Components)
- **Day.js** (Date Handling)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Click **"Add Task"** to create a new task with a title and due date.
- **Checkbox** allows marking tasks as completed.
- The **due date selector** prevents selecting past dates.
- Task background color changes based on due date.

## Code Snippets
### Example: Restrict Date Selection in Material-UI DatePicker
```jsx
<DatePicker
  label="Select Due Date"
  value={selectedDate}
  onChange={(newValue) => setSelectedDate(newValue)}
  minDate={dayjs()} // Prevent past dates
  shouldDisableDate={(date) => date.isBefore(dayjs(), "day")}
  renderInput={(params) => <TextField {...params} />}
/>
```

### Example: Dynamic Task Background Color
```jsx
const getBackgroundColor = (dueDate) => {
  const today = dayjs().startOf("day");
  const taskDueDate = dayjs(dueDate).startOf("day");

  return taskDueDate.isBefore(today)
    ? "red"
    : taskDueDate.isSame(today)
    ? "orange"
    : "green";
};
```

## Dependencies
- `react` (Frontend framework)
- `@mui/material` (Material UI for styling)
- `@mui/x-date-pickers` (Date picker component)
- `dayjs` (Date manipulation library)

## Future Enhancements
- 🗂 **Drag & Drop Tasks**
- 🔔 **Notifications for Upcoming Tasks**
- 📊 **Task Progress Analytics**

## License
This project is licensed under the MIT License.

---

### 🎯 Happy Coding! 🚀