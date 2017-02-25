var $ = require('jquery-browserify');
var Remarkable = require('remarkable');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  className: 'inner deep prose limiter',

  render: function() {
    this.$el.empty()
      .append((new Remarkable).render(t('about.content')));
    return this;
  }
});
