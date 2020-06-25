import React from 'react';
import auth from '../utils/auth';
import {withRouter} from 'react-router-dom';
import Title from './commons/Title';

const Products = (props) => {
  return (
    <div>
      <Title>Products</Title>
      <button onClick={ () => {
        auth.logout(() => {
          props.history.push("/");
        })
      }}>Logout</button>
    </div>
  )
}

export default withRouter(Products);
