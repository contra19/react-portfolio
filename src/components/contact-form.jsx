import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (value.trim() !== '') {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [name]: true
      });
    } else if (name === 'email' && !validateEmail(value)) {
      setEmailError(true);
    } else if (name === 'email') {
      setEmailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setErrors({
        name: formData.name.trim() === '',
        email: formData.email.trim() === '',
        message: formData.message.trim() === ''
      });
      return;
    }
  
    if (!validateEmail(formData.email)) {
      setEmailError(true);
      return;
    }
  
    const serviceID = 'service_kozp3vb';
    const templateID = 'template_h73ygvh';
    const userID = 'Yc1a-PtofpArsm4zu';
  
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">Name is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email || emailError ? 'error' : ''}
        />
        {errors.email && <span className="error-message">Email is required</span>}
        {emailError && <span className="error-message">Invalid email address</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <span className="error-message">Message is required</span>}
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
