import { useState, useEffect } from 'react';

function StudentForm({ onSave, editingStudent, onCancelEdit }) {
  const initialState = {
    name: '',
    email: '',
    courseName: '',
    courseDuration: '',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(initialState);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    onSave({
      id: editingStudent ? editingStudent.id : Date.now().toString(),
      ...formData,
    });

    setFormData(initialState);
  };

  const handleCancel = () => {
    setFormData(initialState);
    onCancelEdit();
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. abc"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. abc@example.com"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="e.g. Web Development"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="courseDuration">Course Duration</label>
          <input
            type="text"
            id="courseDuration"
            name="courseDuration"
            value={formData.courseDuration}
            onChange={handleChange}
            placeholder="e.g. 14 Months"
            required
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingStudent ? 'Update Student' : 'Add Student'}
        </button>
        {editingStudent && (
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;