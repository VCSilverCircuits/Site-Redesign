import React from "react";
import { motion } from "framer-motion";
import CloudflareLogo from "../assets/Logo/cloudflare.svg";

export default function Cloudflare() {
    return (
        <div className="flex flex-col items-center gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-lg"
            >
            </motion.div>

            <motion.a
                href="https://www.cloudflare.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Powered by Cloudflare"
                className="cloudflare-powered"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                    y: -3,
                    scale: 1.05,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "10px 22px",
                    borderRadius: "999px",
                    fontFamily:
                        "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#ffffff",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(18px) saturate(160%)",
                    WebkitBackdropFilter: "blur(18px) saturate(160%)",
                    boxShadow: "0 4px 25px rgba(0,0,0,0.3), inset 0 0 12px rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >

                <motion.img
                    src={CloudflareLogo}
                    alt="Cloudflare logo"
                    style={{
                        height: "42px",
                        width: "auto",
                        flexShrink: 0,
                        zIndex: 1,
                    }}
                    whileHover={{ rotate: [0, -8, 8, -4, 4, 0] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                <motion.span style={{ zIndex: 1 }}>
                    Powered by Cloudflare
                </motion.span>
            </motion.a>
        </div>
    );
}

export { Cloudflare };
