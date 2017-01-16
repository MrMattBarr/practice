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
    members: function() {
        return Members.find({});
    }
});
