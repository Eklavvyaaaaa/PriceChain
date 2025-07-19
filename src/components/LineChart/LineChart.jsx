import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const dataCopy = [["Date", "Price"]];
      historicalData.prices.forEach(([timestamp, price]) => {
        const date = new Date(timestamp).toLocaleDateString();
        dataCopy.push([date, price]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={data}
        options={{
          title: 'Price Trend (Last 10 Days)',
          hAxis: { title: 'Date' },
          vAxis: { title: 'Price' },
          legend: 'none',
          curveType: 'function',
          backgroundColor: '#1e1e1e',
          titleTextStyle: { color: '#fff' },
          hAxisTextStyle: { color: '#fff' },
          vAxisTextStyle: { color: '#fff' },
        }}
      />
    </div>
  );
};

export default LineChart;
