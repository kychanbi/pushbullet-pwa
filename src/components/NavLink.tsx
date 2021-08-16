import {useHistory} from 'react-router-dom';
import React, {MouseEventHandler} from 'react';

interface LinkProps {
  to: string;
  Component: React.ComponentType<any>;
}
export const NavLink = ({to, Component}: LinkProps) => {
  const history = useHistory();
  const handleClick: MouseEventHandler = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    console.log('click',e)
    e.preventDefault();
    history.push(to);
  };
  return <Component onClick={handleClick} />;
};
