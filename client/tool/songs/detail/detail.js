Template.song.viewmodel({
    share: ['menu', 'stringFormatter'],
    onRendered: function() {
        this.menuItems([]);
    },
    delete: function(songId) {
        Songs.remove(songId);
        Router.go('songs');
    },
    members: function() {
        return Members.find({}, { sort: { name: -1 } });
    },
    sections: function() {
        if (!this._id) return;
        return SongSections.find({ song: this._id.value });
    },
    addSection: function() {
        if (!this.newSectionName.value) return;
        SongSections.insert({
            name: this.newSectionName.value,
            createdAt: new Date(),
            song: this._id.value
        });
        this.newSectionName('');
        this.showAddSection(false);
    },
    addSectionMember: function(sectionId) {
        console.log('section Id is %O and contacts is %O', sectionId, this.candidates);
    },
    candidates: {},
    removeSection: function(sectionId) {
        SongSections.remove(sectionId);
    },
    showListen: true,
    showSections: true,
    showMemberOptions: function(sectionId) {
        return false
    },
    removeListen: function() {
        Songs.update(this._id.value, {
            $unset: {
                listen: ""
            }
        });
    },
    addListen: function() {
        var listen = this.proposedListen.value;
        if (!listen) return;
        Songs.update(this._id.value, {
            $set: {
                listen: "/mp3s/" + listen + ".mp3"
            }
        });
    }
});
