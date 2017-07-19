Template.practices.viewmodel({
  share: 'stringFormatter',
    practices: function() {
        return Practices.find(
            {}, 
            {
              sort: { time: 1 }
            });
    },
    image: function(practice)
    {
        return this.location(practice).img;

    },
    location: function(practice) {
        return Locations.findOne(practice.location);
    }
});