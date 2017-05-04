Template.createSong.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Save",
                icon: "fa-save",
                action: this.saveSong,
                arguments: this
            }]);
    },
    saveSong: function(vm) {
        var name = null;
        if (vm.name) {
            name = vm.name.value
        } else {
            name = this.name();
        }
        if (!name) return;
        Songs.insert({
            name: name,
            createdAt: new Date()
        });
        Router.go('songs');
    }
});
