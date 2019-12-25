import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink exact to="/" className="item">Home</NavLink>
      <NavLink to="/policies" className="item">Policies</NavLink>
      <NavLink to="/claims" className="item">Claims</NavLink>
      <NavLink exact to="/todos" className="item">Todos</NavLink>
      
    </div>
  );
};

export default Navigation;
