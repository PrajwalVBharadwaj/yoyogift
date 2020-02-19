import React from "react";
import { shallow } from "../../../Enzyme";
import { TablePaginationActions } from "./TablePaginationActionsWrapped";

describe("Testing tablePaginationActions component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <TablePaginationActions
        classes={{}}
        count={10}
        onChangePage={() => {}}
        page={1}
        rowsPerPage={5}
        theme="rtl"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("navigation buttons", () => {
    const wrapper = shallow(
      <TablePaginationActions
        classes={{}}
        count={10}
        onChangePage={() => {}}
        page={1}
        rowsPerPage={5}
        theme="rtl"
      />
    );
    wrapper.find({ dataTest: "firstPage" }).simulate("click");
    wrapper.find({ dataTest: "prevPage" }).simulate("click");
    wrapper.find({ dataTest: "nextPage" }).simulate("click");
    wrapper.find({ dataTest: "lastPage" }).simulate("click");
  });
});
