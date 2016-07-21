var app = angular.module('portfolioApp',[]);

app.controller('portfolioController', function($scope) {
  $scope.projects = [
    {
      image: "images/yumba.png",
      title: "Yumba",
      tagline: "For Tango Dancers on the Go!",
      type: "iOS App",
      tool: "Swift Language in Apple's XCode IDE",
      purpose: "Foodies are lucky for mobile Yelp app. Avid tango dancers want to know what's going on in town when they want / have the chance to dance. They can be looking for a class, a practice session, a social event, or a festival, but currently available online resource is not viewing-friendly on the go. Events are not as easy to filter and search. I created this app to address this problem. Not only that, dancers will be able to save and follow their favorite djs, musicians, teachers and series. Database and user authentication are done by utilizing Firebase SDK for iOS, Google Maps UI is done by implementing Google Maps SDK for iOS, and forward geocoding is done by HTTP requests to Google Maps API.",
      link: "https://cmdrtorefresh.blogspot.com/2016/07/yumba-ios-tango-app.html"
    },
    {
      image: "images/pandemicbluegraph.png",
      title: "Pandemic",
      tagline: "Play the game without the board!",
      type: "Command-Line Game",
      tool: "Ruby Language",
      purpose: "Travelling can mean waiting for a long time. There are several ways to spend this time. One includes learning and improvement. The other includes having fun. At the time, I played Pandemic, the popular board game a lot, but of course the board is too bulky for a carry-on. By writing the command-line version of the game, I learn how to organize my objects, and still have fun. The result of the project is a wonderful accompaniment in train-rides.",
      link: "https://github.com/cmdrtorefresh/pandemic"
    },
    {
      image: "images/cmdrsquare.png",
      title: "Cmd + R Webpage",
      tagline: "Where they all merge",
      type: "A Portfolio Website",
      tool: "HTML/CSS, SASS, AngularJS",
      purpose: "The purpose is two-fold. I want an exercise to refresh my front end stuffs and I need an actual webpage for my portfolio. Just like the other projects, it's made entirely from scratch. It deepens my understanding of the power and limitations of AngularJS. All artworks are also self-made to avoid any troubles.",
      link: "http://cmdrtorefresh.comxa.com"
    }
  ];
});