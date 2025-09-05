import React from "react";

export default function Cloudflare() {
    return (
        <a
            href="https://www.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Cloudflare and Microsoft Azure"
            className="cloudflare-powered"
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "6px 12px",
                borderRadius: "999px",
                fontFamily:
                    "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                color: "#ffffff",
                background: "rgba(15, 23, 42, 0.4)", 
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)", 
                WebkitBackdropFilter: "blur(10px)", 
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.12s ease, box-shadow 0.12s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 30px rgba(0,0,0,0.2)";
            }}
        >
            <img
                src="https://usenocturne.com/logo-cluster/dark/cloudflare.svg"
                alt="Cloudflare logo"
                style={{
                    height: "50px",
                    width: "auto",
                    flexShrink: 0,
                }}
            />
            <span style={{ letterSpacing: "0.01em" }}>Powered by Cloudflare and Microsoft Azure</span>
        </a>
    );
}

export { Cloudflare };
