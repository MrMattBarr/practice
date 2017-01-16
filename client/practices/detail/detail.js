Template.practice.viewmodel({
    share: ['menu', 'stringFormatter'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Delete",
                icon: "fa-trash-o",
                action: this.delete,
                arguments: this._id.value
            }]);
    },
    delete: function(practiceId) {
        Practices.remove(practiceId);
        Router.go('practices');
    },
    songs: function() {
        return Songs.find({});
    },
    songIsInPractice(songId) {
        return !!SongPractices.findOne({ songId: songId, practice: this._id.value });
    },
    songNameFromId: function(songId) {
        var song = Songs.findOne({ _id: songId });
        return song.name;
    },
    songsInPractice: function() {
        return SongPractices.find({ practice: this._id.value });
    },
    removeSongPractice: function(songPractice) {
        SongPractices.remove(songPractice._id);
    },
    addSongToPractice: function(song) {
        console.log('hi');
        SongPractices.insert({
            createdAt: new Date(),
            songId: song._id,
            practice: this._id.value
        });
        this.showOtherSongs(false);
    },
    members: function() {
        return Members.find({});
    }
});
