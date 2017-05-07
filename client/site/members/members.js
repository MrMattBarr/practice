Template.siteMembers.viewmodel({
    members: function() {
        return Members.find(
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
    songFromSolo: function(solo) {
        return Songs.findOne(solo.song);
    },
    songName: function(solo) {
        return this.songFromSolo(solo).name;
    }
});
