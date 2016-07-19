var app = angular.module('indexApp',[]);

// app.controller('SocialIconsController', ['$scope', function($scope) {
//   $scope.icons = [
//         {
//           icon: "email",
//           image-url: "../images/email.png",
//           linkto: "mailto:cmdrtorefresh@gmail.com?Subject=Hello!",
//           left: "0px"
//         },
//         {
//           icon: "blog",
//           image-url: "../images/blog.png",
//           linkto: "https://cmdrtorefresh.blogspot.com",
//           left: "65px"
//         },
//         {
//           icon: "github",
//           image-ur: "../images/github.png",
//           linkto: "https://github.com/cmdrtorefresh"
//           left: "130px"
//         }
//   ;]
// }]);

app.controller('ProjectsController', function($scope) {
  $scope.projectlist = [
      {
        image: "images/yumba.png",
        title: "Yumba",
        tagline: "For tangueros on the go!",
        subtitle: "iOS App",
        desc: "Swift Language, Firebase SDK for iOS, Google Maps SDK for iOS, Forward Geocoding with Google Maps API",
        link: "https://www.google.com"
      },
      {
        image: "images/pandemicbluegraph.png",
        title: "Pandemic",
        tagline: "Play it without the board!",
        subtitle: "Command Line Game",
        desc: "Ruby Language, Graph Data Structure",
        link: "https://www.google.com"
      },
      {
        image: "images/cmdrsquare.png",
        title: "This Website",
        tagline: "Also proudly created from scratch!",
        subtitle: "Portfolio Website",
        desc: "HTML, CSS, SASS, AngularJS",
        link: "http://www.cmdrtorefresh.comxa.com"
      }
  ];
});

app.controller('PageTitlesController', ['$scope', function($scope) {
  $scope.pages = [
    {
      title: "Portfolio",
      subtitle: "Good stuffs made from scratch!"
    },
    {
      title: "Skills",
      subtitle: "Good stuffs she's made of"
    },
    {
      title: "Experience",
      subtitle: "Good stuffs she's done"
    },
  ];
}]);
