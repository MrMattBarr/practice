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
    attemptDeleteMemberPractice: function(memberPractice) {
        var practice = Practices.findOne({ id_: this.practice });
        console.log('fafafa', practice);
        if (!practice) MemberPractices.remove(memberPractice._id);
    },
    absents: function() {
        if (!this._id) return null;
        return MemberPractices.find({ member: this._id.value, attendance: 'ABSENT' });
    }
});
