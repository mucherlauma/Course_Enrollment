import React, { useState } from 'react';
import "../components/Card.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Home() {
  const [courses] = useState([
    { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React.', image: 'https://imgs.search.brave.com/5Aht5GgtQ1Sb2h12bbkO6UWJtd1KQrvkuoXA-L2WOYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Ivc2NpZW50aWZp/Yy1hdG9tLXN5bWJv/bC1sb2dvLXNpbXBs/ZS1pY29uLWNvbG9y/ZnVsLWxvZ28tY29u/Y2VwdC13aXRoLXNv/ZnQtc2hhZG93LWRh/cmstYmFja2dyb3Vu/ZF81MTY2NzAtOTk3/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA' },
    { id: 2, title: 'JavaScript Advanced', description: 'Deep dive into JavaScript.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Node.js Essentials', description: 'Server-side development with Node.' },
    { id: 4, title: 'Python for Data Science', description: 'Learn Python with a focus on data science applications.' },
    { id: 5, title: 'Full Stack Development', description: 'Become a full stack developer with this comprehensive course.' },
    { id: 6, title: 'Mobile App Development', description: 'Learn to build mobile applications using React Native.' },
    { id: 7, title: 'Cybersecurity Fundamentals', description: 'Understand the basics of cybersecurity and how to protect systems.' },
    { id: 8, title: 'Cloud Computing Basics', description: 'Introduction to cloud computing concepts and services.' },
    { id: 9, title: 'UI/UX Design Principles', description: 'Learn the principles of user interface and user experience design.' },
  ]);

  const handleEnroll = (course) => {
    alert(`Enrolled in ${course.title}`);
    // Optional: Save to localStorage
    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    localStorage.setItem("enrolledCourses", JSON.stringify([...enrolled, course]));
  };

  return (
    <div>
      <Navbar />
      
      <div className="card-container">
        {courses.map((course) => (
          <Card key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
