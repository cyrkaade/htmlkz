import { Link } from 'react-router-dom';

const CourseModule = ({ title, description, lessons, handleCollapsibleToggle }) => {
    return (
        <div className="module">
            <h1>{title}</h1>
            <div className="module-content">
            <p>{description}</p>
            <button type="button" className="collapsible" onClick={handleCollapsibleToggle}>Open Collapsible</button>
            <div className="content">
                <ul>
                {lessons.map((lesson, index) => (
                    <li key={index}><Link to={lesson.path}>{lesson.title}</Link></li>
                ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default CourseModule;