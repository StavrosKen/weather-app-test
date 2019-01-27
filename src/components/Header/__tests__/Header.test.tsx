import * as React from "react";
import { shallow } from "enzyme";
import Header from '../index';

describe('<Header />', () => {
  it("renders the title", () => {
      const result = shallow(<Header />).contains(<h1>24 hours weather forecast</h1>);
      expect(result).toBeTruthy();
  });
});