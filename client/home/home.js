Template.home.viewmodel({
    share: ['menu'],
    onRendered: function() {
    	this.menuItems([]);
    }
});
Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        menuItems: [],
        processItem: function(item) {
            if (!!item.route) {
                Router.go(item.route);
            } else {
                item.action(item.arguments);
            }
        },
        go: function(route) {
            Router.go(route);
        },
        getMenuItems: function() {
            return this.menuItems.value.array();
        },
        logRow: function(thing) {
            console.log('logging due to click: %O', thing);
        }
    }
});
