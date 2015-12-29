'use strict';

var postcss = require('postcss');
var _ = require('underscore');

var mbrem_config = {
  'width': 750
, 'median': 320 / 20
}
module.exports = postcss.plugin('mbrem', function myplugin(options) {
  return function (css) {
    options = options || {};
    mbrem_config = _.extend(mbrem_config, options);
    css.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var value = decl.value,
            desW  = mbrem_config['width'],
            md = mbrem_config['median'];
        decl.value = decl.value.replace(/\d+mm/g, function(str) {
          return (parseFloat(str) * md / desW).toFixed(5) + 'rem';
        });
      });
    });
  }
});