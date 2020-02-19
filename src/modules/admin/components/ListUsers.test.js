import React, { useState, useEffect } from "react";
import { shallow, userDetails } from "../../../Enzyme";
import axiosWrapper from "../../../apis/axiosCreate";
import ListUsers from "./ListUsers";

describe("Testing List users component", () => {
  it("Snapshot testign", () => {
    axiosWrapper.get = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          users: [
            {
              fisrt_name: "a",
              last_name: "b",
              email: "c",
              balance_points: 10
            }
          ]
        }
      })
    );
    const wrapper = shallow(<ListUsers />);
    expect(wrapper).toMatchSnapshot();
  });
  // it("When users are loading", () => {
  //   jest.spyOn(React, "useState").mockImplementationOnce(() => {
  //     useState({
  //       users: [
  //         {
  //           fisrt_name: "a",
  //           last_name: "b",
  //           email: "c",
  //           balance_points: 10
  //         }
  //       ]
  //     });
  //   });
  //   jest.spyOn(React, "useEffect").mockImplementationOnce(() => {
  //     useEffect(() => {
  //       return 1;
  //     });
  //   });
  //   const wrapper = shallow(<ListUsers />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it("Display users", () => {
  //   jest.spyOn(React, "useState").mockImplementationOnce(() => {
  //     useState(userDetails);
  //   });
  //   jest.spyOn(React, "useEffect").mockImplementationOnce(() => {
  //     useEffect(() => {
  //       return 1;
  //     });
  //   });
  //   const wrapper = shallow(<ListUsers />);
  //   const fName = wrapper.find({ dataKey: "first-name" });
  //   console.log(fName.debug());
  //   expect(wrapper.find({ dataKey: "first-name" }).length).toBe(1);
  // });
});
