'use client'

import { useRef, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

const THRESHOLD = 80

export default function DraggableHero() {
  const { toggle } = useTheme()
  const startX = useRef<number | null>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const onMove = (x: number) => {
      if (startX.current === null || !nameRef.current) return
      const dx = x - startX.current
      nameRef.current.style.transition = 'color 0.65s'
      nameRef.current.style.transform = `translateX(${dx * 0.38}px)`
    }

    const onEnd = (x: number) => {
      if (startX.current === null || !nameRef.current) return
      const dx = x - startX.current
      nameRef.current.style.transition =
        'color 0.65s, transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1)'
      nameRef.current.style.transform = 'translateX(0)'
      if (Math.abs(dx) > THRESHOLD) toggle()
      startX.current = null
    }

    const handleMouseMove = (e: MouseEvent) => onMove(e.clientX)
    const handleMouseUp   = (e: MouseEvent) => onEnd(e.clientX)
    const handleTouchMove = (e: TouchEvent) => onMove(e.touches[0].clientX)
    const handleTouchEnd  = (e: TouchEvent) => onEnd(e.changedTouches[0].clientX)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup',   handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend',  handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup',   handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend',  handleTouchEnd)
    }
  }, [toggle])

  return (
    <>
      <h1
        ref={nameRef}
        className="hero__draggable"
        onMouseDown={e => { startX.current = e.clientX; e.preventDefault() }}
        onTouchStart={e => { startX.current = e.touches[0].clientX }}
      >
        Charlie Leversha
      </h1>
      <p className="hero__drag-hint">← drag to flip →</p>
    </>
  )
}
