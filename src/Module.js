import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lessons from './Lessons';

const lessons = [
    { title: 'HTML элементтеріне сәлем айтыңыз', path: '/lesson1' },
    { title: 'h2 элементі бар тақырып', path: '/lesson2' },
    { title: 'Параграф элементімен хабарлаңыз', path: '/lesson3' },
    // add more lessons here
];




const lessons_content = [
    {
      id: 'lesson1',
      title: "HTML элементтеріне сәлем айтыңыз",
      text: "FreeCodeCamp HTML кодтау мәселелеріне қош келдіңіз. Бұл сізге веб-әзірлеуді кезең-кезеңімен көрсетеді.\n\nБіріншіден, сіз HTML арқылы қарапайым веб-парақ жасаудан бастайсыз. Кодты осы веб-бетке ендірілген код өңдегішінде өңдеуге болады.\n\nКод редакторында <h1>Hello</h1> деп жазылған кодты көріп тұрсыз ба? Бұл HTML элементі.\n\nHTML элементтерінің көпшілігінде ашу және жабу тегі бар.\n\nАшылатын тегтер келесідей болады:\n\n<h1>\n\nЖабу тегтері келесідей болады:\n\n</h1>\n\nАшу және жабу тегтерінің арасындағы жалғыз айырмашылық - жабу тегінің ашылатын жақшасынан кейінгі қиғаш сызық.\n\nӘрбір тапсырмада «Тесттерді орындау» түймесін басу арқылы кез келген уақытта орындауға болатын сынақтар бар. Барлық сынақтардан өткен кезде, шешіміңізді жіберу және келесі кодтау тапсырмасына өту сұралады.",
      code: "<h1>Hello world</h1>"
    },
    {
        id: 'lesson2',
        title: "h2 элементі бар тақырып",
        text: `
            Келесі бірнеше сабақта біз HTML5 мысық фото веб-бағдарламасын бөлшектеп құрастырамыз.

            Осы қадамда қосылатын h2 элементі веб-бетке екінші деңгей тақырыбын қосады.

            Бұл элемент браузерге веб-сайтыңыздың құрылымы туралы айтып береді. h1 элементтері көбінесе негізгі тақырыптар үшін пайдаланылады, ал h2 элементтері әдетте ішкі тақырыптар үшін пайдаланылады. Сондай-ақ, тақырыпшалардың әртүрлі деңгейлерін көрсету үшін h3, h4, h5 және h6 элементтері бар.

            "Hello World" h1 элементінің астында екінші HTML элементін жасау үшін "CatPhotoApp" деп жазылған h2 тегін қосыңыз.
        `,
        code: `<h1>Hello World</h1>\n<h2>CatPhotoApp</h2>`
    },
    {
        id: 'lesson3',
        title: "Параграф элементімен хабарлаңыз",
        text: `
            p элементі веб-сайттардағы абзац мәтіні үшін таңдаулы элемент болып табылады. p «абзац» деген сөздің қысқартылған нұсқасы.

            Сіз келесідей абзац элементін жасай аласыз:

            <p>Мен p тегімін!</p>
            h2 элементінің астында p элементін жасаңыз және оған Сәлем параграф мәтінін беріңіз.

            Ескерту: Әдеттегідей, барлық HTML тегтері кіші әріппен жазылады, мысалы, <P></P> емес, <p></p>.
        `,
        code: "<h1>Hello World</h1>\n<h2>CatPhotoApp</h2>\n<p>Hello Paragraph</p>"
    },
    // Add more lessons here
  ];

  const modules = [
    { 
      title: 'Basic HTML and HTML5',
      description: 'HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content. For example, different elements can describe text as a heading, paragraph, or list item. In this course, you\'ll build a cat photo app to learn some of the most common HTML elements — the building blocks of any webpage.',
      lessons: lessons // assuming 'lessons' is available in this scope
    },
    { 
      title: 'Basic HTML and HTML5',
      description: 'HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content. For example, different elements can describe text as a heading, paragraph, or list item. In this course, you\'ll build a cat photo app to learn some of the most common HTML elements — the building blocks of any webpage.',
      lessons: lessons // assuming 'lessons' is available in this scope
    },
    // more modules here...
]

const Module = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCollapsibleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <h1 className="page-header">Courses</h1>
    <div className="center-container">
      {modules.map((module, index) => (
        <Lessons
          key={index}
          title={module.title}
          description={module.description}
          lessons={module.lessons}
        />
      ))}
    </div>
    </div>
  );
  }

const getNextLessonId = (currentLessonId) => {
    const currentIndex = lessons_content.findIndex((lesson) => lesson.id === currentLessonId);
    if (currentIndex !== -1 && currentIndex < lessons.length - 1) {
      return lessons_content[currentIndex + 1].id;
    }
    return ""; // Return null if there is no next lesson
  };   

const Lesson = () => {
    const { lessonId } = useParams(); // "lesson1", "lesson2", etc.
    // Fetch the lesson content based on lessonId
    // Display the content here
    const jsonData = lessons_content.find((lesson) => lesson.id === lessonId);
    const nextLessonId = getNextLessonId(lessonId);

    const [htmlCode, setHtmlCode] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleButtonClick = () => {
    if (htmlCode === jsonData.code) {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="container">
      <div className="section">
        <h2>{jsonData.title}</h2>
        <p>{jsonData.text}</p>
        <button onClick={handleButtonClick}>Run the tests</button>
      </div>

      <div className="section">
        <h2>HTML код секциясы</h2>
        <textarea
          value={htmlCode}
          onChange={handleHtmlCodeChange}
          placeholder="Insert your HTML code here"
        />
      </div>

      <div className="section">
        <h2>HTML кодының нәтижесі</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          <p>You have successfully completed the challenge.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Link to={`/${nextLessonId}`}>
            <Button onClick={handleCloseDialog} color="primary">
              Go to the next challenge
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { Lesson, Module };
