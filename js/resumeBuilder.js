/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var awesomeThought = "I am M and I am AWESOME!!!";
 console.log(awesomeThought);

var funThoughts = awesomeThought.replace("AWESOME", "FUN")
console.log(funThoughts) 

var firstName = "james";
var age = 32;

console.log(firstName);

var email = "mvanorshoven@udacity.com";
var newEmail = email.replace("udacity", "gmail");
console.log(email);
console.log(newEmail);
*/

 var formattedName = HTMLheaderName.replace("%data%", "Martha Van Orshoven");
 var formattedRole= HTMLheaderRole.replace("%data%", "Web Designer"); 


 $("#header").append(formattedName);
 console.log(formattedName);

  $("#header").append(formattedRole);
  console.log(formattedRole);

 
 var bio = {
  "name" : "Martha Van Orshoven",
  "role": "Security Professional",
  "contacts": {
  "email" : "mvanorshoven@gmail.com",
  "mobile" : "408-462-2489",
  "twitter": "memvo"
     },
  "welcomeMessage": "looking for fun in security and programming",
  "skills" :  [
    "Network protocols", "Software engineering", "teaching", "JS"
    ],
  "bioPic": "images/madmen_icon.jpg"  
  
 }
var formattedEmail = HTMLemail.replace("%data%", "mvanorshoven@gmail.com");
$("@media").append(formattedEmail);
console.log(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", "408-462-2489");
$("@media").append(formattedMobile);
console.log(formattedMobile);

var formattedTwitter = HTMLtwitter.replace("%data%", "@memvo");
var formatedLocation = HTMLlocation.replace("%data%", "San Francisco");
var formattedBioPic = HTMLbioPic.replace("%data%", "images/madmen_icon");
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "looking for fun in security and programming");
var formattedSkillsStart = HTMLskillsStart.replace("%data%", "Skills at a Glance:");
var formattedSkills = HTMLskills.replace("%data%", "Network protocols", "Software engineering", "teaching", "JS");

/*var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>'; */



















var work = {};

work.position = "Program Manager";
work.employer = "at&t";
work.years = 10 ;

$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.years);


var education = {
  "schools": [
   {
    "name": "San Francisco State University",
    "city": "San Francisco, CA",
    "degree": "Bachelors of Science",
    "major": ["Finance"]
   }
  ]
,
  "online Courses": [
  {
    "title": "Cyber Security",
    "school": "Champlain College, VT",
    "dates" : 2015,
    "url": "http://www.champlain.edu/"
   }

  ]
}

