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
        var practice = Practices.findOne({ id_: memberPractice.practice });
        console.log('attempting delete of %O for practice %O', memberPractice, practice);
        if (!practice) MemberPractices.remove(memberPractice._id);
    },
    absents: function() {
        if (!this._id) return null;
        return MemberPractices.find({ member: this._id.value, attendance: 'ABSENT' });
    }
});
