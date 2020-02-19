import React, { useEffect } from "react";
import { shallow, userDetails } from "../../Enzyme";
import axiosWrapper from "../../apis/axiosCreate";
import ListUsers from "./ListUsers";

describe("Testing List users component", () => {
  it("Snapshot testign", () => {
    jest.spyOn(React, "useEffect").mockImplementation(f => f());
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
});
