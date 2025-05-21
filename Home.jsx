import React, { useState } from 'react';

function Home() {
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStudent, setNewStudent] = useState({ rollNo: '', name: '' });

  const handleViewStudents = () => {
    // Example student data
    const studentData = [
      { rollNo: 1, name: 'John Doe' },
      { rollNo: 2, name: 'Jane Smith' },
      { rollNo: 3, name: 'Alice Johnson' },
    ];
    setStudents(studentData);
    setShowStudents(true);
    setShowAddForm(false); // Hide the add form when viewing students
  };

  const handleAddStudent = () => {
    setShowAddForm(true);
    setShowStudents(false); // Hide the student list when adding a student
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmitStudent = () => {
    if (newStudent.rollNo && newStudent.name) {
      setStudents([...students, newStudent]);
      setNewStudent({ rollNo: '', name: '' }); // Reset the form
      alert('Student added successfully!');
      setShowAddForm(false); // Hide the form after adding the student
      setShowStudents(true); // Show the updated student list
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'black', textAlign: 'center' }}>
        Welcome to the Student Management System
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
        Manage student records efficiently and effectively.
      </p>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleViewStudents}
        >
          View Students
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#28A745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleAddStudent}
        >
          Add Student
        </button>
      </div>
      {showStudents && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Student List</h2>
          <table
            style={{
              margin: '0 auto',
              borderCollapse: 'collapse',
              width: '50%',
              textAlign: 'left',
            }}
          >
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Roll No</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.rollNo}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showAddForm && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Add New Student</h2>
          <input
            type="text"
            name="rollNo"
            placeholder="Roll No"
            value={newStudent.rollNo}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              margin: '10px',
              width: '40%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStudent.name}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              margin: '10px',
              width: '40%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <button
            onClick={handleSubmitStudent}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28A745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
