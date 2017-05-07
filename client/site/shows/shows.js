Template.siteShows.viewmodel({
  share: 'stringFormatter',
    shows: function() {
        return Shows.find(
            {}, 
            {
              sort: { showTime: 1 }
            });
    },
});