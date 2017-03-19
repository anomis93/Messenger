(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component
		var _this = _possibleConstructorReturn(this, (SearchableTable.__proto__ || Object.getPrototypeOf(SearchableTable)).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its 
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNNQTs7Ozs7Ozs7OzsrZUFOQTs7Ozs7O0lBUXFCLGU7OztBQUNwQiw0QkFBYztBQUFBOztBQUViO0FBRmE7O0FBR1AsUUFBSyxLQUFMLEdBQWEsRUFBQyxZQUFZLEVBQWIsRUFBYjtBQUhPO0FBSVY7Ozs7a0NBQ2UsVSxFQUFZO0FBQzNCO0FBQ0E7QUFDRyxRQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksVUFBYixFQUFkO0FBQ0g7OzsyQkFDSTtBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msa0NBQUMsU0FBRDtBQUNDLGlCQUFZLEtBQUssS0FBTCxDQUFXLFVBRHhCO0FBRWdCLGtCQUFhLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQjtBQUY3QixNQUREO0FBS0Msa0NBQUMsS0FBRDtBQUNDLFdBQU0sS0FBSyxLQUFMLENBQVcsSUFEbEI7QUFFQyxpQkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ4QjtBQUxELElBREQ7QUFZQTs7OztFQXhCMkMsZ0JBQU0sUzs7a0JBQTlCLGU7O0lBMkJmLFM7Ozs7Ozs7Ozs7O2lDQUNVO0FBQ2Q7QUFDTSxRQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0M7QUFDRyxRQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBRjlCO0FBSUg7OzsyQkFDSTtBQUNQLFVBQ1U7QUFBQTtBQUFBO0FBQ0k7QUFDQyxXQUFLLE1BRE47QUFFQyxrQkFBWSwyQkFGYjtBQUdDLFVBQUksaUJBSEw7QUFJQyxZQUFRLEtBQUssS0FBTCxDQUFXLFVBSnBCO0FBS0MsZUFBVyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQURKLElBRFY7QUFXQTs7OztFQXBCc0IsZ0JBQU0sUzs7SUF1QnhCLEs7Ozs7Ozs7Ozs7OzJCQUNHO0FBQ1AsT0FBSSxXQUFXLEVBQWY7QUFDQSxPQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBdEI7QUFDQSxRQUFLLE9BQUwsQ0FBYSxVQUFTLE9BQVQsRUFBaUI7QUFDN0IsUUFBSSxRQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLEtBQUssS0FBTCxDQUFXLFVBQWhDLE1BQWdELENBQUMsQ0FBckQsRUFBd0Q7QUFDdkQ7QUFDQTtBQUNELGFBQVMsSUFBVCxDQUFjLDhCQUFDLE9BQUQsSUFBUyxLQUFLLFFBQVEsSUFBdEIsRUFBNEIsTUFBTSxPQUFsQyxHQUFkO0FBQ0EsSUFMWSxDQUtYLElBTFcsQ0FLTixJQUxNLENBQWI7QUFNQSxVQUNDO0FBQUE7QUFBQTtBQUFNO0FBQU4sSUFERDtBQUdBOzs7O0VBYmtCLGdCQUFNLFM7O0lBZ0JwQixPOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLFVBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUksVUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFwQjtBQUFBO0FBQTZCLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0M7QUFBQTtBQUFBO0FBREQsSUFERDtBQUtBOzs7O0VBUG9CLGdCQUFNLFM7Ozs7O0FDckU1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBO0FBVkE7Ozs7O0FBV0EsbUJBQVMsTUFBVCxDQUFpQiwyREFBaUIsZ0JBQWpCLEdBQWpCLEVBQWlELFNBQVMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBakQ7Ozs7Ozs7O0FDWE8sSUFBTSxzQkFBTyxDQUNsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEa0IsRUFFbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsU0FBUyxJQUF0RCxFQUE0RCxNQUFNLFVBQWxFLEVBRmtCLEVBR2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhrQixFQUlsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUprQixFQUtsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsS0FBckQsRUFBNEQsTUFBTSxVQUFsRSxFQUxrQixFQU1sQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5rQixDQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4qXHRTZWFyY2hhYmxlIFRhYmxlXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cbiBcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4gXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hhYmxlVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdC8vIEluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgICB0aGlzLnN0YXRlID0ge2ZpbHRlclRleHQ6ICcnfVxuICAgIH1cbiAgICBoYW5kbGVVc2VySW5wdXQoZmlsdGVyVGV4dCkge1xuICAgIFx0Ly8gV2hlbiB0aGVyZSdzIGEgY2hhbmdlIGluIHRoZSBzdGF0ZSwgdGhlIGNvbXBvbmVudCBhbmQgYWxsIGl0cyBcbiAgICBcdC8vIHN1Yi1jb21wb25lbnRzIGdldCB1cGRhdGVkLlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJUZXh0OiBmaWx0ZXJUZXh0fSk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIG9uVXNlcklucHV0PXt0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG5cdFx0XHRcdDxUYWJsZSBcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9IFxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiBcbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGhhbmRsZUNoYW5nZSgpIHtcblx0XHQvLyBwYXNzaW5nIGZpbHRlciBkYXRhIHVwIGJ5IHVzaW5nIGEgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5wcm9wcy5vblVzZXJJbnB1dChcbiAgICAgICAgXHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcbiAgICAgICAgICAgIHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgXHR0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIG9uZSBrZXl3b3JkLi4uXCIgXG4gICAgICAgICAgICAgICAgXHRyZWY9XCJmaWx0ZXJUZXh0SW5wdXRcIlxuICAgICAgICAgICAgICAgIFx0dmFsdWU9IHt0aGlzLnByb3BzLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgXHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG5cdH1cbn1cbiBcbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHNlY3Rpb25zID0gW107XG5cdFx0bGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Qpe1xuXHRcdFx0aWYgKHByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGV4dCkgPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNlY3Rpb25zLnB1c2goPFNlY3Rpb24ga2V5PXtwcm9kdWN0Lm5hbWV9IGRhdGE9e3Byb2R1Y3R9IC8+KTtcblx0XHR9LmJpbmQodGhpcykpXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj57c2VjdGlvbnN9PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIFxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLmRhdGEubmFtZX0gPSB7dGhpcy5wcm9wcy5kYXRhLnByaWNlfSA8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbiIsIi8qXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cbiBcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuIFxuLy8gRmlsdGVyYWJsZSBDaGVhdFNoZWV0IENvbXBvbmVudFxuUmVhY3RET00ucmVuZGVyKCA8U2VhcmNoYWJsZVRhYmxlIGRhdGE9e2RhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hhYmxlVGFibGUnKSApO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiQmFzZWJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkMjkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiQmFza2V0YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMzk5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcImlQaG9uZSA1XCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDE5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIk5leHVzIDdcIn1cbl07XG4iXX0=
