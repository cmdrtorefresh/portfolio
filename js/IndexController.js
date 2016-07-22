var app = angular.module('indexApp',[]);

app.controller('indexController', function($scope) {

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

  // Social Icon Tiles
  $scope.iconlist = [
        {
          title: "email",
          address: "cmdrtorefresh@gmail.com",
          image: "images/email.png",
          link: "mailto:cmdrtorefresh@gmail.com?Subject=Hello!",
          target: "_self"
        },
        {
          title: "blog",
          address: "https://cmdrtorefresh.blogspot.com",
          image: "images/blog.png",
          link: "https://cmdrtorefresh.blogspot.com",
          target: "_blank"
        },
        {
          title: "github",
          address: "https://github.com/cmdrtorefresh",
          image: "images/github.png",
          link: "https://github.com/cmdrtorefresh",
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
        link: "portfolio.html#yumba",
        buttontext: "LEARN MORE"
      },
      {
        image: "images/pandemicbluegraph.png",
        title: "Pandemic",
        tagline: "Play it without the board!",
        subtitle: "Command Line Game",
        desc: "Ruby Language, Graph Data Structure",
        link: "portfolio.html#pandemic",
        buttontext: "LEARN MORE"
      },
      {
        image: "images/cmdrsquare.png",
        title: "This Website",
        tagline: "Also proudly created from scratch!",
        subtitle: "Portfolio Website",
        desc: "HTML, CSS, SASS, AngularJS",
        link: "#welcomepage",
        buttontext: "GO TO THE TOP"
      }
  ];

  $scope.skilllist = [
    {
      subject: "Computer Language",
      items: ["Ruby", "Swift", "Python", "JavaScript"]
    },
    {
      subject: "Front End",
      items: ["HTML / CSS", "SASS", "AngularJS", "jQuery"]
    },
    {
      subject: "Database",
      items: ["PostgreSQL(SQL)","Firebase"]
    },
    {
      subject: "SDK & IDE",
      items: ["Firebase SDK", "GoogleMaps SDK", "XCode IDE"]
    },
    {
      subject: "Human Language",
      items: ["English","Indonesian"]
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
