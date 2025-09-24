import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container">
        <div className="logo">Eren Ege Özol</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.a
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;