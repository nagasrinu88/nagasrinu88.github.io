// filepath: /c:/Users/nagas/OneDrive/Documents/Projects/nagasrinu88.github.io/src/components/Layout.js
import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import Image from 'next/image';

const Layout = ({ fullName, children }) => {
return (
    <div className={`${styles.container} ${styles.theme}`} >
        <Head>
            <title>{fullName} - Profile</title>
            <meta name="description" content="My personal website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
            <h1>{fullName}</h1>
        </header>
        <div className={styles.content}>
            <nav className={`${styles.sidebar} ${styles.stickySidebar}`}>
                <ul>
                    <li>
                        <Image
                            src="https://media.licdn.com/dms/image/v2/C5603AQEjc5d0ayeMTg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517396071633?e=1741824000&v=beta&t=e83iiHe_Wo0b5t9DaYLoEBQq8vNuL0AMwJhstYN33I4"
                            alt="Nagasrinivas"
                            width={200}
                            height={200}
                            className={styles.roundedImage}
                        />
                    </li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#profile-picture">Profile Picture</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <footer className={styles.footer}>
            <p>&copy; 2024 Nagasrinivas</p>
        </footer>
    </div>
);
};

export default Layout;