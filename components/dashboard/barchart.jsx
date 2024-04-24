import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Barchart = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [revenue, setRevenue] = useState({})

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [],
          backgroundColor: "#9CB97B",
          borderRadius: 10,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });
  }, [])
  return (
    <>
      <div className='w-[60vw] 2xl:h-[50vh] sm:h-[40vh] h-[30vh] relative p-4 m-auto'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default Barchart