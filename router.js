Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
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
