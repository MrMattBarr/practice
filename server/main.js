import { Meteor } from 'meteor/meteor';


Songs = new Mongo.Collection("songs");
Members = new Mongo.Collection("members");
Practices = new Mongo.Collection("practices");
SongPractices = new Mongo.Collection("songPractices");
MemberPractices = new Mongo.Collection("memberPractices");
SongSections = new Mongo.Collection("songSections");
Shows = new Mongo.Collection("shows");
Settings = new Mongo.Collection("settings");
Solos = new Mongo.Collection("solos");
Locations = new Mongo.Collection("locations");

Meteor.startup(() => {
    // code to run on server at startup
});
