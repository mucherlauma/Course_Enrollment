import { useNavigate } from 'react-router-dom';

function Card({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={course.image} alt={course.title} className="card-img" />
      </div>
      <div className="card-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button onClick={handleClick}>View Details</button>
      </div>
    </div>
  );
}
export default Card;