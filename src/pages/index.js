import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Local imports
import styles from "./index.module.css";

// Components
import Sdks from "../components/sdks";
import Blog from "../components/blog/blog";
import SarufiPlayground from "../components/playground";
import OtherCompanies from "../components/othercompanies";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroBannerTextContainer}>
        <h1 className={styles.heroTitle}>Get started with Sarufi</h1>
        <p className={styles.heroBannerText}>{siteConfig.tagline}</p>
      </div>
      <div className={styles.heroImageCont}>
        <div className={styles.heroImage}>
          <img
            src="img/homepage/hero.png"
            alt="Sarufi Hero"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </header>
  );
}

function VideoTutorial() {
  return (
    <section className={styles.videoContainer}>
      <div className={styles.videoPart}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            width: "100%",
            height: "300px",
            borderRadius: "4px",
            position: "relative",
          }}
        >
          <img
            src="img/homepage/sarufi logo.png"
            alt="Sarufi Logo"
            style={{
              width: "200px",
            }}
          />
          <a
            href="https://youtu.be/Gtg199orO5c?si=4XOHW6at4IQlHX2w"
            target="_blank"
            rel="noreferrer"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "150px",
              height: "150px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              style={{
                fill: "red",
              }}
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.videoPart}>
        <h2>How to Create a Chatbot without Code using SARUFI AI</h2>
        <p>
          SARUFI is a Platform for African developers to build conversational
          chatbots around African languages and deploy the chatbot to messaging
          platforms like WhatsApp and Telegram
        </p>
        <a
          href="https://youtube.com/playlist?list=PLeHPyjol4_fXXiMBwb3Wc8KYiw_nB_4Ye&si=LV7xSyTMCUWKt-RW"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "#2776ea",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          View More
          <span
            style={{
              marginLeft: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaWords}>
        <p
          style={{
            fontSize: ".6rem",
          }}
        >
          Cutting-Edge Chatbots in minutes today!
        </p>
        <h2>Conversational Power with Sarufi</h2>
        <p>
          Ready to revolutionize your chatbot game? Dive into Sarufi now and
          elevate your user interactions to the next level.
        </p>
        <a
          href="https://sarufi.io"
          style={{
            backgroundColor: "#050C35",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "1rem",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Get started
        </a>
      </div>
      <div className={styles.ctaImageCont}>
        <div className={styles.ctaImagePos}>
          <img
            src="img/homepage/cta illustration.png"
            alt="Sarufi CTA"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sarufi is a Conversational AI platform tailored to excel at African languages"
      wrapperClassName="homepage"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Sdks />
        <OtherCompanies />
        <section className={styles.lowerPartSection}>
          <SarufiPlayground />
          <VideoTutorial />
          <Blog />
        </section>
        <CTA />
      </main>
    </Layout>
  );
}
