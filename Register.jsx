import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('user', JSON.stringify(form));
      alert('Registered Successfully!');
      navigate('/login');
    }
  };

  const formStyle = {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#218838',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    textAlign: 'left',
    marginTop: '-10px',
    marginBottom: '10px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ color: '#333' }}>Register</h2>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        style={inputStyle}
      />
      {errors.name && <p style={errorStyle}>{errors.name}</p>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        style={inputStyle}
      />
      {errors.email && <p style={errorStyle}>{errors.email}</p>}
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        style={inputStyle}
      />
      {errors.password && <p style={errorStyle}>{errors.password}</p>}
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Register
      </button>
    </form>
  );
}