const getLocalizedCollection = require('./src/utils/get-localized-collection.js');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');


module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/img/');


  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // date filter (localized)
  config.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  config.addNunjucksTag("trans", function(nunjucksEngine) {
    return new function() {
      this.tags = ["trans"];

      this.parse = function(parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);

        return new nodes.CallExtensionAsync(this, "run", args);
      };

      this.run = function(context, string, callback) {
        let ret = new nunjucksEngine.runtime.SafeString(string);
        callback(null, ret);
      };
    }();
  });

  config.addCollection("section", function (collection) {
    let en = sortByDisplayOrder(collection.getFilteredByGlob(`./src/en/*/index.md`));
    let fr = sortByDisplayOrder(collection.getFilteredByGlob(`./src/fr/*/index.md`));

    return {en: en, fr: fr}
  });

  config.addCollection("app", function (collection) {
    return getLocalizedCollection(collection, "app");
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
