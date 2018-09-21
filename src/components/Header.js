import React from 'react';

import {NavLink } from 'react-router-dom';


const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/"       activeClassName="is_active" exact={true} >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is_active">Create</NavLink>
        <NavLink to="/help"   activeClassName="is_active">Help</NavLink>
    </div>
);

export default Header;
