import { useState } from 'react';
import './page.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <div className='page-title'>
        <h1>Contact me</h1>
      </div>
      <div className='subtitle'>
        <p>If you&apos;d like to get in touch with me, feel free to fill the form below or email me at Kevin.M.Petow@outlook.com!</p>
      </div>
      <div className="socials">
        <button>LinkedIn</button>
        <button>GitHub</button>
      </div>
    </div>
  );
};

export default Contact;
