'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _cascadeDelete = require('./cascade-delete');

var _cascadeDelete2 = _interopRequireDefault(_cascadeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _util.deprecate)(function (app) {
  return app.loopback.modelBuilder.mixins.define('CascadeDelete', _cascadeDelete2.default);
}, 'DEPRECATED: Use mixinSources, see https://github.com/rocknrolla777/loopback-cascade-delete-mixin#mixinsources');
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsImxvb3BiYWNrIiwibW9kZWxCdWlsZGVyIiwibWl4aW5zIiwiZGVmaW5lIiwiQ2FzY2FkZURlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7O0FBQ0E7Ozs7OztrQkFFZSxxQkFDYjtBQUFBLFNBQ0VBLElBQUlDLFFBQUosQ0FBYUMsWUFBYixDQUEwQkMsTUFBMUIsQ0FBaUNDLE1BQWpDLENBQXdDLGVBQXhDLEVBQXlEQyx1QkFBekQsQ0FERjtBQUFBLENBRGEsRUFHYiwrR0FIYSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IENhc2NhZGVEZWxldGUgZnJvbSAnLi9jYXNjYWRlLWRlbGV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcHJlY2F0ZShcbiAgYXBwID0+XG4gICAgYXBwLmxvb3BiYWNrLm1vZGVsQnVpbGRlci5taXhpbnMuZGVmaW5lKCdDYXNjYWRlRGVsZXRlJywgQ2FzY2FkZURlbGV0ZSksXG4gICdERVBSRUNBVEVEOiBVc2UgbWl4aW5Tb3VyY2VzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JvY2tucm9sbGE3NzcvbG9vcGJhY2stY2FzY2FkZS1kZWxldGUtbWl4aW4jbWl4aW5zb3VyY2VzJyxcbik7XG4iXX0=
