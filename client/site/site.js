Template.site.viewmodel({
    share: ['menu'],
    onRendered: function() {
      console.log('this.go: %O', this.go)
      this.menuItems([]);
      this.go('site.members')
    }
});