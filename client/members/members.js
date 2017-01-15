Template.members.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "New member",
                icon: "fa-plus",
                route: 'createMember'
            }]);
    },
    members: function() {
        return Members.find({});
    },
    selectMember: function(member) {
        Router.go('member', {
            _id: member._id
        });
    }
});
