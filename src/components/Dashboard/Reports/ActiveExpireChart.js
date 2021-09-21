import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    active: 4000,
    expire: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    active: 3000,
    expire: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    active: 2000,
    expire: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    active: 2780,
    expire: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    active: 1890,
    expire: 4800,
    amt: 2181,
  },
  {
    name: 'Satureday',
    active: 2390,
    expire: 3800,
    amt: 2500,
  },
  {
    name: 'Sunday',
    active: 3490,
    expire: 4300,
    amt: 2100,
  },
];

export default class ActiveExpireChart extends PureComponent {
  
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
          <Bar dataKey="expire" fill="#ef5350" />
          <Bar dataKey="active" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
