import "./chart.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

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

const RenderActiveShape = React.memo((props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontFamily="trebuchet ms,sans-serif"
        letterSpacing="+0.6px"
        fontWeight="700"
        fontSize="155%"
        stroke={fill}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke={fill}
        enableBackground="black"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        stroke={fill}
        enableBackground="black"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="#000000" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
        fontFamily="trebuchet ms,sans-serif"
        letterSpacing="-0.2px"
        fontWeight="300"
        fontSize="95%"
      >{`Clients done : ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={23}
        textAnchor={textAnchor}
        fill={fill}
        fontFamily="trebuchet ms,sans-serif"
        letterSpacing="+0.2px"
        fontWeight="700"
        fontSize="125%"
      >
        {`( Field ${(percent * 100).toFixed(2)} %)`}
      </text>
    </g>
  );
});

const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback((_entry, index) => {
    setActiveIndex(index);
  }, []);

  return (
    <PieChart width={800} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={RenderActiveShape}
        data={data}
        cx={400}
        cy={200}
        innerRadius={100}
        outerRadius={140}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        stroke="#00000000"
        strokeOpacity={0.99}
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
