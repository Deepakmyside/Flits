import React from 'react'

export default function FlitLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Flit logo">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path d="M9 9h8a6 6 0 0 1 0 12H9V9z" fill="white" fillOpacity="0.9"/>
      <circle cx="17" cy="15" r="3" fill="#05070D" fillOpacity="0.8"/>
      <circle cx="17" cy="15" r="1.2" fill="white"/>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
