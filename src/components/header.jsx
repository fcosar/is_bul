import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2> * İŞİNİ BUL  *</h2>
      <div>
        <Link to={'/'}>İş Listesi</Link>
        <Link to={'/add-job'}>İş Ekle</Link>
      </div>
    </header>
  );
};

export default Header;