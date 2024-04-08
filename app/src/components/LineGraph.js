import React, { useState, useEffect } from 'react';

const LineGraph = ({ data }) => {
  const [chartData, setChartData] = useState({});
  const [timeRange, setTimeRange] = useState('weekly');

  useEffect(() => {
    const processData = () => {
      let processedData = {};

      if (timeRange === 'weekly') {
        processedData = processDataWeekly(data);
      } else if (timeRange === 'monthly') {
        processedData = processDataMonthly(data);
      } else if (timeRange === 'yearly') {
        processedData = processDataYearly(data);
      }

      const labels = Object.keys(processedData);
      const values = Object.values(processedData);

      setChartData({
        labels: labels,
        values: values,
      });
    };

    processData();
  }, [data, timeRange]);

  const processDataWeekly = (data) => {
    const weeklyData = {};
    data.forEach(entry => {
      const week = getWeekFromDate(entry.date);
      if (!weeklyData[week]) {
        weeklyData[week] = 0;
      }
      weeklyData[week] += entry.timeSpent;
    });
    return weeklyData;
  };

  const processDataMonthly = (data) => {
    const monthlyData = {};
    data.forEach(entry => {
      const date = new Date(entry.date);
      const monthName = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear().toString().substring(2);
      const monthYear = `${monthName}-${year}`;
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 0;
      }
      monthlyData[monthYear] += entry.timeSpent;
    });
    return monthlyData;
  };
  
  

  const processDataYearly = (data) => {
    const yearlyData = {};
    data.forEach(entry => {
      const year = entry.date.substring(0, 4);
      if (!yearlyData[year]) {
        yearlyData[year] = 0;
      }
      yearlyData[year] += entry.timeSpent;
    });
    return yearlyData;
  };

  const getWeekFromDate = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  };
  

  return (
    <div className="line-graph">
      <h1>Time Spent</h1>
      <div>
      <label style={{ margin: "0px 0px 0px 10px"}}for="time">Select &nbsp;Time &nbsp; Range</label>
      <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}style={{ margin: "0px 0px 0px 10px", padding:"8px 30px 8px  30px"}} id="time">
          <option value="weekly"><big>Weekly</big></option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <svg style={{ width: "400px", height: "400px" }}viewBox="0 0 400 400" width="400" height="400">
          {/* X-axis */}
          <line x1="50" y1="250" x2="400" y2="250" stroke="white" />
          {/* Y-axis */}
          <line x1="50" y1="250" x2="50" y2="50" stroke="white" />
          {/* X-axis labels */}
          {chartData.labels && chartData.labels.map((label, index) => (
            <text key={index} x={(index + 1) * 56} y="270" fontSize="20" textAnchor="middle"  fill={index === 0 ? 'white' : 'white'}>
              {label}
            </text>
          ))}
    
          {/* Y-axis labels */}
          {chartData.values && Array.from(new Set(chartData.values)) // Filter out unique values
            .sort((a, b) => a - b) // Sort the unique values in ascending order
            .map((value, index) => (
              <text key={index} x="40" y={250 - index * 25} fontSize="20" textAnchor="end" fill={index === 0 ? 'white' : 'white'}>
                {value}
              </text>
          ))}

          {/* Line graph */}
          {chartData.labels && chartData.values && (
            <>
            <polyline
              points={chartData.labels.map((label, index) => `${(index + 1) * 60},${290 - (chartData.values[index] / Math.max(...chartData.values)) * 200}`).join(' ')}
              fill="none"
              stroke="violet"
              strokeWidth="3"
            />
        </>
          )}
          
        </svg>
      </div>
    </div>
  );
};

export default LineGraph;
