import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const tools = [
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'CorelDraw',
      logo: 'https://img.icons8.com/color/48/coreldraw.png',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Canva',
      logo: 'https://img.icons8.com/color/48/canva.png',
    },
    {
      name: 'VS Code',
      logo: 'https://img.icons8.com/color/48/visual-studio-code-2019.png',
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic websites tailored to your needs.',
      icon: `${process.env.PUBLIC_URL}/images/web_development.jpeg`,
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually appealing user interfaces.',
      icon: `${process.env.PUBLIC_URL}/images/UI_Design.jpeg`,
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility and ranking on search engines.',
      icon: `${process.env.PUBLIC_URL}/images/seo_optimization.png`,
    },
    {
      title: 'Graphic Design',
      description: 'Creating stunning graphics and branding materials.',
      icon: `${process.env.PUBLIC_URL}/images/graphic_design.jpeg`,
    },
  ];

  const portfolio = [
    {
      title: 'E-commerce Website',
      image: `${process.env.PUBLIC_URL}/images/ecommerce_website.jpg`,
      link: '#',
    },
    {
      title: 'Portfolio Website',
      image: `${process.env.PUBLIC_URL}/images/Portfolio_website.png`,
      link: '#',
    },
    {
      title: 'Landing Page',
      image: `${process.env.PUBLIC_URL}/images/Landing_page.jpeg`,
      link: '#',
    },
    {
      title: 'Dashboard App',
      image: `${process.env.PUBLIC_URL}/images/dash_board_app.jpeg`,
    },
  ];

  return (
    <div>
      <section className="welcome-section">
        <div className='container '>
          <div className='row'>
            <div className='col-12 col-md-9 description'> 
              <h2>About</h2>
              <p>Creating excellence through collaboration and innovation</p> 
              <Link to="/contact" className="btn btn-lg hire">
                  Hire Me
              </Link>
              <Link to="/resume" className="btn btn-lg hire">
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">About/</p>
                        </div>
                        <div className="col-md-9 text-line">
                        <p className="lead text-muted">
                            Empowering products to thrive in the digital age with a human-centered design approach, transforming ideas into captivating interactive experiences.
                        </p>
                        <div className="line-block mt-4">
                            <div className="line-text-wrap d-flex justify-content-between">
                            <div className="small-text progress-1">Kickoff</div>
                            <div className="small-text left">Full Product</div>
                            </div>
                            <div className="line-animation position-relative mt-3">
                            <div className="circle circle-start"></div>
                            <div className="line"></div>
                            <div className="circle circle-end"></div>
                            </div>
                        </div>
                        <div className='abtintro'>
                          <p>
                            Hi, I'm Eric!<br/>

                            I’m a Frontend Developer with good hands-on experience crafting intuitive, responsive and high-performance web applications. My expertise lies in transforming design concepts into pixel-perfect, user-friendly interfaces using modern technologies like React.js, Bootstrap, JavaScript, HTML, and CSS.

                            Through out my career, I’ve had the opportunity to work on a variety of projects across different industries, ranging from e-commerce platforms to fintech applications. Some of my key strengths include:
                            <ul>
                            <li>Optimizing performance : Reducing load times by implementing techniques like lazy loading, code splitting and caching.</li>
                            <li>Responsive design : Ensuring seamless experiences across desktops, tablets, and mobile devices.</li>
                            <li>Accessibility : Building inclusive web applications that adhere to WCAG standards.</li>
                            <li>Collaboration : Working closely with designers, back-end developers, and stakeholders to deliver exceptional results.</li>
                            </ul>

                            Let’s connect if you’re looking for a collaborative partner to bring your digital vision to life or if you’d like to discuss anything related to frontend development!
                          </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="sec py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Services/</p>
                        </div>
                        <div className="col-md-9">
                            <p className='intro'>Here's how I can help your business get better</p>
                            <hr/>
                            <div className="row g-4">
                                {services.map((service, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                  <div className="card h-100 shadow-sm text-center p-4">
                                    <img 
                                    src={service.icon} 
                                    alt={`${service.title} icon`} 
                                    className="mb-3" 
                                    style={{ width: '200px', height: '150px', objectFit: 'contain'  }} />
                                    <h5 className="fw-bold">{service.title}</h5>
                                    <p className="text-muted">{service.description}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Tools/</p>
                        </div>
                        <div className="col-md-9">
                            <p className='intro'>Some of my best tools to get your project done.</p>
                            <hr/>
                            <div className="row g-4">
                                {tools.map((tool, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="card h-100 shadow-sm text-center p-4">
                                    <img 
                                    src={tool.logo} 
                                    alt={`${tool.name} logo`} 
                                    className="mb-3" 
                                    style={{ width: '48px', height: '48px' }} />
                                    <span className="fw-bold">{tool.name}</span>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 abt-text">
                        <p className="display-5 mb-4">Portfolio/</p>
                        </div>
                        <div className="col-md-9">
                            <div className="row g-4">
                                {portfolio.map((project, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm text-center p-4">
                                    <img src={project.image} 
                                    alt={project.title} 
                                    className="mb-3" 
                                    style={{ width: '500px', height: '150px', objectFit: 'contain' }} />
                                    <h5 className="fw-bold">{project.title}</h5>
                                    <p className="text-muted">{project.description}</p>
                                    </div>
                                </div>                             
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="help-section">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 text-center helpcon ">
                    <h4 className="display-4 text-white mb-4">How can we help you?</h4>
                    <Link to="/contact" className="btn btn-lg rounded-pill px-5 py-3">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default About;