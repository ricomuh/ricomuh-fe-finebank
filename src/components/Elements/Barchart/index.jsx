// import React from "react";
import PropTypes from "prop-types";
// import React from 'react'
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../../context/themeContext";
import { useContext } from "react";

const chartSetting = {
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      tickFontSize: 10,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset(props) {
  const { desc } = props;

  const { theme } = useContext(ThemeContext);

  desc.series[1].color = theme.color;

  return (
    <BarChart
      dataset={desc.data}
      xAxis={[
        { scaleType: "band", dataKey: desc.dataKey, categoryGapRatio: 0.5 },
      ]}
      series={desc.series}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "top", horizontal: "right" },
        },
      }}
      {...chartSetting}
    />
  );
}

// define the prop types
BarsDataset.propTypes = {
  desc: PropTypes.object,
};
