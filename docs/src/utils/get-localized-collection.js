const sortByDisplayOrder = require('./sort-by-display-order.js');
/**
 * Takes a collection and returns it back as a localized object
 *
 * @param {string} the name of the collection
 * @returns {Object} the localized collection
 */
module.exports = (collection, name) => {
  let fr = sortByDisplayOrder(collection.getFilteredByGlob(`./src/fr/${name}/**/*.md`));
  let en = sortByDisplayOrder(collection.getFilteredByGlob(`./src/en/${name}/**/*.md`));


  return {en: en, fr: fr};
}
