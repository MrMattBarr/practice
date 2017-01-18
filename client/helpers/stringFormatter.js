ViewModel.share({
    stringFormatter: {
        readableAttendance: function(attendance) {
            switch (attendance) {
                case "PRESENT":
                    return 'Present';
                case "TARDY":
                    return 'Tardy';
                case "ABSENT":
                    return 'Absent';
            }
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
        },
        songNameFromId: function(songId) {
            var song = Songs.findOne({ _id: songId });
            return song.name;
        },
        memberNameFromId: function(memberId) {
            var member = Members.findOne({ _id: memberId });
            return member.name || "unkown";
        },
    }
});
