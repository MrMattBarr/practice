Template.siteMembers.viewmodel({
    members: function() {
        return Members.find(
            {}, 
            { 
                sort: { name: 1 }
            });
    },
    songs: function() {
        return Songs.find(
            {}, 
            { 
                sort: { name: 1 }
            });
    },
    selectedMember: null,
    noSelectedMember: function() {
        return !this.selectedMember.value;
    },
    selectMember: function(member) {
        this.selectedMember(member);
    },
    solos: function(member) {
        return Solos.find({ member: member._id });
    },
    anySolos: function(member) {
        return !!Solos.findOne({ member: member._id });
    },
    songFromSolo: function(solo) {
        return Songs.findOne(solo.song);
    },
    songName: function(solo) {
        return this.songFromSolo(solo).name;
    },
    isAdmin: false,
    addRole: function(songId,role){
        Solos.insert({
            _id: new Mongo.ObjectID(),
            createdAt: new Date(),
            role: role,
            member: this.selectedMember.value._id,
            song: new Mongo.ObjectID(songId)
        });
    }
});
