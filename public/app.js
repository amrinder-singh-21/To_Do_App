'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Counter() {
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    console.log("count");
    return _react2.default.createElement(
        'div',
        null,
        'count:',
        console.log("count"),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    setCount(count + 1);
                } },
            '+'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    setCount(count - 1);
                } },
            '--'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    setCount(count);
                } },
            '11'
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(Counter, null), document.getElementById('app'));
