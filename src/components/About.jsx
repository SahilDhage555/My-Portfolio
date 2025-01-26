import React, { useState } from 'react';


function About() {
    const [activeTab, setActiveTab] = useState('skills');
  
    const opentab = (tabname) => {
      setActiveTab(tabname);
    };
  

  return (
    <>
    <div id="about" className='bg-black w-100 m-0 pt-5 p-4 pb-5'>
      <div className="container-fluid">
        <div className="about-area">
          <div className="img-col">
            <img src="download.png" className="about-img" alt="" />
          </div>
          <div className="about-txt">
            <h1 className="sub-title">About Me</h1>
            <p>
            As a MERN stack developer, I specialize in building responsive, scalable web applications using MongoDB, 
            Express.js, React.js, and Node.js. With strong frontend skills in React for interactive UI design and backend 
            expertise in Node.js for creating robust APIs, I deliver seamless user experiences. I also ensure efficient 
            database management with MongoDB, focusing on performance and scalability across projects.
            </p>
            <div className="tab-titles">
                <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => opentab('skills')}
                >
                Skills
                </p>
                {/* <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => opentab('experience')}
                >
                Experience
                </p> */}
                <p
                className={` tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => opentab('education')}
                >
                Education
                </p>
            </div>

            <div className="tab-contents">
                {activeTab === 'skills' && (
                <div id="skills" className="active-tab">
                    <ul>
                    <li><span>Web Design:</span><br />Frontend Devloper</li>
                    <li><span>Web Development:</span><br />Full Stack Web Developer</li>
                    </ul>
                </div>
                )}

                {/* {activeTab === 'experience' && (
                <div id="experience" className="active-tab">
                    <ul>
                    <li><span style={{ fontSize: '30px' }}>Fresher</span></li>
                    </ul>
                </div>
                )} */}

                {activeTab === 'education' && (
                <div id="education" className="active-tab">
                    <ul>
                    {/* <li><span>Pursuing:</span><br />MCA from Piren's College, Loni.</li> */}
                    <li><span>2024:</span><br />BCS from Shri Saibaba College, Shirdi.</li>
                    <li><span>2024:</span><br />MERN Stack Course from Pune.</li>
                    </ul>
                </div>
                )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default About;
