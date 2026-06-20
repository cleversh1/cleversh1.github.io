'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="nav">
      <Link className="nav__brand" href="/">Charlie Leversha</Link>
      <div className="nav__links">
        <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>About</Link>
        <Link href="/work" aria-current={pathname === '/work' ? 'page' : undefined}>Work</Link>
        <Link href="/ideas" aria-current={pathname === '/ideas' ? 'page' : undefined}>Ideas</Link>
      </div>
    </nav>
  )
}
