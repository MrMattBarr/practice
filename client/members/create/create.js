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
        Members.insert({
            name: vm.name.value,
            createdAt: new Date()
        });
        Router.go('members');
    }
});
