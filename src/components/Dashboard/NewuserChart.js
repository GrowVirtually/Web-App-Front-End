import React, { PureComponent } from 'react';
import Title from './Title';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sunday',
    userCount: 4,    
    
  },
  {
    name: 'Monday',
    userCount: 3,   
    
  },
  {
    name: 'Tuesday',
    userCount: 2,    
    
  },
  {
    name: 'Wednesday',
    userCount: 0,    
   
  },
  {
    name: 'Thursday',
    userCount: 0,    
    
  },
  {
    name: 'Friday',
    userCount: 0,    
    
  },
  {
    name: 'Satureday',
    userCount: 0,
    
  },
];

export default class NewuserChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

  render() {
    return (
    <React.Fragment>
      <Title>New User </Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="userCount" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
