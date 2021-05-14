import React from 'react';
import {Redirect} from 'react-router';

export class NotFoundView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Redirect to="/"></Redirect>
  }
}