import React from 'react';
import Thumbnail from './Thumbnail';
import { shallow } from 'enzyme';

describe('Thumbnail component', () => {
  it('renders a thumbnail', () => {
    const imgUrl = 'abc.com';
    const title = 'Look at this stupid outfit';
    const wrapper = shallow(<Thumbnail imgUrl={imgUrl} title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
});
