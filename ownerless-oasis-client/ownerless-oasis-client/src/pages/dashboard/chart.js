import { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  // const[state,setstate] = useState({

  // }
  // )

  return (
    <div>
      <Chart
        //   options={state.options}
        //   series={state.series}
        type="bar"
        width="500"
        series={[
          //   {
          //       name:'Employer: K73,500',
          //       data:[100,200,232,252,322,421,512,622,732,834,945],
          //       color:'#00008b'
          //   },
          {
            name:"" ,
            data: [10, 20, 23, 25, 32, 42, 38, 62, 73, 42, 94],

            color: "#0d25d6",
          },
          {
            name: "Total sale: ",
            data: [10, 20, 23, 20, 32, 42, 23, 62, 70, 43, 65],
            color: "#1e90ff",
          },
        ]}
        options={{
          // colors:["blue"]
          chart: {
            stacked: true,
          },
        }}
      />
    </div>
  );
};
export default BarChart;
