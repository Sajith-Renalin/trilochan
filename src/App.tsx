import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import logo from './jcc.png'; // Assuming logo is in local
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import chur from './vanagaram.jpg';
import mag from './emag.png';
import ut from './Uturn.png';
import be from './beth.jpg';
import l1 from './logo1.jpg';
import l2 from './logo2.jpg';
import l3 from './logo3.jpg';
import l4 from './logo4.jpg';
import l5 from './logo5.jpg';


const App: React.FC = () => {
  return (
    <>
      <div className="full-page">
        {/* Video background */}
        <video className="background-video" autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/jesus6.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <motion.img
          className="logo"
          src={logo}
          alt="logo"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="centered-text"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We Exist To Honor God<br />
          And Make Disciples
        </motion.div>
{/* navigation */}
        
        <motion.div 
      className="navbar" 
      initial={{ scale: 0, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      exit={{ scale: 0, opacity: 0 }}  // Optional exit animation
      transition={{ duration: 0.5, delay: 0.5 }} // Shorter duration and different delay
    >
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Today Promise</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Blessing Plans</a>
      </div>
    </motion.div>
      </div>

     {/* YouTube Video Section */}
<motion.div
  className="video-container"
  initial={{ x: -100, opacity: 0 }} // Start from left
  whileInView={{ x: 0, opacity: 1 }} // Animate to original position
  transition={{ duration: 0.6 }} // Duration of the animation
>
  <div className="container">
    <h1>Latest Videos</h1>
    <div className="row">
      {/* Video Column with Framer Motion */}
      <div className="video-wrapper">
        <div className='video'>
          <iframe
            width="230"
            height="180"
            src="https://www.youtube.com/embed/KDsWsAesfYs?si=8VDOHKWvAmKu9woC" // Updated to embed format
            title="October Promise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Repeat for other video wrappers */}
      <div className="video-wrapper">
        <div className='video'>
          <iframe
            width="230"
            height="180"
            src="https://www.youtube.com/embed/KDsWsAesfYs?si=8VDOHKWvAmKu9woC"
            title="October Promise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="video-wrapper">
        <div className='video'>
          <iframe
            width="230"
            height="180"
            src="https://www.youtube.com/embed/KDsWsAesfYs?si=8VDOHKWvAmKu9woC"
            title="October Promise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="video-wrapper">
        <div className='video'>
          <iframe
            width="230"
            height="180"
            src="https://www.youtube.com/embed/KDsWsAesfYs?si=8VDOHKWvAmKu9woC"
            title="October Promise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="video-wrapper">
        <div className='video'>
          <iframe
            width="230"
            height="180"
            src="https://www.youtube.com/embed/KDsWsAesfYs?si=8VDOHKWvAmKu9woC"
            title="October Promise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      

      

      {/* Add other video-wrapper sections here... */}
    </div>
  </div>
</motion.div>



{/* Description Section */}
<div className="content-container">
  <h1>Promise Verse</h1>
  <div className="row">
    <div className="column">
      <h2>Monthly Promise</h2>
      <p>
        Daughter, your faith has made you well. Go in peace, and be healed of your affliction. (NKJV)
        <br />
        <em>Mark 5:34</em>
      </p>
    </div>
    <motion.div
      className="column"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <h2>Daily Promise</h2>
      <p>
        Make it a daily habit to walk with Jesus. This program provides a devotion presented.
      </p>
    </motion.div>
  </div>
</div>


      <div className="logo-section">
        <h2 className="centered-titles">Blessing Plan</h2>
        <div className="logo-container">
          {[l1, l2, l3, l4, l5].map((src, index) => (
            <motion.div
              className="logo-item"
              key={src}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <img src={src} alt={`Logo ${index + 1}`} className="demo-logo" />
              <motion.p
                className="demo-text"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                {["Family blessing", "Job blessing", "Young partner", "Blessing Plan", "Jesus Calls"][index]}
              </motion.p>
            </motion.div>

          ))}

          {/* Add button here */}
          <Link to="/blessing-plan">
            <motion.button
              className="navigate-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              MORE
            </motion.button>
          </Link>

           </div>
      </div>

      {/* Testimonies Section */}
<div className="testimonies-section">
  <motion.h2
    className="centered-title"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    Testimonies
  </motion.h2>
  
  <motion.div
    className="testimonies-container"
    whileInView={{ opacity: 1, x: 0 }} // Animate to original position
    initial={{ opacity: 0, x: 100 }} // Start from right
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    {/* Testimony Items */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="testimony-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={`https://superstarworksheets.com/wp-content/uploads/2023/03/EasterCrossTemplate.jpg`}
          alt={`Avatar ${i + 1}`}
          className="testimony-avatar"
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
        <div className="testimony-content">
          <h3 className="testimony-name">Testimony {i + 1}</h3>
          <p className="testimony-location">Location {i + 1}</p>
          <motion.h4
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            FROM PRAYERS TO PARENTHOOD
          </motion.h4>
          <p>
            My husband’s name is Dheeraj Singh. We got married four years ago, but we were unable to have a child...
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>


      {/* upcomming event */}

     {/* Upcoming Prayer Meetings */}
<motion.div
  className="upcoming-prayer-meetings"
  whileInView={{ opacity: 1, x: 0 }} // Animate to original position
  initial={{ opacity: 0, x: -100 }} // Start from left
  transition={{ duration: 0.6 }}
>
  <h2>Upcoming Prayer Meetings</h2>
  <button className="view-all-button">View all</button>
  <div className="meeting">
      <div className="meeting-date">
          <img src={ut} alt="Upcoming Meetings" className="month-image" />
          <div className="content">
              <div className="day">12</div>
              <div className="day-name">Saturday</div>
          </div>
      </div>
      <div className="meeting-details">
          <h3>Miracle Fasting Prayer</h3>
          <p>From: 12-10-24 - 10:00 AM</p>
          <p>To: 12-10-24 - 02:00 PM</p>
          <p>
              <span className="location-icon">📍</span>
              Vanagaram Prayer Tower, JC Garden, 96, Poonamallee High Road, Vanagaram, Chennai-600095
          </p>
      </div>
  </div>
  <div className="meeting">
      <div className="meeting-date">
          <img src={be} alt="Upcoming Meetings" className="month-image" />
          <div className="content">
              <div className="day">02</div>
              <div className="day-name">Saturday</div>
          </div>
      </div>
      <div className="meeting-details">
          <h3>Bethesda Blessing Meeting</h3>
          <p>From: 02-11-24 - 02:00 PM</p>
          <p>To: 02-11-24 - 05:30 PM</p>
          <p>
              <span className="location-icon">📍</span>
              Dr.D.G.S. Dhinakaran Centre, Karunya Nagar, Coimbatore-641114
          </p>
          <button className="direction-button">Direction</button>
      </div>
  </div>
</motion.div>

{/* emag */}

{/* eMagazine Section */}
<motion.div
  className="magazine-section"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="magazine-title">eMagazine</h2>
  <motion.div className="magazine-grid">
    {[
      { imgSrc: mag, link: 'link-to-magazine1' },
      { imgSrc: mag, link: 'link-to-magazine2' },
      { imgSrc: mag , link: 'link-to-magazine3' },
      { imgSrc: mag, link: 'link-to-magazine4' },
      { imgSrc: mag, link: 'link-to-magazine5' },
      { imgSrc: mag, link: 'link-to-magazine6' },
      { imgSrc: mag, link: 'link-to-magazine7' },
    ].map((mag, index) => (
      <motion.div key={index} className="magazine-item">
        <img src={mag.imgSrc} alt={`Magazine ${index + 1}`} className="magazine-cover" />
        <a href={mag.link} target="_blank" rel="noopener noreferrer" className="magazine-link">
          {/* <img src="path-to-pdf-icon" alt="PDF Icon" className="pdf-icon" />
          <span></span> */}
        </a>
      </motion.div>
    ))}
  </motion.div>
</motion.div>



      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h1>Jesus Calls</h1>
            <p>
              Jesus Calls is a global ministry founded by Late Brother D.G.S. Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to bring comfort and healing to the broken-hearted without distinction through prayer offered 24/7 throughout the year.
            </p>
          </div>
          <div className="footer-right">
            <h2>Want to know more?</h2>
            <div className="contact-info">
              <p>
                <strong>24/7 Prayers</strong><br />
                <span className="phone">8546999000</span>
              </p>
              <p>
                <strong>For Queries, Call</strong><br />
                <span className="phone">04423456677</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

