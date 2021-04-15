// components/__tests__/BaseButton.test.jsx
import React from "react";
import { shallow } from 'enzyme';
import Dropdown from '../views/components/Dropdown';
const optionsArray = ["MOST POPULAR", "LATEST RELEASES", "SHOPIFY CONTENT", "AMAZON CONTENT"]

describe('Dropdown', () => {
    it('dropdown renders correctly', () => {
      const wrapper = shallow(<Dropdown optionsArray={optionsArray} />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });