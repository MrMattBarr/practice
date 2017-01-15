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
        Songs.insert({
            name: vm.name.value,
            createdAt: new Date()
        });
        Router.go('songs');
    }
});
