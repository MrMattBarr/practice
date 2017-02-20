Template.menu.viewmodel({
    share: 'menu'
})

ViewModel.share({
    menu: {
        menuItems: [],
        getMenuItems: function() {
            return this.menuItems.value.array();
        },
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
        logRow: function(thing) {
            console.log('logging due to click: %O', thing);
        }
    }
});
