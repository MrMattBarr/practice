Template.siteMembers.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            []);
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
