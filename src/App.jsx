import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleSave = (student) => {
    setStudents((prev) => {
      const exists = prev.some((s) => s.id === student.id);
      if (exists) {
        return prev.map((s) => (s.id === student.id ? student : s));
      }
      return [...prev, student];
    });
    setEditingStudent(null);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;
    setStudents((prev) => prev.filter((s) => s.id !== id));
    if (editingStudent && editingStudent.id === id) {
      setEditingStudent(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return <>
    <div className="app">
      <header className="app-header">
        <h1>Student Management System</h1>
        <p>Add, update, view, and remove student records</p>
      </header>

      <main className="app-main">
        <StudentForm
          onSave={handleSave}
          editingStudent={editingStudent}
          onCancelEdit={handleCancelEdit}
        />

        <section className="students-section">
          <div className="students-section-header">
            <h2>Students</h2>
            <span className="student-count">{students.length} total</span>
          </div>
          <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  </>
}

export default App;