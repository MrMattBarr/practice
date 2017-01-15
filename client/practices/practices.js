Template.practices.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Plan Next Practice",
                icon: "fa-plus",
                action: this.createNextPractice,
                arguments: this
            }, {
                label: "Change Schedule",
                icon: "fa-calendar",
                route: 'schedule'
            }]);
        this.schedule(Settings.findOne({ name: 'schedule' }));
        if (!this.schedule.value) {
            var vm = this;
            setTimeout(function() {
                vm.schedule(Settings.findOne({ name: 'schedule' }));
                if (!vm.schedule.value) {
                    Settings.insert({
                        name: 'schedule',
                        createdAt: new Date(),
                        day: 2,
                        hour: 18,
                        minute: 30
                    });
                    vm.schedule(Settings.findOne({ name: 'schedule' }));
                }
            }, 100);
        }
    },
    schedule: null,
    settings: function() {
        return Settings.find({});
    },
    nextPracticeExists: function() {
        return false;
    },
    createNextPractice: function(vm) {
        var schedule = vm.schedule.value;
        var d = new Date();
        var DAYS_IN_WEEK = 7;
        var day = schedule.day;
        d.setDate(d.getDate() + (day + DAYS_IN_WEEK - d.getDay()) % DAYS_IN_WEEK);
        d.setHours(schedule.hour);
        d.setMinutes(schedule.minute);
        Practices.insert({
            time: d,
            createdAt: new Date(),
            month: d.getMonth(),
            date: d.getDate()
        });
        console.log('d is this, %O', d);
    },
    deleteSetting: function(setting) {
        Settings.remove(setting._id);
    },
    practices: function() {
        return Practices.find({});
    },
    createNewPractice: function() {},
    selectPractice: function(practice) {
        Router.go('practice', {
            _id: practice._id
        });
    }
});
