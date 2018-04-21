import React from 'react';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class StackedAreaChartMH extends React.PureComponent {

    render() {

      const data = [ 8, 7, 7, 7, 7, 4, 4, 6, 7 ]

      return (
          <AreaChart
              style={ { height: 200 } }
              data={ data }
              contentInset={ { top: 30, bottom: 30 } }
              curve={shape.curveNatural}
              svg={{ fill: 'rgba(76,175,80,0.8)' }}
          />
      )
    }
}
