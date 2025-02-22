"use client"

import { useState } from "react"
import styles from "./page.module.css"

export default function ScamEducationPage() {
  const [linkCopied, setLinkCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://example.com/scam-test")
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>You've Been "Scammed"!</h1>
        <p className={styles.subtitle}>Don't worry, this was just a simulation.</p>
      </header>

      <main>
        <section className={`${styles.section} ${styles.yellowSection}`}>
          <h2 className={styles.sectionTitle}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            What Made This Ad Suspicious?
          </h2>
          <ul className={styles.redFlagList}>
            <li className={styles.redFlagItem}>
              <span className={styles.redFlagNumber}>1</span>
              <p>
                <strong>Red Flag 1:</strong> It was promising something too good to be true
              </p>
            </li>
            <li className={styles.redFlagItem}>
              <span className={styles.redFlagNumber}>2</span>
              <p>
                <strong>Red Flag 2:</strong> It contained poor grammar or spelling
              </p>
            </li>
            <li className={styles.redFlagItem}>
              <span className={styles.redFlagNumber}>3</span>
              <p>
                <strong>Red Flag 3:</strong> It created a false sense of urgency
              </p>
            </li>
          </ul>
        </section>
        <section className={styles.section} style={ { alignItems: 'center', justifyContent: 'center', textAlign: 'center' } }>
          <h2 className={styles.sectionTitle}>Learn More</h2>
          <p className={styles.sectionText}>Protect yourself by learning how to prevent being scammed.</p>
          <button className={styles.learnMoreButton} style={ { alignItems: 'center', justifyContent: 'center', textAlign: 'center' } }>
            Learn How to Prevent Scams
            <svg
              className={styles.buttonIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </section>

        <section className={`${styles.section} ${styles.blueSection}`}>
          <h2 className={styles.sectionTitle}>Share the Test!</h2>
          <p className={styles.sectionText} style={ { alignItems: 'center', justifyContent: 'center', textAlign: 'center' } }>Help your friends and family learn to spot scams too.</p>
          <div className={styles.shareContainer}>
            <input type="text" value="https://example.com/scam-test" readOnly className={styles.shareInput} />
            <button onClick={handleCopyLink} className={styles.button}>
              {linkCopied ? (
                <>
                  <svg
                    className={styles.buttonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className={styles.buttonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg> 
                  Copy Link
                </>
              )}
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>This test was created in partnership with the Federal Trade Commission (FTC)</p>
      </footer>
    </div>
  )
}

