import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px",
      background: "linear-gradient(180deg,#f7fbff 0%,#ffffff 100%)",
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#0f172a",
    },
    card: {
      textAlign: "center",
      maxWidth: 920,
      width: "100%",
      padding: "40px",
      borderRadius: 16,
      boxShadow: "0 8px 30px rgba(16,24,40,0.08)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85))",
      display: "flex",
      gap: 32,
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    art: {
      width: 180,
      height: 180,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at 30% 20%, #eef2ff 0%, #ffffff 40%)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
      fontSize: 48,
      color: "#6366f1",
      flexShrink: 0,
    },
    code: {
      fontSize: 72,
      fontWeight: 700,
      lineHeight: 1,
      margin: 0,
      background: "linear-gradient(90deg,#6366f1,#06b6d4)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
    content: {
      maxWidth: 540,
      textAlign: "left",
    },
    h1: {
      margin: "0 0 8px 0",
      fontSize: 22,
      fontWeight: 700,
      color: "#0f172a",
    },
    p: {
      margin: 0,
      color: "#475569",
      lineHeight: 1.6,
    },
    actions: {
      marginTop: 20,
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap",
    },
    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      background: "linear-gradient(90deg,#6366f1,#06b6d4)",
      color: "white",
      border: "none",
      borderRadius: 10,
      cursor: "pointer",
      fontWeight: 600,
      boxShadow: "0 6px 18px rgba(99,102,241,0.18)",
    },
    secondaryBtn: {
      padding: "10px 14px",
      background: "transparent",
      border: "1px solid rgba(15,23,42,0.06)",
      color: "#0f172a",
      borderRadius: 10,
      cursor: "pointer",
    },
    smallNote: {
      marginTop: 12,
      color: "#94a3b8",
      fontSize: 13,
    },
  };

  return (
    <main style={styles.page} role="main">
      <div style={styles.card} aria-labelledby="notfound-title">
        <div style={styles.art} aria-hidden="true">
          <div style={styles.code}>404</div>
        </div>

        <div style={styles.content}>
          <h1 id="notfound-title" style={styles.h1}>
            Oops — page not found
          </h1>
          <p style={styles.p}>
            The page you tried to open does not exist. It might have been moved or removed.
            Use the button below to return to the home page or go back to the previous page.
          </p>

          <div style={styles.actions}>
            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/")}
              aria-label="Go to home page"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Go to Home
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              Go back
            </button>
          </div>

          <div style={styles.smallNote}>
            Tip: Check the URL for typos or return to the homepage to continue browsing.
          </div>
        </div>
      </div>
    </main>
  );
}


