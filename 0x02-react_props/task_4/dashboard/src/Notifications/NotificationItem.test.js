import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={html} />);
    const li = wrapper.find('li');
    expect(li.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });
});
