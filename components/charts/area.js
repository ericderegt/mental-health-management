import React from 'react';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class AreaChartMH extends React.PureComponent {

    render() {

        const data = [ 5, 2, 3, 5, 5, 4, 4, 3, 1, 1, 2, 4 ]

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
