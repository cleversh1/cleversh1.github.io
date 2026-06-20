'use client'

import { useState, useRef } from 'react'
import { CATEGORIES, IDEAS, type Idea } from '@/data/ideas'

function IdeaItem({ idea }: { idea: Idea }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    if (!panelRef.current) return
    if (open) {
      panelRef.current.style.maxHeight = '0px'
    } else {
      panelRef.current.style.maxHeight = panelRef.current.scrollHeight + 'px'
    }
    setOpen(!open)
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso + 'T00:00:00')
    if (isNaN(d.getTime())) return iso
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const paragraphs = idea.body
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)

  return (
    <div className={`idea${open ? ' idea--open' : ''}`}>
      <button
        className="idea__btn"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="idea__title">{idea.title}</span>
        <span className="idea__mark" aria-hidden="true">+</span>
      </button>
      <div className="idea__panel" ref={panelRef} style={{ maxHeight: '0px' }}>
        <div className="idea__panel-inner">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          {idea.date && (
            <span className="idea__date">{formatDate(idea.date)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function IdeasAccordion() {
  return (
    <>
      {CATEGORIES.map(cat => {
        const inCat = IDEAS
          .filter(i => i.category === cat)
          .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

        return (
          <section key={cat} className="ideas-cat">
            <h2 className="ideas-cat__name">{cat}</h2>
            {inCat.length === 0 ? (
              <p className="empty-cat">Nothing here yet.</p>
            ) : (
              inCat.map(idea => <IdeaItem key={idea.title} idea={idea} />)
            )}
          </section>
        )
      })}
    </>
  )
}
