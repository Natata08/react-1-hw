"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";

const footerPageItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about_us",
  },
  {
    title: "Destination",
    link: "/destination",
  },
  {
    title: "NASA Collaboration",
    link: "/nasa_collaboration",
  },
];

const socialMediaItems = [
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "socialmedia/facebook-icon.png",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "socialmedia/instagram-icon.png",
  },
  {
    url: "https://tiktok.com",
    title: "TikTok",
    icon: "socialmedia/tiktok-icon.png",
  },
  {
    url: "https://google.com",
    title: "Google",
    icon: "socialmedia/google-icon.png",
  },
  {
    url: "https://www.linkedin.com",
    title: "LinkedIn",
    icon: "socialmedia/linkedin-icon.png",
  },
];

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <Link href={url} target='_blank'>
        <img src={icon} alt={`${title} logo`} width={25} height={25}></img>
      </Link>
    </li>
  );
};

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {footerPageItems.map((footerPageItem, index) => (
            <li key={`footerPageItem-${index}`}>
              <Link href={footerPageItem.link}>{footerPageItem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaItems.map((socialMediaItem) => (
            <SocialMediaItem
              key={socialMediaItem.title}
              url={socialMediaItem.url}
              title={socialMediaItem.title}
              icon={socialMediaItem.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
