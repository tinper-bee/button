import  React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const propTypes = {
  /**
   * @title 尺寸
   */
  size: PropTypes.oneOf(['sm', 'xg', 'lg', '']),
  /**
   * @title 样式
   */
  style: PropTypes.object,
  /**
   * @title 形状
   */
  shape: PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
   /**
   * @title 类型
   */
  type: PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
  /**
   * @title 是否禁用
   * @veIgnore
   */
  disabled: PropTypes.bool,
  /**
   * @title 类名
   * @veIgnore
   */
  className: PropTypes.string,
  /**
   * @title 内容
   */
  children: PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
  ]),
  /**
   * @title <button> 的 type
   * @veIgnore
   */
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
}

const defaultProps = {
  size: '',
  type: 'primary',
  shape: '',
  disabled: false,
  className: '',
  children: '',
  htmlType: 'button'
}

const sizeMap = {
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


class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {type, shape, disabled, className, size, children, htmlType, ...others} = this.props;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${sizeMap[size]}`] = true;
        }
        if (shapeMap[shape]) {
            clsObj[`${clsPrefix}-${shapeMap[shape]}`] = true;
        }
        if (typeMap[type]) {
            clsObj[`${clsPrefix}-${typeMap[type]}`] = true;
        }
        let classNames = classnames(clsPrefix, clsObj);
        return (
            <button
                type={htmlType}
                className={classNames}
                disabled={disabled}
                {...others}>
              {this.props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
