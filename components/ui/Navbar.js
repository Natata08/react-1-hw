"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

const NavItem = ({ title, link, isActive, number }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{String(number).padStart(2, "0")}</b> {title}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href='/'>
          <img src='/shared/logo.svg' alt='' /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((navbarItem, index) => (
            <NavItem
              key={`navbarItem-${index}`}
              title={navbarItem.title}
              link={navbarItem.link}
              isActive={navbarItem.link === currentPath}
              number={index + 1}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
