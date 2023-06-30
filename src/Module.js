import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Lessons from './Lessons';

const lessons = [
    { title: 'HTML элементтеріне сәлем айтыңыз', path: '/lesson1'},
    { title: 'h2 элементі бар тақырып', path: '/lesson2' },
    { title: 'Параграф элементімен хабарлаңыз', path: '/lesson3'},
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
      title: 'Негізгі HTML және HTML5',
      description: 'HTML-бұл браузердегі веб-беттің құрылымын сипаттау үшін арнайы синтаксисті немесе белгіні қолданатын белгілеу тілі. HTML элементтерінде әдетте мазмұнды қоршап, мағынасын беретін ашу және жабу тегтері болады. Мысалы, әртүрлі элементтер мәтінді тақырып, абзац немесе тізім элементі ретінде сипаттай алады. Бұл курста сіз кез—келген веб - беттің құрылыс блоктары болып табылатын ең көп таралған HTML элементтерін үйрену үшін мысықтардың фотосуреттері қосымшасын жасайсыз.',
      lessons: lessons // assuming 'lessons' is available in this scope
    }
    // more modules here...
]

const Module = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapsibleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <h1 className="page-header">Курстар</h1>
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
  const { lessonId } = useParams(); 
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
      const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
      if (lessonIndex !== -1) {
        lessons[lessonIndex].solved = true;
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    // Update localStorage
    let completedLessons = localStorage.getItem('completedLessons');
    if (completedLessons) {
      completedLessons = JSON.parse(completedLessons);
      if (!completedLessons.includes(`/${lessonId}`)) {
        completedLessons.push(`/${lessonId}`);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
      }
    } else {
      localStorage.setItem('completedLessons', JSON.stringify([`/${lessonId}`]));
    }
  };

  return (
<div className="container">
      <div className="section">
        <div className="section title-section">
          <h2>{jsonData.title}</h2>
        </div>
        <p class="parcontainer">{jsonData.text}</p>
        <button onClick={handleButtonClick}>Тестілеу</button>
      </div>

      <div className="section">
        <div className="section title-section">
          <h2>HTML код секциясы</h2>
        </div>
        <br></br>
        <textarea
          value={htmlCode}
          onChange={handleHtmlCodeChange}
          placeholder="Insert your HTML code here"
        />
      </div>

      <div className="section">
        <div className="section title-section">
          <h2>HTML кодының нәтижесі</h2>
        </div>
        <br></br>
        <div className="section result-section">
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
      </div>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Құттықтаймыз!</DialogTitle>
        <DialogContent>
          <p>Сіз тапсырманы дұрыс орындадыңыз!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Жабу
          </Button>
          <Link to={`/${nextLessonId}`}>
            <Button onClick={handleCloseDialog} color="primary">
              Келесі тапсырмаға өту
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { Lesson, Module };
