import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="footer__name">Charlie Leversha</span>
        <div className="footer__links">
          <Link href="/work">Work</Link>
          <Link href="/ideas">Ideas</Link>
          <a href="mailto:leversha.charles@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
