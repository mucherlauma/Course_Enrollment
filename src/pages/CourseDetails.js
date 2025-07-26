import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../components/CourseDetails.css"; // Assuming you have a CSS file for styling

const courseData = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React.',
    curriculum: ['JSX', 'Components', 'Props', 'Hooks'],
    amount: 2999,
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    description: 'Deep dive into JavaScript.',
    curriculum: ['ES6+', 'Closures', 'Async/Await', 'DOM'],
    amount: 2499,
  },
  {
    id: 3,
    title: 'Node.js Essentials',
    description: 'Server-side development with Node.',
    curriculum: ['Express', 'APIs', 'MongoDB', 'Middleware'],
    amount: 3199,
  },
    {  id: 4,
    title: 'Python for Data Science',
    description: 'Learn Python with a focus on data science applications.',
    curriculum: ['Python Basics', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
    amount: 3999,
    },
    {  id: 5,
    title: 'Full Stack Development',
    description: 'Become a full stack developer with this comprehensive course.',
    curriculum: ['HTML/CSS', 'JavaScript', 'React', 'Node.js',
        'MongoDB', 'Express'],
    amount: 4999,
    },
    {  id: 6,
    title: 'Mobile App Development',
    description: 'Learn to build mobile applications using React Native.',  
    curriculum: ['React Native Basics', 'Navigation', 'State Management', 'APIs'],
    amount: 3499,
    },
    {  id: 7,
    title: 'Cybersecurity Fundamentals',
    description: 'Understand the basics of cybersecurity and how to protect systems.',
    curriculum: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Incident Response'],
    amount: 2799,
    },
    {  id: 8,
    title: 'Cloud Computing Basics',
    description: 'Introduction to cloud computing concepts and services.',
    curriculum: ['Cloud Fundamentals', 'AWS Overview', 'Azure Basics', 'Google Cloud Platform'],
    amount: 3599,
    },
    {  id: 9,
    title: 'UI/UX Design Principles',   
    description: 'Learn the principles of user interface and user experience design.',
    curriculum: ['Design Thinking', 'Wireframing', 'Prototyping', 'User Testing'],
    amount: 2899,
    },
    {  id: 10,
    title: 'Introduction to DevOps',
    description: 'Learn the principles of DevOps and how to implement CI/CD pipelines.',
    curriculum: ['DevOps Fundamentals', 'CI/CD Concepts', 'Containerization', 'Monitoring'],
    amount: 3999,
    },
];

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((c) => c.id === parseInt(id));

  const handleEnroll = () => {
    alert(`Enrolled in ${course.title}`);
    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    localStorage.setItem("enrolledCourses", JSON.stringify([...enrolled, course]));
    navigate("/home");
  };

  if (!course) return <p>Course not found.</p>;

  
return (
  <div className="course-details">
    <h2>{course.title}</h2>
    <p>{course.description}</p>

    <h4>Course Curriculum:</h4>
    <ul>
      {course.curriculum.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <p className="price">Course Fee: ₹{course.amount}</p>
    <button className="enroll-btn" onClick={handleEnroll}>Enroll Now</button>
    <button className="enroll-btn" onClick={() => navigate('/payment')}>
  Proceed to Payment
</button>

  </div>
);
}
export default CourseDetails;