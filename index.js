const browseEventsLink = document.querySelector('.navbar-nav .nav-link[href="Map.html"]');
const createEventLink = document.querySelector('.navbar-nav .nav-link[href="reg.html"]');
const contactsLink = document.querySelector('.navbar-nav .nav-link[href="contacts.html"]');

browseEventsLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  window.location.href = 'Map.html';
});

createEventLink.addEventListener('click', function(event) {
  event.preventDefault();

  window.location.href = 'reg.html';
});

contactsLink.addEventListener('click', function(event) {
  event.preventDefault();

  window.location.href = 'contacts.html';
});

$(document).ready(function() {
    var events = [
      {
        image: "concert.jpg",
        title: "Zidane comes with a concert!",
        category: "Concert",
        date: "May 12, 2023",
        link: "reg.html"
      },
      {
        image: "football.jpg",
        title: "Astana - Jetysu match",
        category: "Football",
        date: "May 19, 2023",
        link: "reg.html"
      },
      {
        image: "play.jpg",
        title: "Master and Margarita play",
        category: "Theatre",
        date: "May 20, 2023",
        link: "reg.html"
      },
      {
        image: "lotr.jpg",
        title: "Lord Of The Rings: 20 years anniversaty",
        category: "Cinema",
        date: "June 5, 2023",
        link: "reg.html"
      },
      {
        image: "AI.jpg",
        title: "Scientific conference: What future does AI have?",
        category: "Meetup",
        date: "June 10, 2023",
        link: "reg.html"
      },
      {
        image: "mike.jpg",
        title: "Mike Tyson make his debut!",
        category: "Box",
        date: "July 26, 2023",
        link: "reg.html"
      }
    ];
  
    var eventsContainer = $("#events-container");
  
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
  
      var card = $("<div>").addClass("col-sm-12 col-md-6 col-lg-4 mb-4");
      var cardInner = $("<div>").addClass("card text-white card-has-bg click-col").css("background-image", "url('" + event.image + "')");
      var cardOverlay = $("<div>").addClass("card-img-overlay d-flex flex-column");
      var cardBody = $("<div>").addClass("card-body");
      var cardMeta = $("<small>").addClass("card-meta mb-2").text(event.category);
      var cardTitle = $("<h4>").addClass("card-title mt-0").html("<a class='text-white' href='" + event.link + "'>" + event.title + "</a>");
      var cardDate = $("<small>").html("<i class='far fa-clock'></i>" + event.date);
  
      cardBody.append(cardMeta, cardTitle, cardDate);
      cardOverlay.append(cardBody);
      cardInner.append(cardOverlay);
      card.append(cardInner);
      eventsContainer.append(card);
    }
  });
  