import "./chart.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Html,CSS", value: 5 },
  { name: "React Js", value: 4 },
  { name: "Gfx Design", value: 6 },
  { name: "Ui/Ux Design", value: 1 },
  { name: "Discord Dev", value: 9 },
  { name: "Others", value: 0.5 }
];
const COLORS = [
  "#8747dd",
  "#6c00ff",
  "#0084ff",
  "#00b2ff",
  "#00ffef",
  "#00ff75"
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="intro">{`Field ${(payload[0].percent * 100).toFixed(2)} %`}</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback((_entry, index) => {
    setActiveIndex(index);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={(props) => <RenderActiveShape activeIndex={activeIndex} {...props} />}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
          stroke="transparent"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
