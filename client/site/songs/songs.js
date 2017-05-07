Template.siteSongs.viewmodel({
    songs: function() {
        return Songs.find(
            {}, 
            { 
                sort: { name: 1 }
            });
    },
    solos: function(song) {
        return Solos.find({ song: song._id });
    },
    memberFromSolo: function(solo) {
        return Members.findOne(solo.member);
    },
    soloistName: function(solo) {
        return this.memberFromSolo(solo).name;
    }

});
