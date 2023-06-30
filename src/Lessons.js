import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lessons = ({ title, description, lessons}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [completedLessons, setCompletedLessons] = useState([]);

    const handleCollapsibleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const completed = localStorage.getItem('completedLessons');
        if (completed) {
            setCompletedLessons(JSON.parse(completed));
        }
    }, []);

    const getCompletionRatio = () => {
        const completedCount = lessons.filter(lesson => completedLessons.includes(lesson.path)).length;
        return `${completedCount}/${lessons.length}`;
    };

    return (
        <div className="module">
            <h1>{title}</h1>
            <div className="module-description">
                <p>{description}</p>
                <button type="button" className="collapsible" onClick={handleCollapsibleToggle}>Курс бағдарламасы <span>{getCompletionRatio()}</span></button>
                <div className="content" style={{display: isOpen ? 'block' : 'none'}}>
                    <ul>
                    {lessons.map((lesson, index) => (
                        <li key={index} style={{listStyleType: 'none'}}>
                            <div className="checkbox-wrapper">
                                <div className={`circle-checkbox ${completedLessons.includes(lesson.path) ? 'checked' : ''}`}></div>
                                <Link to={lesson.path}>{lesson.title}</Link>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Lessons;
