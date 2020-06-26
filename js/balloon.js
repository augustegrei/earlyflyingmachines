$(document).ready(function(){
      var theYear = [
        {
          "name":"4_June",
          "who": "Mongolfier bros",
          "passengers": "Animals",
          "where": "Annonay",
          "duration": "XXX"
        },
        {
          "name":"27_August",
          "who": "prof Charles & Robert bros",
          "passengers": "Unmanned",
          "where": "Champ de Mars",
          "duration": "45mins"
        },
        {
          "name":"19_October",
          "who": "Mongolfier bros",
          "passengers": "Dr. Rozier & Mr. Réveillon",
          "where": "Paris",
          "duration": "25mins"
        },
        {
          "name":"21_November",
          "who": "Mongolfier bros",
          "passengers": "Mr. Réveillon & Mr. d'Arlandes",
          "where": "Chateau de la Muette",
          "duration": "25mins"
        },
        {
          "name":"1_December",
          "who": "prof Charles & Robert bros",
          "passengers": "prof Charles & Robert bros",
          "where": "Paris",
          "duration": "2h 5mins"
        },
        {
          "name":"1863",
          "who": "Gustave de Ponton d'Amécourt",
          "power": "Steam",
          "failfly": "Failed",
          "duration": "Failed"
        },
        {
          "name":"1874",
          "who": "Achenbach",
          "power": "XXX",
          "failfly": "Failed",
          "duration": "Failed"
        },
        {
          "name":"1877",
          "who": "Forlanini",
          "power": "Steam",
          "failfly": "Flew",
          "duration": "20s"
        },
        {
          "name":"1878",
          "who": "Castel",
          "power": "XXX",
          "failfly": "Failed",
          "duration": "Failed"
        },
        {
          "name":"1879",
          "who": "Dandrieux",
          "power": "Rubber",
          "failfly": "Flew",
          "duration": "XXX"
        },
      ];

      $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
      });

      $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in theYear){
          if(theYear[item].name == current_item){
            console.log(theYear[item]);

            var container = $('.item-stats');
            container.find('.who').html(theYear[item].who);
            container.find('.passengers').html(theYear[item].passengers);
            container.find('.where').html(theYear[item].where);
            container.find('.duration').html(theYear[item].duration);
            container.find('.power').html(theYear[item].power);
            container.find('.failfly').html(theYear[item].failfly);
          }
        }
      });
});
