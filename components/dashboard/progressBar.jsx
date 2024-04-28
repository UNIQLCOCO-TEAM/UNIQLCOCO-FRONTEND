import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressBar = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [shirtSold, setShirtSold] = useState(0);
  const [pantsSold, setPantsSold] = useState(0);
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";

  const handleProductStatus = async (access_token) => {
    const API_URL = `http://192.168.1.5:8082/order/overview`;
    try {
      const result = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchProductStatus = async () => {
      try {
        const result = await handleProductStatus(access_token);
        setShirtSold(JSON.parse(result).result.shirts);
        setPantsSold(JSON.parse(result).result.pants);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductStatus();
    setChartData({
      labels: ["Shirt", "Pants"],
      datasets: [
        {
          data: [shirtSold, pantsSold],
          backgroundColor: ["rgb(93, 235, 215, 0.2)", "rgb(22, 121, 171, 0.2)"],
          borderColor: ["rgb(93, 235, 215)", "rgb(22, 121, 171)"],
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
          },
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
  }, [access_token, shirtSold, pantsSold]);

  return (
    <>
      <div className="relative p-4 m-auto xl:w-[25vw] w-[80vw]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default ProgressBar;
