import { h, app } from "hyperapp";

const state = {};
const actions = {};

type State = typeof state;
type Actions = typeof actions;

const view = (state: State, actions: Actions) => (
  <main>
    <h1>Hello World</h1>
  </main>
);

const main = app(state, actions, view, document.getElementById("content"));
