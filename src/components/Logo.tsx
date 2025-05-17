import { Link } from 'react-router-dom';
import LogoIcon from '../assets/logo-reg.inline.svg?react';

export default function Logo() {
  return (
    <Link to="/" style={{ textDecoration: `none` }}>
      <LogoIcon />
    </Link>
  );
}
