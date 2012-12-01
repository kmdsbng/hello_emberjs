var App = Ember.Application.create();

App.careers = ['Newbie', 'Padawan', 'Master', 'Freak'];

App.applicationController = Ember.Object.create({
});
App.ApplicationView = Ember.View.extend({
  name: '',
  join: false,
  career: '',

  tweetBody: function() {
    var str =
      'Hi, I am ' + this.get('name') + '. ' +
      'I am ' + this.get('career') + ' of Ember.js. ';
    if (this.get('join')) {
      str += 'I join Ember.js Advent Calendar 2012';
    }
    return str;
  }.property('name', 'career', 'join'),

  tweetBodyChanged: function() {
    createTwitterButton(this.get('tweetBody'));
  }.observes('tweetBody')
});

App.initialize();

function createTwitterButton(str) {
  $("#tweetButtonWrapper").html('<a href="https://twitter.com/share" class="twitter-share-button" data-via="kmdsbng" data-text="' + str + '" data-lang="ja" data-size="large">ツイート</a>')
  twttr.widgets.load()
}

