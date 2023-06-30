import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lessons = ({ title, description, lessons}) => {
    const [isOpen, setIsOpen] = useState(false);  // Add this line

    const handleCollapsibleToggle = () => {  // Add this function
        setIsOpen(!isOpen);
    };

    return (
        <div className="module">
            <h1>{title}</h1>
            <div className="module-description">
                <p>{description}</p>
                <button type="button" className="collapsible" onClick={handleCollapsibleToggle}>Open Collapsible</button>
                <div className="content" style={{display: isOpen ? 'block' : 'none'}}>
                    <ul>
                    {lessons.map((lesson, index) => (
                        <li key={index}><Link to={lesson.path}>{lesson.title}</Link></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Lessons;