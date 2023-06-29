import React from 'react';
import './App.css';

function App() {
  const handleCollapsibleToggle = () => {

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
      content.style.display = "none";
      } else {
      content.style.display = "block";
      }
  });
  }
  };
  return (
    <div>
    <h1>Courses</h1>
<h1>Basic HTML and HTML5</h1>
<p>HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content. For example, different elements can describe text as a heading, paragraph, or list item.

In this course, you'll build a cat photo app to learn some of the most common HTML elements — the building blocks of any webpage.</p>
<button type="button" class="collapsible" onClick={handleCollapsibleToggle}>Open Collapsible</button>
<div class="content">
    <ul>
        <li><a href="">Say Hello to HTML Elements</a></li>
        <li><a href="">Headline with the h2 Element</a></li>
        <li><a href="">Inform with the Paragraph Element</a></li>
        <li><a href="">Fill in the Blank with Placeholder Text</a></li>
        <li><a href="">Uncomment HTML</a></li>
        <li><a href="">Say Hello to HTML Elements</a></li>
        <li><a href="">Headline with the h2 Element</a></li>
        <li><a href="">Inform with the Paragraph Element</a></li>
        <li><a href="">Fill in the Blank with Placeholder Text</a></li>
        <li><a href="">Uncomment HTML</a></li>
        <li><a href="">Say Hello to HTML Elements</a></li>
        <li><a href="">Headline with the h2 Element</a></li>
        <li><a href="">Inform with the Paragraph Element</a></li>
        <li><a href="">Fill in the Blank with Placeholder Text</a></li>
        <li><a href="">Uncomment HTML</a></li>
        <li><a href="">Say Hello to HTML Elements</a></li>
        <li><a href="">Headline with the h2 Element</a></li>
        <li><a href="">Inform with the Paragraph Element</a></li>
        <li><a href="">Fill in the Blank with Placeholder Text</a></li>
        <li><a href="">Uncomment HTML</a></li>
        <li><a href="">Say Hello to HTML Elements</a></li>
        <li><a href="">Headline with the h2 Element</a></li>
        <li><a href="">Inform with the Paragraph Element</a></li>
        <li><a href="">Fill in the Blank with Placeholder Text</a></li>
        <li><a href="">Uncomment HTML</a></li>
    </ul>
</div>

    </div>

  );
}

export default App;