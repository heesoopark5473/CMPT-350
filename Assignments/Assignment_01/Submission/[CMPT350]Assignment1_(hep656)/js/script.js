// function LoadFunction(){
//   div = document.getElementById('one');
//   div.style.display = "block";
//
//   var str = "- Web Programming -";
//   document.getElementById('topic').innerHTML = str;
//
//   var des  = "<em>Focuses on the concepts, technologies and tools needed for the development of web-centric applications.</em> <br><br> Special emphasis will be given to <br> <b>client-server programming,</b> <br> <b>scripting,</b> <br> <b>integration of existing application</b> and <br> <b>high-level networking issues,</b> <br> e.g., use of SOAP."
//   var des2 = "<br><br><br> <b>Prerequisite(s): </b> CMPT 280.<br><b>Note: </b>Students with credit for CMPT 353 cannot take this course for credit."
//   var des3 = "<br><br><br> <b>Subject: </b> Computer Science<br><b>Credit Units: </b>3<br><b>Weekly hours: </b>3 Lecture hours and 1.5 Tutorial hours<br><b>College: </b>Arts and Science<br><b>Department: </b>Computer Science"
//   document.getElementById('description').innerHTML = des+des2+des3;
// }

div1 = document.getElementById('one');
div2 = document.getElementById('two');
div3 = document.getElementById('three');
div4 = document.getElementById('four');
div5 = document.getElementById('five');

function HomeFunction(){
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";

  var str = "- Web Programming -";
  document.getElementById('topic').innerHTML = str;

  var des  = "<em>Focuses on the concepts, technologies and tools needed for the development of web-centric applications.</em> <br><br> Special emphasis will be given to <br> <b>client-server programming,</b> <br> <b>scripting,</b> <br> <b>integration of existing application</b> and <br> <b>high-level networking issues,</b> <br> e.g., use of SOAP."
  var des2 = "<br><br><br> <b>Prerequisite(s): </b> CMPT 280.<br><b>Note: </b>Students with credit for CMPT 353 cannot take this course for credit."
  var des3 = "<br><br><br> <b>Subject: </b> Computer Science<br><b>Credit Units: </b>3<br><b>Weekly hours: </b>3 Lecture hours and 1.5 Tutorial hours<br><b>College: </b>Arts and Science<br><b>Department: </b>Computer Science"
  document.getElementById('description').innerHTML = des+des2+des3;
}

function TimeFunction(){
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";

  var str = "- Time & Location -        <br>(click on time to view location)";
  document.getElementById('topic').innerHTML = str;

  var des = "<br><br><br><b>Lectures</b>";
  document.getElementById('lecture').innerHTML = des;

  var des2 = "<br><br><br><b>Tutorial</b>";
  document.getElementById('tutorial').innerHTML = des2;

  var des3 = "<br><br><br><b>Office Hour</b>";
  document.getElementById('officeHour').innerHTML = des3;
}

function ObjFunction(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  div4.style.display = "none";
  div5.style.display = "none";

  var str = "- Objective -";
  document.getElementById('topic').innerHTML = str;

  var obj1 = "<br><br><br><br><li>Studentw will understand HTML, CSS, and Javascipt as the base of the Web development</li><br><br>";
  var obj2 = "<li>Students will become familiar with the back-end (Java servers, NodeJS) and database storage</li><br><br>";
  var obj3 = "<li>Students will become familiar with the Ajax and Front-end Frameworks</li><br><br>";
  var obj4 = "<li>Students will become familiar with key concepts of Web servers and Web services</li><br><br>";
  var obj5 = "<li>Students will be briefly introduced to cloud computing and Web strategies</li><br><br>";
  var obj6 = "<li>Students will be briefly introduced to Web security</li><br><br>";
  var obj7 = "<li>Students will be briefly introdyuced to mobile Web</li><br><br>";
  document.getElementById('courseObjective').innerHTML = obj1+obj2+obj3+obj4+obj5+obj6+obj7;
}

function GradingFunction(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "block";
  div5.style.display = "none";

  var str = "- Grading Scheme -";
  document.getElementById('topic').innerHTML = str;

  var title = "<br><br><br><b>Assignments details and date</b><br><br>";
  var des   = "Each assignment is graded eqaully and assignments three and four will include the bonus part as well<br><br>"
  var obj1  = "<li><b>Assignment 1</b> release date: Jan 17th, <b>Due date: Jan 28th</b></li><br><br>";
  var obj2  = "<li><b>Assignment 2</b> release date: Jan 29th, <b>Due date: Feb 7th</b></li><br><br>";
  var obj3  = "<li><b>Assignment 3</b> release date: Feb 8th, <b>Due date: Feb 24th</b></li><br><br>";
  var obj4  = "<li><b>Assignment 4</b> release date: Feb 26th, <b>Due date: Mar 10th</b></li><br><br>";

  var passCriteria = "<br><br><br><b>Criteria that must be met to Pass</b><br><br>";
  var pcdes = "<li>Student must attend the final examination and students need 15% of the final exam or better on the final exam to pass the course.</li><br><br>"

  var attendCriteria = "<br><br><br><b>Attendance Expectaion</b><br><br>";
  var attds = "<li>Studens are expected to attend all lectures</li><br><br>";

  var finalCriteria = "<br><br><br><b>Final exam Scheduling</b><br><br>";
  var finalds = "<li>The registrar schedules all final examinations, <br>including deferred and supplemental examinations. <br>Students are advised not to make travel arrangements for the exam period<br> until the official exam schedule has bee posted.</li>";


  document.getElementById('assignmentDue').innerHTML = title+des+obj1+obj2+obj3+obj4+passCriteria+pcdes+attendCriteria+attds+finalCriteria+finalds;


}

function AboutFunction(){
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "block";

  var str= "- About -";
  document.getElementById('topic').innerHTML = str;
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
