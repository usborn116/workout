import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button';
import userEvent from '@testing-library/user-event';

describe('initial screen shows all expected components',() => {
  test('renders headers', () => {
    render(<App/>);
    const headers = screen.getAllByRole('heading');
    expect(headers[0]).toHaveTextContent('Let\'s Work Out!')
    expect(headers[1]).toHaveTextContent('Choose a Workout Type')
  });
  test('renders all buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3)
  });
  test('renders blank list of workouts', () => {
    render(<App />);
    const list = screen.getByTitle('List');
    expect(list).not.toHaveTextContent()
  });
  test('renders footer', () => {
    render(<App/>);
    const footer = screen.getByText('Made by Usborn Ocampo');
    expect(footer).toBeInTheDocument()
  });
  test('renders link', () => {
    render(<App/>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/usborn116')
  });
})

describe('after button click', () => {
  test('workout list now has text', async () => {
    const user = userEvent.setup()
    render(<App/>)
    const buttons = screen.getAllByRole('button');
    const list = screen.getByTitle('List');
    expect(list).not.toHaveTextContent(/[a-z]/gi)
    await user.click(buttons[0])
    expect(list).toHaveTextContent(/[a-z]/gi)
  });
  test('workout list changes after each click', async () => {
    const user = userEvent.setup()
    render(<App/>)
    const buttons = screen.getAllByRole('button');
    const list = screen.getByTitle('List');
    await user.click(buttons[0])
    let x = list.textContent
    await user.click(buttons[1])
    let y = list.textContent
    expect(x).not.toEqual(y)
  });
  test('button handler is called', async () => {
    const user = userEvent.setup()
    const mock = jest.fn()
    render(<Button name='Arms' img='💪' clickHandler={mock}/>)
    const button = screen.getByRole('button');
    await user.click(button)
    expect(mock).toHaveBeenCalled()
  });
  test('button handler is called multiple times', async () => {
    const user = userEvent.setup()
    const mock = jest.fn()
    render(<Button name='Arms' img='💪' clickHandler={mock}/>)
    const button = screen.getByRole('button');
    await user.click(button)
    await user.click(button)
    expect(mock).toHaveBeenCalledTimes(2)
  })
})
