Template.shows.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Plan show",
                icon: "fa-plus",
                route: 'createShow'
            }]);
    },
    songs: function() {
        return Songs.find({});
    },
    selectSong: function(song) {
        Router.go('song', {
            _id: song._id
        });
    }
});
