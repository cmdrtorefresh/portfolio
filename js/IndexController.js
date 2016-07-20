// Social Icon Tiles

var app = angular.module('indexApp',[]);

app.controller('indexController', function($scope) {

  // Social Icon Tiles
  $scope.iconlist = [
        {
          image: "images/email.png",
          link: "mailto:cmdrtorefresh@gmail.com?Subject=Hello!",
          left: "0px",
          target: "_self"
        },
        {
          image: "images/blog.png",
          link: "https://cmdrtorefresh.blogspot.com",
          left: "65px",
          target: "_blank"
        },
        {
          image: "images/github.png",
          link: "https://github.com/cmdrtorefresh",
          left: "130px",
          target: "_blank"
        }
  ];

  // Project Tiles
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



app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
