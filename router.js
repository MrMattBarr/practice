Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('site', {
        path: '/site'
    });
    this.route('home', {
        path: '/'
    });
    this.route('songs', {
        path: '/songs'
    });
    this.route('practices', {
        path: '/practices'
    });
    this.route('shows', {
        path: '/shows'
    });
    this.route('members', {
        path: '/members'
    });
    this.route('siteMembers', {
        path: '/site/members'
    });
    this.route('createMember', {
        path: '/create/member'
    });

    this.route('createSong', {
        path: '/create/song'
    });

    this.route('/members/:_id', {
        name: 'member',
        template: 'member',
        data: function() {
            var member = Members.findOne({
                _id: this.params._id
            });
            return member;
        }
    });

    this.route('/practices/:_id', {
        name: 'practice',
        template: 'practice',
        data: function() {
            var practice = Practices.findOne({
                _id: this.params._id
            });
            return practice;
        }
    });

    this.route('/songs/:_id', {
        name: 'song',
        template: 'song',
        data: function() {
            var song = Songs.findOne({
                _id: this.params._id
            });
            return song;
        }
    });
});
