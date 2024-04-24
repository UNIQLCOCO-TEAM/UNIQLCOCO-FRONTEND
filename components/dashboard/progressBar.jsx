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

const ProgressBar = () => {
    const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [shirtSold, setShirtSold] = useState()
  const [pantsSold, setPantsSold] = useState()

  useEffect(() => {
    setChartData({
      labels: [
        "Shirt",
        "Pants",
      ],
      datasets: [
        {
          data: [100, 80],
          backgroundColor: [
            "rgb(93, 235, 215, 0.2)",
            "rgb(22, 121, 171, 0.2)",
        ],
        borderColor: [
            'rgb(93, 235, 215)',
            'rgb(22, 121, 171)',
          ],
          borderRadius: 10,
          borderWidth: 1,
          barPercentage: 0.2,
        },
      ],
    });
    setChartOptions({
        indexAxis: "y",
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
          border: {
            display: false,
          },
          ticks: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
    });
  }, [])

  return (
    <>
      <div className='relative p-4 m-auto xl:w-[25vw] w-[80vw]'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default ProgressBar
