import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for chart data
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

// Define the type for chart options
interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: 'top' | 'right' | 'bottom' | 'left' | 'center' | 'chartArea'; // Specific values
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

// Define the chart options
const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Must be one of the specific values
    },
    title: {
      display: true,
      text: 'Monthly Sales Data',
    },
  },
};

const BarGraph: React.FC = () => {
  // Initialize chart data state with months until December
  const [chartData] = useState<ChartData>({
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 45, 90, 85, 75], // Example data for 12 months
        backgroundColor: '#FFDE59',
        borderColor: '#C59400',
        borderWidth: 1,
      },
    ],
  });

  return (
    <div style={{ width: '870px', height: '' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;  