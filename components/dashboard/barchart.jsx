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

const Barchart = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [totalInCome, setTotalInCome] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const access_token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
  const [revenue, setRevenue] = useState({});

  const handleTotalIncome = async (access_token) => {
    const API_URL = `http://192.168.1.5:8082/order/income`;
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
    const fetchTotalInCome = async () => {
      try {
        const result = await handleTotalIncome(access_token);
        const inComeList = Array.from(JSON.parse(result).result);
        let matchInComeList = [];
        inComeList.forEach((month, index) => {
          matchInComeList.push(month[index + 1]);
        })
        setTotalInCome(matchInComeList);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTotalInCome();
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
          data: totalInCome,
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
  }, [access_token, totalInCome]);
  return (
    <>
      <div className="w-[60vw] 2xl:h-[50vh] sm:h-[40vh] h-[30vh] relative p-4 m-auto">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default Barchart;
