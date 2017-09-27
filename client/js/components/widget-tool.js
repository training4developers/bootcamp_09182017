import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ToolHeader } from './tool-header';
import { WidgetTable } from './widget-table';
import { ToolFooter } from './tool-footer';

export class WidgetTool extends React.PureComponent {

  static propTypes = {
    refreshWidgets: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.refreshWidgets();
  }

  render() {

    return <div>
      <ToolHeader headerText="Widget Tool" />
      <WidgetTable {...this.props} />
      <ToolFooter copyright="Copyright 2017, Val and Associates. All Rights Reserved." />
    </div>;
  }
}