Template.song.viewmodel({
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
    delete: function(songId) {
        Songs.remove(songId);
        Router.go('songs');
    },
    members: function() {
        return Members.find({}, { sort: { name: -1 } });
    },
    sections: function() {
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
    },
    removeSection: function(sectionId) {
        console.log('id is this %O', sectionId);
        SongSections.remove(sectionId);
    },
    showListen: true,
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
