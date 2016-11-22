'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @title 尺寸
     */
    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg', '']),
    /**
     * @title 样式
     */
    style: _react.PropTypes.object,
    /**
     * @title 形状
     */
    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
    /**
    * @title 类型
    */
    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: _react.PropTypes.bool,
    /**
     * @title 类名
     * @veIgnore
     */
    className: _react.PropTypes.string,
    /**
     * @title 内容
     */
    children: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
    /**
     * @title <button> 的 type
     * @veIgnore
     */
    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
};

var defaultProps = {
    size: '',
    type: 'primary',
    shape: '',
    disabled: false,
    className: '',
    children: '',
    htmlType: 'button',
    clsPrefix: 'u-button'
};

var sizeMap = {
    sm: 'sm',
    xg: 'xg',
    lg: 'lg'
},
    typeMap = {
    primary: 'primary',
    accent: 'accent',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger'
},
    shapeMap = {
    block: 'block',
    round: 'round',
    squared: 'squared',
    floating: 'floating',
    pillRight: 'pill-right',
    pillLeft: 'pill-left'
},
    clsPrefix = 'u-button';

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    Button.prototype.render = function render() {
        var _props = this.props;
        var colors = _props.colors;
        var shape = _props.shape;
        var disabled = _props.disabled;
        var className = _props.className;
        var size = _props.size;
        var children = _props.children;
        var htmlType = _props.htmlType;
        var clsPrefix = _props.clsPrefix;

        var others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

        var clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
        }
        if (shapeMap[shape]) {
            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
        }
        if (typeMap[colors]) {
            clsObj[clsPrefix + '-' + typeMap[colors]] = true;
        }
        var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);
        return _react2["default"].createElement(
            'button',
            _extends({
                type: htmlType,
                className: classNames,
                disabled: disabled
            }, others),
            this.props.children
        );
    };

    return Button;
}(_react.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports["default"] = Button;
module.exports = exports['default'];