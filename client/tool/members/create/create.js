Template.createMember.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Save",
                icon: "fa-save",
                action: this.saveMember,
                arguments: this
            }]);
    },
    saveMember: function(vm) {
        var name = null;
        if (vm.name) {
            name = vm.name.value
        } else {
            name = this.name();
        }
        if (!name) return;
        Members.insert({
            name: name,
            createdAt: new Date()
        });
        Router.go('members');
    }
});
