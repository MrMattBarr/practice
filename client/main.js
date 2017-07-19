import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Songs = new Mongo.Collection("songs");
Members = new Mongo.Collection("members");
Practices = new Mongo.Collection("practices");
SongPractices = new Mongo.Collection("songPractices");
SongSections = new Mongo.Collection("songSections");
MemberPractices = new Mongo.Collection("memberPractices");
Shows = new Mongo.Collection("shows");
Locations = new Mongo.Collection("locations");
Solos = new Mongo.Collection("solos");
Settings = new Mongo.Collection("settings");
