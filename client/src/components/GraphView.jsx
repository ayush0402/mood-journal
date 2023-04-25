import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

const getDate = (dayString) => {
  let yourDate = new Date(dayString);
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  return yourDate.toISOString().split("T")[0];
};

const GraphView = ({ posts }) => {
  let xAxisData = [],
    yAxisData = [];

  let sentimentMap = {};

  const addValueToMap = (key, value) => {
    sentimentMap[key] = sentimentMap[key] || [];
    sentimentMap[key].push(value);
  };

  for (let post of posts) {
    addValueToMap(getDate(post.date), Number(post.sentiment.$numberDecimal));
  }

  for (let key in sentimentMap) {
    let sentimentArray = sentimentMap[key];
    let sentimentSum = 0;
    for (let sentiment of sentimentArray) {
      sentimentSum += Number(sentiment);
    }
    let sentimentAverage = sentimentSum / sentimentArray.length || 0;
    xAxisData.push(key);
    yAxisData.push(sentimentAverage.toFixed(2));
  }

  const options = {
    xaxis: {
      categories: xAxisData,
      labels: {
        show: false,
      },
    },
  };
  const series = [
    {
      name: "mood",
      data: yAxisData,
    },
  ];

  return (
    <Card>
      <Card.Body>
        <Chart options={options} series={series} type="area" />;
      </Card.Body>
    </Card>
  );
};
export default GraphView;
