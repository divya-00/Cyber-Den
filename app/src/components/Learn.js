import './learn.css';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome 4.7
import React, { Component } from 'react';

class Learn extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      counter: 0,
      videos: [],
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  componentDidMount()
   {
    const videos = document.querySelectorAll('iframe');
    this.setState({ videos });
    videos.forEach((video, index) => {
      video.style.left = `${index * 100}%`;
    });

    const questionWrappers = document.querySelectorAll('.q-wrapper');
    this.setState({ questionWrappers });
    questionWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', this.showAnswer);
      wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.showAnswer(e);
        }
      });
    });
  }

  slideContent()
   {
    const { counter, videos } = this.state;
    videos.forEach((video) => {
      video.style.transform = `translateX(-${counter * 100}%)`;
    });
  }

  prev()
   {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1 }, this.slideContent);
    }
  }

  next() 
  {
    const { counter, videos } = this.state;
    if (counter < videos.length - 1) {
      this.setState({ counter: counter + 1 }, this.slideContent);
    }
  }

  showAnswer(e)
   {
    const { questionWrappers } = this.state;
    questionWrappers.forEach((wrapper) => {
      if (wrapper === e.currentTarget) {
        wrapper.firstElementChild.classList.toggle('h3-active');
        wrapper.lastElementChild.classList.toggle('svg-animation');
        wrapper.nextElementSibling.classList.toggle('p-visible');
      } else {
        wrapper.firstElementChild.classList.remove('h3-active');
        wrapper.lastElementChild.classList.remove('svg-animation');
        wrapper.nextElementSibling.classList.remove('p-visible');
      }
    });
  }

  render() 
  {
    return (

      <div>
        
        <h1>Welcome to Cyber Den</h1>
        <div className='sec-cc' id="course-catalog">
          <h1>Course Catalog</h1>
          <div id="main">
            <div id="wrapper">
              <div>
                <button className="active" id="prev" onClick={this.prev}><i className="fa fa-arrow-left"></i></button>
              </div>
              <div id="video-container">
                <div id="video-carousel">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/z5nc9MDbvkw?si=MCEZx9QoJuf_6px3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/vInCm7Xz0sI?si=jocGT7G6Rd3xTj_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NQ1cvwEvh44?si=pZYa6j_Y6-PYG5-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/6Jubl1UnJTE?si=8kMAR3sd3jwJfahF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/C5ig8YxRHUM?si=YZtk_cR3hhkrwmJD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Dau89ALHbVc?si=dmbeRXBsI5vtRp-X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
              </div>
              <div>
                <button className="active" id="next" onClick={this.next}><i className="fa fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className='sec-ic' id="interactive-challenges" style={{ color: '#8000ff' }}>
          <h1>Interactive Challenges</h1>
          <ul>
            <li>Challenge 1: Cryptography Puzzle</li>
            <li>Challenge 2: Web Application Penetration Testing</li>
            <li>Challenge 3: Network Forensics Investigation</li>
          </ul>
        </div>
        <div className='sec-rlp' id="recommended-learning-paths" style={{ color: '#8000ff' }}>
          <h1>Recommended Learning Paths</h1>
          <div id="profexp" className="profexp">
            <div className="containerprof">
              <div className="row">
                <div className="exp-col-1">
                  <p className="tag">Not sure where to start? Follow our recommended learning paths to build your cybersecurity skills from beginner to advanced levels.</p>
                  <br />
                  <br />
                  <div className="exp-box">
                    <div className="exp-content">
                      <div className="content">
                        <h3>Fundamentals of Cybersecurity</h3>
                        <p>Understand the basic concepts and principles of cybersecurity, including the CIA triad (Confidentiality, Integrity, Availability), threat actors, attack vectors, and common cybersecurity threats.</p>
                      </div>
                    </div>
                   <div className="exp-content">
                    <div className="content">
                        <h3>Network Security</h3>
                        <p>
                          Learn about network protocols, encryption, firewalls,
                           intrusion detection/prevention systems (IDS/IPS), 
                           and network security best practices.
                          Explore topics such as secure network design, VPNs 
                          (Virtual Private Networks), and securing wireless networks.</p>
                    </div>
                </div>
                <div className="exp-content">
                  <div className="content">
                      <h3>Operating System Security</h3>
                      <p>Gain an understanding of security features and configurations in operating systems (e.g., Windows, Linux, macOS).
                        Learn about user authentication, access controls, file permissions, and system hardening techniques.</p>
                  </div>
                </div>
                <div className="exp-content">
                  <div className="content">
                      <h3>Web Security</h3>
                      <p>Learn about common web vulnerabilities such as 
                        Cross-Site Scripting (XSS), SQL Injection, CSRF 
                        (Cross-Site Request Forgery), and security mechanisms to mitigate these risks.
                        Explore web application security testing techniques 
                        and tools like OWASP ZAP, Burp Suite, and Nikto.</p>
                  </div>
                </div>
                <div className="exp-content">
                  <div className="content">
                      <h3>Ethical Hacking and Penetration Testing</h3>
                      <p>
                        Understand the methodologies and techniques used by 
                        ethical hackers to identify and exploit vulnerabilities.
                        Learn how to conduct penetration testing assessments, 
                        including reconnaissance, scanning, exploitation, and post-exploitation phases.
                        Explore tools such as Nmap, Metasploit, Wireshark, and John the Ripper.</p>
                  </div>
              </div>
              <div className="exp-content">
                <div className="content">
                    <h3>Incident Response and Forensics</h3>
                    <p>
                      Learn how to respond to cybersecurity incidents, 
                      including incident detection, analysis, containment, eradication, and recovery.
                      Understand digital forensics principles and 
                      techniques for collecting, preserving, and analyzing digital evidence.</p>
                </div>
            </div>

            <div className="exp-content">
                <div className="content">
                    <h3>Security Governance and Compliance</h3>
                    <p>
                      Gain knowledge of security governance frameworks 
                      such as ISO 27001, NIST Cybersecurity Framework, 
                      and GDPR (General Data Protection Regulation).
                      Understand compliance requirements and industry 
                      standards relevant to cybersecurity, such as PCI DSS 
                      (Payment Card Industry Data Security Standard) and HIPAA 
                      (Health Insurance Portability and Accountability Act).</p>
                </div>
            </div>
            <div className="exp-content">
              <div className="content">
                  <h3>Cloud Security</h3>
                  <p>
                    Learn about cloud computing concepts and security considerations for cloud environments.
                    Understand cloud service models (IaaS, PaaS, SaaS), 
                    deployment models (public, private, hybrid), and best practices for securing cloud infrastructure and applications.</p>
              </div>
            </div>
              <div className="exp-content">
                <div className="content">
                    <h3>Secure Coding Practices</h3>
                    <p>
                      Gain knowledge of secure coding principles and best practices for developing secure software applications.
                      Learn about common software vulnerabilities and how to mitigate them through secure coding techniques.</p>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sec-f' id="Faqs" style={{ color: '#8000ff' }}>
          <h1>Feedback Q & A</h1>
          <div className="containerfaqs">
            <article>
              <div className="img-container"></div>
              <div className="faq">
                <h2>FAQ</h2>
                <div className="q-a">
                 <div className="q-wrapper">
                    <h3 tabIndex="0">How many team members can I invite?</h3>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" />
                    </svg>
                  </div>
                  <p hidden>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                </div>
                <div className="q-a">
                    <div className="q-wrapper">
                        <h3 tabIndex="0">What is the maximum file upload size?</h3>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                    </div>
                    <p hidden>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>

                    <div className="q-a">
                    <div className="q-wrapper">
                        <h3 tabIndex="0">How do I reset my password?</h3>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                    </div>
                    <p hidden>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                    </div>

                    <div className="q-a">
                    <div className="q-wrapper">
                        <h3 tabIndex="0">Can I cancel my subscription?</h3>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                    </div>
                    <p hidden>Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>

                    <div className="q-a">
                    <div className="q-wrapper">
                        <h3 tabIndex="0">Do you provide additional support?</h3>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                    </div>
                    <p hidden>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>
              </div>
            </article>
          </div>
        </div>
        <div>&nbsp;<br/><br/></div>
        <div className="copyright">
              <p>Copyright © rights are reserved, made with <i className="fa fa-heart"></i> DeviDivyaSri Perni.</p>
         </div>
      </div>
    );
  }
}

export default Learn;