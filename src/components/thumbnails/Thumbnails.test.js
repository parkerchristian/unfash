import React from 'react';
import Thumbnails from './Thumbnails';
import { shallow } from 'enzyme';

describe('Thumbnails component', () => {
  const thumbnailList = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80',
      title: 'One dog'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1559032534-1a20db37cdd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      title: 'Two Dogs.'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
      title: 'and a third'
    }
  ];
  it('Renders a list of thumbnails', ()=> {
    const wrapper = shallow(<Thumbnails thumbnails={thumbnailList} />);
    expect(wrapper).toMatchSnapshot();
  });
});
