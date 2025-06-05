'use client'

import { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import { motion } from 'framer-motion'

interface TimeUnit {
  value: number
  label: string
}

export default function Countdown() {
  const weddingDate = new Date('2025-08-01T16:00:00')
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const days = differenceInDays(weddingDate, now)
      const hours = differenceInHours(weddingDate, now) % 24
      const minutes = differenceInMinutes(weddingDate, now) % 60
      const seconds = differenceInSeconds(weddingDate, now) % 60

      setTimeUnits([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' }
      ])
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  return (
    <section id="countdown" className="section pattern-bg" style={{ backgroundColor: 'var(--warm-beige)' }}>
      <div className="section-container text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Countdown to Our Big Day
        </motion.h2>
        
        <div className="countdown-grid">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="countdown-item"
            >
              <div className="countdown-value">
                {unit.value}
              </div>
              <div className="countdown-label">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}