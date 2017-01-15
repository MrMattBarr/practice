Template.practices.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Plan Next Practice",
                icon: "fa-plus",
                route: 'plan'
            }, {
                label: "Change Schedule",
                icon: "fa-calendar",
                route: 'schedule'
            }]);
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
