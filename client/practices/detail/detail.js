Template.practice.viewmodel({
    share: ['menu', 'stringFormatter'],
    onRendered: function() {
        var lockButton = {
            label: "Lock Practice",
            icon: "fa-lock",
            action: this.lockPractice,
            arguments: this
        };
        var items = [];
        if (!!this._id && (!this.locked || !this.locked.value)) { items.push(lockButton); }
        this.menuItems(items);
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
        if (!this._id) return null;
        return !!SongPractices.findOne({ songId: songId, practice: this._id.value });
    },
    songsInPractice: function() {
        if (!this._id) return null;
        return SongPractices.find({ practice: this._id.value });
    },
    membersInPractice: function() {
        if (!this._id) return null;
        return MemberPractices.find({ practice: this._id.value });
    },
    removeSongPractice: function(songPractice) {
        SongPractices.remove(songPractice._id);
    },
    lockPractice: function(vm) {
        console.log('vm is this %O', vm, vm._id.value);
        Practices.update(vm._id.value, {
            $set: {
                locked: true
            }
        });
        vm.menuItems([]);
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
        MemberPractices.update(memberPractice._id, {
            $set: {
                attendance: newAttendance
            }
        });
    },
    addSongToPractice: function(song) {
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
