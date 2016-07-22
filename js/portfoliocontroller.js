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
      id: "yumba",
      image: "images/yumba.png",
      title: "Yumba",
      tagline: "For Tango Dancers on the Go!",
      type: "iOS App",
      tool: "Swift Language in Apple's XCode IDE",
      purpose: "Foodies are lucky to have the mobile Yelp app. Avid tango dancers want to know what's going on in town, but what's currently available online is not viewing-friendly on the go, and events are not easy to filter and search. With Yumba, dancers can find a class, a practice session, a social event, or a festival. Filtering will be a breeze and dancers will be able to save and follow their favorite djs, musicians, teachers and series. Database and user authentication are done by utilizing Firebase SDK for iOS, Google Maps UI is done by implementing Google Maps SDK for iOS, and forward geocoding is done by HTTP requests to Google Maps API.",
      link: "https://cmdrtorefresh.blogspot.com/2016/07/yumba-ios-tango-app.html"
    },
    {
      id: "pandemic",
      image: "images/pandemicbluegraph.png",
      title: "Pandemic",
      tagline: "Play the game without the board!",
      type: "Command-Line Game",
      tool: "Ruby Language",
      purpose: "Travelling usually include waiting for a long time. There are several ways to spend the time. A constructive one includes learning and improvement. The other includes having fun. At the time of writing the game, I played Pandemic, the popular board game a lot, but of course the board is too bulky for a carry-on. By writing the command-line version of the game, I learn to design so that the user can effectively communicate with the game. The result of the project is proven to be a wonderful accompaniment on train-rides.",
      link: "https://github.com/cmdrtorefresh/pandemic"
    },
    {
      id: "webpage",
      image: "images/cmdrsquare.png",
      title: "Cmd + R Webpage",
      tagline: "Where they all merge",
      type: "Personal Website",
      tool: "HTML/CSS, SASS, AngularJS, jQuery",
      purpose: "The purpose of this project is two-fold. I want an exercise to refresh my front end stuffs and I need an actual webpage for my portfolio. Just like the other projects, it's made entirely from scratch. It deepens my understanding of the power and limitations of AngularJS. All artworks are also self-made to avoid any potential troubles.",
      link: "http://cmdrtorefresh.comxa.com"
    }
  ];
});
