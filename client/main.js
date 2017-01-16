import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Songs = new Mongo.Collection("songs");
Members = new Mongo.Collection("members");
Practices = new Mongo.Collection("practices");
SongPractices = new Mongo.Collection("songPractices");
Shows = new Mongo.Collection("shows");
Settings = new Mongo.Collection("settings");
