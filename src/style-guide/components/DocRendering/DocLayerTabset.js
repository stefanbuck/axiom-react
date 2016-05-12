import React, { Component, PropTypes } from 'react';
import { Tabset, Tab } from 'axiom/react';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';

export default class DocLayerGrid extends Component {
  static propTypes = {
    layer: PropTypes.object.isRequired,
  };

  render() {
    const { layer } = this.props;

    return (
      <Tabset {...layer.props}>
        { layer.children.map((childLayer, index) =>
          <Tab {...childLayer.props} key={ index }>
            <DocLayer layer={ childLayer } />
          </Tab>
        ) }
      </Tabset>
    );
  }
}
