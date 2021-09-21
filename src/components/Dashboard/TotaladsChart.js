import React, { PureComponent } from 'react';
import Title from './Title';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sunday',
    Ads: 4000,    
    
  },
  {
    name: 'Monday',
    Ads: 3000,   
    
  },
  {
    name: 'Tuesday',
    Ads: 2000,    
    
  },
  {
    name: 'Wednesday',
    Ads: 2780,    
   
  },
  {
    name: 'Thursday',
    Ads: 1890,    
    
  },
  {
    name: 'Friday',
    Ads: 2390,    
    
  },
  {
    name: 'Satureday',
    Ads: 3490,
    
  },
];

export default class TotaladsChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
    <React.Fragment>
        <Title>Total Ads </Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Ads" stackId="a" fill="#8884d8" />
          {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
    );
  }
}
