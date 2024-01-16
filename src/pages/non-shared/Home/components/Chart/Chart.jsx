import "./Chart.css";
import { ResponsiveLine } from "@nivo/line";

const Chart = () => {
  //    data structure :  january//
  const data = [
    {
      id: "Meal rate",
      color: "hsl(200, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 249,
        },
        {
          x: "February",
          y: 123,
        },
        {
          x: "March",
          y: 25,
        },
        {
          x: "April",
          y: 44,
        },
        {
          x: "May",
          y: 0,
        },
        {
          x: "June",
          y: 44,
        },
        {
          x: "July",
          y: 270,
        },
        {
          x: "August",
          y: 116,
        },
        {
          x: "September",
          y: 260,
        },
        {
          x: "October",
          y: 128,
        },
        {
          x: "November",
          y: 24,
        },
        {
          x: "December",
          y: 77,
        },
      ],
    },
    {
      id: "Total Meal",
      color: "hsl(328, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 117,
        },
        {
          x: "February",
          y: 174,
        },
        {
          x: "March",
          y: 156,
        },
        {
          x: "April",
          y: 74,
        },
        {
          x: "May",
          y: 270,
        },
        {
          x: "June",
          y: 54,
        },
        {
          x: "July",
          y: 60,
        },
        {
          x: "August",
          y: 267,
        },
        {
          x: "September",
          y: 1,
        },
        {
          x: "October",
          y: 230,
        },
        {
          x: "November",
          y: 244,
        },
        {
          x: "December",
          y: 24,
        },
      ],
    },
  ];
  return (
    <div className="chartDetails">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        tooltip={() => (
          <div
            style={{
              background: "transparent",
              padding: "10px",
              border: "1px solid #ccc",
              color: "black",
            }}
          >
            <p>Name: </p>
            <p>Month:</p>
            <p>Value:</p>
          </div>
        )}
        enableGridX={false}
        enableGridY={false}
        pointSize={7}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[]}
        // motionConfig={{
        //   mass: 1,
        //   tension: 199,
        //   friction: 88,
        //   clamp: true,
        //   precision: 0.01,
        //   velocity: 0,
        // }}
      />
    </div>
  );
};

export default Chart;

//

//
