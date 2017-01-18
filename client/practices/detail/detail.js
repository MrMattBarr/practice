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
    showSongs: true,
    showMembers: false,
    delete: function(practiceId) {
        Practices.remove(practiceId);
        Router.go('practices');
    },
    songs: function() {
        return Songs.find({});
    },
    songIsInPractice(songId) {
        return !!SongPractices.findOne({ songId: songId, practice: this._id.value });
    },
    songsInPractice: function() {
        return SongPractices.find({ practice: this._id.value });
    },
    membersInPractice: function() {
        return MemberPractices.find({ practice: this._id.value });
    },
    createMembersInPractice: function() {
        var members = Members.find({});
        var vm = this;
        members.forEach(function(member) {
            MemberPractices.insert({
                createdAt: new Date(),
                member: member._id,
                practice: vm._id.value,
                attendance: "PRESENT"
            });
        });
    },
    removeSongPractice: function(songPractice) {
        SongPractices.remove(songPractice._id);
    },
    classFromAttendance: function(attendance) {
        switch (attendance) {
            case "PRESENT":
                return "present";
            case "ABSENT":
                return "absent";
            case "TARDY":
                return "tardy";
            default:
                return '';
        }
    },
    cycleAttendanceStatus: function(memberPractice) {
        var newAttendance = "PRESENT";
        switch (memberPractice.attendance) {
            case "PRESENT":
                newAttendance = "ABSENT";
                break;
            case "ABSENT":
                newAttendance = "TARDY";
                break;
        }
        console.log('memberPractice is %O', memberPractice, newAttendance);
        MemberPractices.update(memberPractice._id, {
            $set: {
                attendance: newAttendance
            }
        });
    },
    addSongToPractice: function(song) {
        console.log('hi');
        SongPractices.insert({
            createdAt: new Date(),
            songId: song._id,
            practice: this._id.value
        });
        this.showOtherSongs(false);
    },
    members: function() {
        return Members.find({});
    }
});
