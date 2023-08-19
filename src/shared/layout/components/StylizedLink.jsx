import React from 'react';
import { Link } from 'react-router-dom';

const StylizedLink = ({ children, to, ...styleProps }) => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <LinkStyled to={to} {...styleProps} onClick={handleClick}>
      {children}
    </LinkStyled>
  );
}

const LinkStyled = styled(Link)`
 
`;

export default StylizedLink;
