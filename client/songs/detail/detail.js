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
    }
});
