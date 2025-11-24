"use client"

import { motion } from 'framer-motion'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <motion.button whileHover={{ scale: 1.04 }} className={`inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl font-semibold btn-scale ${className}`} {...rest}>
      {children}
    </motion.button>
  )
}
