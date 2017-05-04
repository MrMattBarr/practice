Template.practices.viewmodel({
    share: ['menu', 'stringFormatter'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Change Schedule",
                icon: "fa-calendar",
                route: 'schedule'
            }]);
    },
    nextPractice: function() {
        var lpt = new Date();
        var latestPractice = Practices.findOne({}, { sort: { time: -1 } });
        if (latestPractice) {
            lpt = latestPractice.time;
            lpt.setDate(lpt.getDate() + 7);
        }

        return lpt;
    },
    shouldShowNext: function() {
        var today = new Date();
        today.setDate(today.getDate() + 8);
        var next = this.nextPractice();
        return today > this.nextPractice();
    },
    priorPractice: function() {
        var lpt = new Date();
        var latestPractice = Practices.findOne({}, { sort: { time: -1 } });
        if (latestPractice) {
            lpt = latestPractice.time;
            lpt.setDate(lpt.getDate() - 7);
        }
        return lpt;
    },
    schedule: function() {
        return Settings.findOne({ name: 'schedule' });
    },
    createPractice: function(practiceTime) {
        var practiceId = Practices.insert({
            time: practiceTime,
            createdAt: new Date(),
            month: practiceTime.getMonth(),
            date: practiceTime.getDate()
        });
        var members = Members.find({});
        members.forEach(function(member) {
            MemberPractices.insert({
                createdAt: new Date(),
                member: member._id,
                practice: practiceId,
                attendance: "PRESENT"
            });
        });
    },
    deleteSetting: function(setting) {
        Settings.remove(setting._id);
    },
    practices: function() {
        return Practices.find({}, { sort: { time: -1 } });;
    },
    createNewPractice: function() {},
    selectPractice: function(practice) {
        var members = Members.find({});
        members.forEach(function(member) {
            var memberPractice = MemberPractices.findOne({ member: member._id, practice: practice._id });
            if (!memberPractice) {
                MemberPractices.insert({
                    createdAt: new Date(),
                    member: member._id,
                    practice: practice._id,
                    attendance: "PRESENT"
                });
            }
        });
        Router.go('practice', {
            _id: practice._id
        });
    }
});