import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const Charts = ({ taskLists }) => {
  const d3Chart = useRef();
  var rheight = 35;

  let data = [0, 0, 0];

  // another example
  // use d.Grade to get each grade
  // use d.count to get each count
  // let data = [
  //   { Grade: null, count: 494 },
  //   { Grade: "102", count: 330 },
  //   { Grade: "103", count: 272 },
  //   { Grade: "104", count: 201 },
  //   { Grade: "105", count: 289 },
  //   { Grade: "106", count: 237 },
  // ];

  taskLists.forEach((ele) => {
    data[ele.level - 1]++;
  });

  const d3Fun = () => {
    d3.select(d3Chart.current)
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        // d: each item in the Array
        // i: the index of the current item

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
