# Student Record Manager

A React app for managing student records. You can add, view, update, and delete students, which are displayed as cards. This is one of my first React projects, built to practise components, props, and state.

## Features

- Add a student with name, email, course name, and course duration
- View all students as cards with an initials avatar
- Edit a student using the same form (it switches to update mode)
- Delete a student with a confirmation prompt
- Form validation using HTML `required` and `type="email"`
- Responsive layout for desktop and mobile

## Built With

- React 18 (with Vite)
- Plain CSS

## Project Structure

```
src/
├── App.jsx                  # Holds the students state and the add/edit/delete logic
├── App.css                  # All styles
└── components/
    ├── StudentForm.jsx      # Form for adding and editing a student
    ├── StudentList.jsx      # Shows the cards, or an empty message
    └── StudentCard.jsx      # One student card with Edit and Delete buttons
```

## How It Works

- `App.jsx` is the single source of truth: it owns the `students` array.
- Data flows **down** through props (`App` → `StudentList` → `StudentCard`).
- Actions flow **up** through callback functions (`onSave`, `onEdit`, `onDelete`).
- Clicking Edit stores that student in `editingStudent`. A `useEffect` in `StudentForm` then fills the form with their details.

## What I Learned

- Splitting a UI into reusable components
- Passing data with props and sending actions back up with callbacks
- Controlled form inputs with `useState`
- Running code when state changes with `useEffect`
- Rendering lists with `.map()` and unique `key` values

## Run Locally

```bash
git clone https://github.com/MuhammadKhizer78/Student-Record-Manager-React.git
cd Student-Record-Manager-React
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Known Limitations

- Data is stored in React state only, so it resets when the page is refreshed.
- No search or backend yet.

## Possible Improvements

- Search students by name
- Save data with localStorage
- Connect to a backend or database
