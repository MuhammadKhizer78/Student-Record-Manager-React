import StudentCard from './StudentCard';

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students added yet. Use the form above to add your first student.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;