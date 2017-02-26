var $ = require('jquery-browserify');
var MarkdownIt = require('markdown-it');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  className: 'inner deep prose limiter',

  render: function() {
    this.$el.empty()
      .append((new MarkdownIt).render(t('about.content')));
    return this;
  }
});
