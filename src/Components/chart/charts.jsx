import React, { useCallback, useState, useEffect, useMemo } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import "./chart.css";

const data = [
  { name: "Frontend", value: 10 },
  { name: "Python", value: 5 },
  { name: "Javascript", value: 6 },
  { name: "Gfx,UI & Ux", value: 15 },
  { name: "Discord.js", value: 11 },
  { name: "Others", value: 1 }
];

const COLORS = [
  "#0df5ff",
  "#0db6ff",
  "#0d81ff",
  "#b58af9",
  "#ff007d",
  "#0dffac"
];
const RenderActiveShape = (props) => {
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
        fontFamily="oxymoron"
        letterSpacing="+0.6px"
        fontWeight="600"
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
        fontWeight="600"
        fontFamily="baloo2"
        letterSpacing="-0.2px"
        fontSize="100%"
      >{`Projects done : ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={23}
        textAnchor={textAnchor}
        fill={fill}
        fontFamily="Roboto"
        letterSpacing="+0.2px"
        fontWeight="700"
        fontSize="140%"
      >
        {`( Worked ${(percent * 225).toFixed(2)} %)`}
      </text>
    </g>
  );
};


const Chart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_entry, index) => {
    setActiveIndex(index);
  }, []);

  const onPieLeave = useCallback(() => {
    setActiveIndex(0);
  }, []);

  // Timer to change the activeIndex every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const memoizedColors = useMemo(() => COLORS, []);

  return (
    <PieChart width={800} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={<RenderActiveShape />}
        data={data}
        cx={400}
        cy={200}
        innerRadius={100}
        outerRadius={140}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        stroke="transparent"
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={memoizedColors[index % memoizedColors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;