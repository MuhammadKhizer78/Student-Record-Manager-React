function StudentCard({ student, onEdit, onDelete }) {
  const initials = student.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="student-card">
      <div className="student-card-header">
        <div className="student-avatar">{initials}</div>
        <div>
          <h3 className="student-name">{student.name}</h3>
          <p className="student-email">{student.email}</p>
        </div>
      </div>

      <div className="student-card-body">
        <div className="student-detail">
          <span className="detail-label">Course</span>
          <span className="detail-value">{student.courseName}</span>
        </div>
        <div className="student-detail">
          <span className="detail-label">Duration</span>
          <span className="detail-value">{student.courseDuration}</span>
        </div>
      </div>

      <div className="student-card-actions">
        <button className="btn btn-edit" onClick={() => onEdit(student)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;