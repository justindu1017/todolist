import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const Charts = ({ taskLists }) => {
  const d3Chart = useRef();
  var rheight = 35;

  let data = [0, 0, 0];

  taskLists.forEach((ele) => {
    data[ele.level - 1]++;
  });

  console.log(data);

  const d3Fun = () => {
    d3.select(d3Chart.current)
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        console.log("d = ", d);
        // 起始點X
        return i * rheight;
      })
      .attr("y", function (d, i) {
        // 起始點Y
        return 0;
      })
      .attr("height", function (d) {
        return d * 100;
      })
      .attr("width", rheight - 3)
      .attr("fill", "tomato");
  };

  useEffect(() => {
    d3Fun();
  }, []);

  return (
    <div className="flex justify-center my-2">
      <div className="w-7/12 flex flex-col shadow-md bg-white rounded-md px-5 py-3">
        <svg ref={d3Chart} className="" transform="scale(1,-1)"></svg>
      </div>
    </div>
  );
};

export default Charts;
