Template.songs.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "New song",
                icon: "fa-plus",
                route: 'createSong'
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
