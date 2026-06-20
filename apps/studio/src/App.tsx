import { Button } from '@combined/ui'
import { Badge } from '@combined/ui'

export default function App() {
  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 24px' }}>

      <header style={{ borderBottom: '3px solid var(--line)', paddingBottom: 28, marginBottom: 48 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, color: 'var(--royal)', marginBottom: 16 }}>
          Combined Design System
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 700, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: -1 }}>
          Studio
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 16, margin: 0 }}>
          Component library · v0.1.0 · React + Tailwind + Radix
        </p>
      </header>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--ink)', borderTop: '1px solid var(--line)', paddingTop: 8, marginBottom: 24 }}>
          Buttons
        </h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="default">Default</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--ink)', borderTop: '1px solid var(--line)', paddingTop: 8, marginBottom: 24 }}>
          Badges
        </h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="royal">Round 2</Badge>
          <Badge variant="gold">Featured</Badge>
          <Badge variant="green">Category B</Badge>
          <Badge variant="pos">Win</Badge>
          <Badge variant="neg">Loss</Badge>
          <Badge variant="soft">Neutral</Badge>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 32, marginTop: 64 }}>
        <p style={{ color: 'var(--muted)', fontSize: 13, margin: 0 }}>
          Combined AppKit · Scaffold proven ✓ — more components coming.
        </p>
      </footer>

    </div>
  )
}
