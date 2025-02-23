"use client"

import { useState } from "react"
import styles from "./page.module.css"
import ScamVisual from "../components/scam/ScamVisual"
import LearnMore from "../components/scam/LearnMore"

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
        <ScamVisual />
        <LearnMore />
      </main>

      <footer className={styles.footer}>
        <p>This test was created in partnership with the Federal Trade Commission (FTC)</p>
      </footer>
    </div>
  )
}

