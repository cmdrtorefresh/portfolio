var app = angular.module('portfolioApp',[]);

app.controller('portfolioController', function($scope) {

  $scope.pages = [
    {
      title: "HOME",
      link: "index.html"
    },
    {
      title: "PORTFOLIO",
      link: "portfolio.html"
    },
    {
      title: "WHO I AM",
      link: "bio.html"
    },
    {
      title: "CONTACT ME",
      link: "contact.html"
    }
  ];

  $scope.projects = [
    {
      id: "yoginislife",
      image: "images/yogini.png",
      title: "Yogini's Life",
      tagline: "Journaling Being Present!",
      type: "Personal Blog / Website",
      tool: "Ruby Language and Ruby on Rails",
      purpose: "If you're a yogini who codes, or a coder who yogs, what do you do when your 200 Hr Yoga Teacher Training requires you to journal your classes? Yes, Ruby on Rails with plenty of personal touch. Starting it as a requirement, I am excited to record even more yoga adventures later on. Written in Ruby language with several awesome gems, using PostgreSQL for database, deployed on Heroku, the mobile-friendly blog is a happy place where codes and yoga reside together in harmony and oneness. Namaste.",
      link: "http://www.yoginis.life"
    },
    {
      id: "yumba",
      image: "images/yumba.png",
      title: "Yumba",
      tagline: "For Tango Dancers on the Go!",
      type: "iOS App",
      tool: "Swift Language in Apple's XCode IDE",
      purpose: "Foodies are lucky to have the mobile Yelp app. Avid tango dancers want to know what's going on in town, but current resource is not viewing-friendly on the go, and events are not easy to filter and search. With Yumba, dancers can find a class, a practice session, a social event, or a festival. Filtering is a breeze and dancers are able to save and follow their favorite djs, musicians, teachers and series. Database and user authentication utilize Firebase SDK for iOS, Google Maps UI lends to Google Maps SDK for iOS, and forward geocoding uses HTTP requests to Google Maps API. Everything else was written from scratch.",
      link: "https://cmdrtorefresh.blogspot.com/2016/07/yumba-ios-tango-app.html"
    },
    {
      id: "pandemic",
      image: "images/pandemicbluegraph.png",
      title: "Pandemic",
      tagline: "Play the game without the board!",
      type: "Command-Line Game",
      tool: "Ruby Language",
      purpose: "Travelling usually includes waiting. There are several ways to spend the time. A constructive one includes fun and learning. At the time of writing the game, I played Pandemic, the popular board game a lot, but of course the board was too bulky for a carry-on. I could pay for the available app, or I could sharpen my programming. By writing the command-line version of the game, I learned to design so that the users can effectively communicate with the game. The result of the project is proven to be a wonderful accompaniment on train-rides.",
      link: "https://github.com/cmdrtorefresh/pandemic"
    },
    {
      id: "webpage",
      image: "images/cmdrsquare.png",
      title: "Cmd + R Webpage",
      tagline: "Where they all merge",
      type: "Personal Website",
      tool: "HTML/CSS, SASS, AngularJS, jQuery",
      purpose: "The purpose of this project is two-fold. I want an exercise to refresh my front end stuffs and I need an actual webpage for my portfolio. Just like the other projects, it's made entirely from scratch. Yes, there are services like Weebly, WordPress, etc, but starting from blank deepens my understanding of the power and limitations of tools like AngularJS. Artworks were also self-made to avoid any potential troubles.",
      link: "http://cmdrtorefresh.comxa.com"
    }
  ];
});
