import React from 'react'

export default function Logo() {
  return (
    <>
         <svg class="absolute top-0 left-0 size-full" viewBox="0 0 100 100">
              <path
                d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                   C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                   C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                   C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
                fill="none"
                stroke="#60a5fa"
                stroke-width="2"
              ></path>
            </svg>
            <svg class="circuit-lines" viewBox="0 0 100 100">
              <path
                d="M35 40 H65 M50 40 V80
                   M35 60 H65 M25 50 H75"
                stroke="#93c5fd"
                stroke-width="1.5"
                fill="none"
              ></path>
              <circle cx="35" cy="80" r="2" fill="#93c5fd"></circle>
              <circle cx="65" cy="80" r="2" fill="#93c5fd"></circle>
            </svg>
    </>
  )
}
