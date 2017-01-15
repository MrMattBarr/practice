Template.practice.viewmodel({
    share: ['menu'],
    onRendered: function() {
        this.menuItems(
            [{
                label: "Add Song",
                icon: "fa-music",
                action: this.addSong,
                arguments: this
            }, {
                label: "Delete",
                icon: "fa-trash-o",
                action: this.delete,
                arguments: this._id.value
            }]);
    },
    delete: function(practiceId) {
        Practices.remove(practiceId);
        Router.go('practices');
    },
    songs: function() {
        return Songs.find({});
    },
    members: function() {
        return Members.find({});
    },
    readableDate: function(date) {
        if (!date) return "Practice details";
        var month = date.getMonth();
        var rm = 'Unknwown';
        switch (month) {
            case 0:
                rm = "January";
                break;
            case 1:
                rm = "February";
                break;
            case 2:
                rm = "March";
                break;
            case 3:
                rm = "April";
                break;
            case 4:
                rm = "May";
                break;
            case 5:
                rm = "June";
                break;
            case 6:
                rm = "July";
                break;
            case 7:
                rm = "August";
                break;
            case 8:
                rm = "Spetember";
                break;
            case 9:
                rm = "October";
                break;
            case 10:
                rm = "November";
                break;
            case 11:
                rm = "December";
                break;
        }
        return rm + " " + date.getDate() + ", " + (date.getYear() + 1900);
    }
});
