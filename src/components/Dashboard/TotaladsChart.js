import React, { PureComponent } from 'react';
import Title from './Title';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sunday',
    Ads: 40,    
    
  },
  {
    name: 'Monday',
    Ads: 10,   
    
  },
  {
    name: 'Tuesday',
    Ads: 25,    
    
  },
  {
    name: 'Wednesday',
    Ads: 1,    
   
  },
  {
    name: 'Thursday',
    Ads: 0,    
    
  },
  {
    name: 'Friday',
    Ads: 0,    
    
  },
  {
    name: 'Satureday',
    Ads: 0,
    
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
