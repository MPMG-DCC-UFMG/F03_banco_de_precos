import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class CheckboxWithIndeterminate extends React.Component {
  static propTypes = {
    indeterminate: PropTypes.bool,
  };

  static defaultProps = {
    indeterminate: false,
  };

  componentDidMount() {
    this.el.indeterminate = !!this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.el.indeterminate = this.props.indeterminate;
    }
  }

  render() {
    return (
      <input
        {...this.props}
        type="checkbox"
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export const GroupHeading = (props) => {
  const { className, cx, getStyles, children, ...cleanProps } = props;
  console.log(props);
  return (
    <div
      className={cx(css(getStyles('groupHeading', props)), { 'group-heading': true }, className)}
      {...cleanProps}
    >
      <CheckboxWithIndeterminate readOnly type="checkbox" indeterminate checked={false{}/>
      {children}
    </div>
  );
};

export default GroupHeading;
