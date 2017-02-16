Template.member.viewmodel({
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
    delete: function(memberId) {
        Members.remove(memberId);
        Router.go('members');
    },
    showAbsents: true,
    showTardies: true,
    tardies: function() {
        if (!this._id) return null;
        return MemberPractices.find({ member: this._id.value, attendance: 'TARDY' });
    },
    absents: function() {
        if (!this._id) return null;
        return MemberPractices.find({ member: this._id.value, attendance: 'ABSENT' });
    }
});
