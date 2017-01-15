import { Meteor } from 'meteor/meteor';

Songs = new Mongo.Collection("songs");
Members = new Mongo.Collection("members");
Practices = new Mongo.Collection("practices");
Shows = new Mongo.Collection("shows");
Settings = new Mongo.Collection("settings");

Meteor.startup(() => {
    // code to run on server at startup
});
