Template.song.viewmodel({
    share: ['menu'],
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
