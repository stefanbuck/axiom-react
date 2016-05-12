import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import LayoutContent from './LayoutContent';
import LayoutLogo from './LayoutLogo';

export class LayoutTitle extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__title-container');

    return (
      <div className={ classes }>
        <LayoutContent>
          <div className="ax-layout__logo">
            <LayoutLogo />
          </div>

          <div className="ax-layout__title">
            { children }
          </div>
        </LayoutContent>
      </div>
    );
  }
}

export default enhance(LayoutTitle)(
  addPropTypes('global'),
  addClassName('global'),
);
