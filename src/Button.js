import  React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const propTypes = {
  /**
   * @title 尺寸
   */
  size: PropTypes.oneOf(['sm', 'xg', 'lg']),
  /**
   * @title 样式
   */
  style: PropTypes.object,
  /**
   * @title 形状
   */
  shape: PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),

  bordered:  PropTypes.bool,
   /**
   * @title 类型
   */
  colors: PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger','default']),
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
   * @title <button> 的 type
   * @veIgnore
   */
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
}

const defaultProps = {
  disabled: false,
  htmlType: 'button',
  clsPrefix: 'u-button',
  bordered: false,

}

const sizeMap = {
        sm: 'sm',
        xg: 'xg',
        lg: 'lg'
    },
    colorsMap = {
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
        pillLeft: 'pill-left',
        icon: 'icon'
    };


class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {colors,
            shape,
            disabled,
            className,
            size,
            bordered,
            children,
            htmlType,
            clsPrefix,
            ...others} = this.props;
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
        if (colorsMap[colors]) {
            clsObj[`${clsPrefix}-${colorsMap[colors]}`] = true;
        }
        clsObj[`${clsPrefix}-border`] = bordered;
        let classes = classnames(clsPrefix, clsObj);
        return (
            <button
                type={htmlType}
                className={classes}
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
