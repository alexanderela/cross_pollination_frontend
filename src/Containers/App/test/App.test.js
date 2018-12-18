import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })  
})  

