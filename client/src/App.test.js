import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from './App';
import Nav from './components/nav';
import PlayerCard from './components/playerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Nav renders correctly, truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <Nav />
  );
  const element = wrapper.queryByText(/Soccer Players/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

  wrapper.debug();
})

it('PlayerCard renders correctly, truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <PlayerCard />
  );
  const element = wrapper.queryByText(/Team: /i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

  wrapper.debug();
})
