import React from 'react';
import youngPartnerImage from './logo1.jpg';
import familyBlessingImage from './logo2.jpg';
import businessBlessingImage from './logo3.jpg';
import tvClubImage from './logo4.jpg';
import jobBlessingImage from './logo5.jpg';
import magazineMinistryImage from './church.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './styl.css'; // Import the CSS file



// Define the Plan interface
interface Plan {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
  }
  
  // Sample data for the plans
  const plans: Plan[] = [
    {
      id: 1,
      imageSrc: youngPartnerImage,
      title: 'Young Partner Plan',
      description: `The Young Partners Plan (YPP) is a God-given plan with a specific mission in heart. This plan was instituted on the 25th July 1985 with the sole purpose of reaching out to young people all over the world...`,
    },
    {
      id: 2,
      imageSrc: familyBlessingImage,
      title: 'Family Blessing Plan',
      description: `Family Blessing Plan is an exceptional Plan given by the Lord to Dr. Paul Dhinakaran, for families to be blessed, to live in unity and to prosper...`,
    },
    {
      id: 3,
      imageSrc: businessBlessingImage,
      title: 'Business Blessing Plan',
      description: `Multiply Your Blessings with Jesus Calls Business Blessing Plan! Enroll your business, shop, or industry to receive divine protection...`,
    },
    {
      id: 4,
      imageSrc: tvClubImage,
      title: 'Jesus Calls TV Club',
      description: `Join the Jesus Calls TV Club today! Your contributions support the television ministry, reaching millions...`,
    },
    {
      id: 5,
      imageSrc: jobBlessingImage,
      title: 'Job Blessing Plan',
      description: `Join the Job Blessing Plan to shine in your career, lead a successful life with a suitable job placement, career advancement...`,
    },
    {
      id: 6,
      imageSrc: magazineMinistryImage,
      title: 'Jesus Calls Magazine Ministry',
      description: `Join hands with Jesus Calls Magazine Ministry! For 50 years, we've shared God's truth, testimonies, and answers to life's questions...`,
    },
  ];
  
  // PlanCard component to display each plan
  const PlanCard: React.FC<Plan> = ({ id, imageSrc, title, description }) => {
    return (
      <div className="plan-card">
        <img src={imageSrc} alt={title} className="plan-image" />
        <div className="plan-details">
          <h3 className="plan-title">{title}</h3>
          <p className="plan-description">{description}</p>
          <button className="read-more-button">Read More</button>
        </div>
        <Link to="/trilochan">
            <motion.button
              className="navigate-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Back
            </motion.button>
          </Link>
      </div>
    );
  };
  
  // PlansList component to render all the plans
  const PlansList: React.FC = () => {
    return (
      <div className="plans-list">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}  // Ensure that plan.id is used as the key
            id={plan.id}   // Pass the id to the PlanCard
            imageSrc={plan.imageSrc}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </div>
    );
  };
  
  // Main component for the LogoDetailsPage
  const LogoDetailsPage: React.FC = () => {
    return (
      <div className="app">
        <PlansList />
      </div>
    );
  };
  
  export default LogoDetailsPage;
