
import Chart from 'chart.js/auto';
import React, { useState, useEffect, useRef } from 'react';

const SalesRep = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredSales, setFilteredSales] = useState([]);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);
  const [salesData, setSalesData] = useState([
    { date: '2024-03-01', amount: 1500 },
    { date: '2024-03-02', amount: 2200 },
    { date: '2024-03-03', amount: 1800 },
    { date: '2024-03-04', amount: 3000 },
    // More sales data...
  ]);

  useEffect(() => {
    if (filteredSales.length > 0) {
      const labels = filteredSales.map(sale => sale.date);
      const amounts = filteredSales.map(sale => sale.amount);
      
      setChartData({
        labels: labels,
        datasets: [{
          label: 'Sales Trend',
          data: amounts,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      });
    }
  }, [filteredSales]);

  useEffect(() => {
    console.log("Chart Data:", chartData);
    if (chartRef && chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');
      console.log("Canvas context:", ctx);
      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day'
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Amount'
              },
              ticks: {
                callback: function(value, index, values) {
                  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                }
              }
            }
          }
        }
      });
    }
  }, [chartData]);
  

  const handleFilter = () => {
    const filtered = salesData.filter(sale => sale.date >= startDate && sale.date <= endDate);
    setFilteredSales(filtered);
  };

  const handleSort = (type) => {
    if (type === sortType) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const resetFilter = () => {
    setStartDate('');
    setEndDate('');
    setFilteredSales([]);
  };

  const getTotalSales = () => {
    const total = filteredSales.reduce((acc, curr) => acc + curr.amount, 0);
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const sortedSales = [...filteredSales].sort((a, b) => {
    if (sortType === 'date') {
      return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    } else {
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
  });

  const handleWeeklySales = () => {
    // Logic to get weekly sales data
    // For demonstration, let's assume we're filtering sales for the last 7 days
    const currentDate = new Date();
    const weekAgoDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
    const weeklySales = salesData.filter(sale => new Date(sale.date) >= weekAgoDate);
    setFilteredSales(weeklySales);
  };

  const handleMonthlySales = () => {
    // Logic to get monthly sales data
    // For demonstration, let's assume we're filtering sales for the current month
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const monthlySales = salesData.filter(sale => new Date(sale.date) >= startOfMonth);
    setFilteredSales(monthlySales);
  };
  

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="form-input"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="form-input"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleFilter}
        >
          Filter
        </button>
        <button
          className="btn btn-secondary"
          onClick={resetFilter}
        >
          Reset Filter
        </button>
      </div>
      <div className="flex gap-4 mb-4">
        <button
          className="btn btn-primary"
          onClick={() => setFilteredSales(salesData)}
        >
          All Sales
        </button>
        <button
          className="btn btn-primary"
          onClick={handleWeeklySales}
        >
          Weekly Sales
        </button>
        <button
          className="btn btn-primary"
          onClick={handleMonthlySales}
        >
          Monthly Sales
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Total Sales: {getTotalSales()}</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('date')}
              >
                Date {sortType === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort('amount')}
              >
                Amount {sortType === 'amount' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedSales.map((sale, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{sale.date}</td>
                <td className="border px-4 py-2">{sale.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesRep;


