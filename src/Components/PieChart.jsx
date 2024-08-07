import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const CompletionPieChart = ({ completion }) => {
  const data = [
    { name: 'Completed', value: completion },
    { name: 'Remaining', value: 100 - completion },
  ];

  const COLORS = ['#8382FA', '#FFF'];

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1vh",background:"#F7F5F5",padding:"1vw",margin:"0 3vw"}}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Completion Status
        </Typography>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <Typography variant="p" align="center" style={{ marginTop: '10px' }}>
          {completion}% Tasks Completed
        </Typography>
</div>
  );
};

export default CompletionPieChart;
