import React from 'react';
import axios from 'axios';
import { Github, Linkedin, Twitter, Instagram, } from 'lucide-react';

function Contact () {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://portfolio-backend-m9il.onrender.com/api/contact', formData, {
                headers: { 'Content-Type': 'application/json' }
            });              
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } catch (error) {
          console.error('❌ Error from backend:', error.response?.data || error.message);
          alert('An error occurred while sending the message.');
        }
      };
      

    return(
        <section className='sec'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="display-5 fw-bold mb-4">Have an idea/</h2>
                        <p className="lead text-muted">
                        Let’s do it together! Share your thoughts, and we’ll collaborate to bring your vision to life. Whether it’s a new project or feedback, we’re here for you.
                        </p>
                        <div>
                            <div className="col-12 col-md-3 icons">
                                <div className="icon-row">
                                    <a href="https://github.com/Ricmo100" target="_blank" rel="noopener noreferrer">
                                        <Github size={24} className="social-icon" style={{ color: '#171515' }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/lordric/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={24} className="social-icon" style={{ color: '#0077B5' }} />
                                    </a>
                                    <a href="https://www.instagram.com/lord_ric_/" target="_blank" rel="noopener noreferrer">
                                        <Instagram size={24} className="social-icon" style={{ color: '#E1306C' }} />
                                    </a>
                                    <a href="https://x.com/Ricmo_234" target="_blank" rel="noopener noreferrer">
                                        <Twitter size={24} className="social-icon" style={{ color: '#1DA1F2' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-3">
                        <h2 className="text-center fs-4 fw-bold text-dark mb-4">Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            </div>
                            <button type="submit" className="btn port w-100">
                            Submit
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    );
};

export default Contact;