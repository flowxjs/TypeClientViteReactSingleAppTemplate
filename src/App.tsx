import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component, ComponentTransform, useReactiveState } from '@typeclient/react-sapp';
import { Context, State } from '@typeclient/core';

export type TCount = { count: number };

@Component()
@State(Count)
export class App implements ComponentTransform {
  render(ctx: React.PropsWithoutRef<Context<TCount>>) {
    const count = useReactiveState(() => ctx.state.count);
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => ctx.state.count++}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

function Count(): TCount {
  return {
    count: 0,
  }
}
