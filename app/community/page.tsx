"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styles from "./page.module.css"

type Submission = {
  id: number
  url: string
  votes: { up: number; down: number }
  status: "pending" | "verified" | "scam"
  comments: string[]
}

export default function CommunityPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: 1,
      url: "https://example-scam.com",
      votes: { up: 5, down: 20 },
      status: "scam",
      comments: ["This site tried to steal my information!", "Definitely a scam, stay away!"],
    },
    {
      id: 2,
      url: "https://legitimate-site.com",
      votes: { up: 15, down: 2 },
      status: "verified",
      comments: ["I've used this site before, it's legitimate.", "Seems safe to me."],
    },
    {
      id: 3,
      url: "https://unknown-website.com",
      votes: { up: 3, down: 4 },
      status: "pending",
      comments: ["Not sure about this one.", "Need more information."],
    },
  ])

  const [newUrl, setNewUrl] = useState("")
  const [newComment, setNewComment] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>(submissions)

  useEffect(() => {
    const filtered = submissions.filter((submission) => submission.url.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredSubmissions(filtered)
  }, [searchTerm, submissions])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newUrl) {
      const newSubmission: Submission = {
        id: submissions.length + 1,
        url: newUrl,
        votes: { up: 0, down: 0 },
        status: "pending",
        comments: [],
      }
      setSubmissions([...submissions, newSubmission])
      setNewUrl("")
    }
  }

  const handleVote = (id: number, voteType: "up" | "down") => {
    setSubmissions(
      submissions.map((sub) =>
        sub.id === id
          ? {
              ...sub,
              votes: {
                ...sub.votes,
                [voteType]: sub.votes[voteType] + 1,
              },
            }
          : sub,
      ),
    )
  }

  const handleAddComment = (id: number) => {
    if (newComment) {
      setSubmissions(
        submissions.map((sub) =>
          sub.id === id
            ? {
                ...sub,
                comments: [...sub.comments, newComment],
              }
            : sub,
        ),
      )
      setNewComment("")
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Scam Detection Community</h1>
      </header>

      <form onSubmit={handleSubmit} className={styles.submitForm}>
        <h2 className={styles.submitTitle}>Submit a new URL for review</h2>
        <div className={styles.inputGroup}>
          <input
            type="url"
            placeholder="Enter URL to check"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a URL"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.submissionList}>
        {filteredSubmissions.map((submission) => (
          <div key={submission.id} className={styles.submissionItem}>
            <div className={styles.submissionHeader}>
              <a href={submission.url} target="_blank" rel="noopener noreferrer" className={styles.submissionUrl}>
                {submission.url}
              </a>
              <div className={styles.voteButtons}>
                <button className={styles.voteButton} onClick={() => handleVote(submission.id, "up")}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                  {submission.votes.up}
                </button>
                <button className={styles.voteButton} onClick={() => handleVote(submission.id, "down")}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  {submission.votes.down}
                </button>
              </div>
            </div>
            <div>
              <span
                className={`${styles.statusBadge} ${styles[`status${submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}`]}`}
              >
                {submission.status}
              </span>
              {submission.status === "scam" && (
                <span className={styles.warningText}>
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
                  Potential scam detected
                </span>
              )}
            </div>
            <div className={styles.commentList}>
              {submission.comments.map((comment, index) => (
                <p key={index} className={styles.comment}>
                  "{comment}"
                </p>
              ))}
            </div>
            <div className={styles.commentForm}>
              <textarea
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className={styles.commentInput}
              />
              <button onClick={() => handleAddComment(submission.id)} className={styles.button}>
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

