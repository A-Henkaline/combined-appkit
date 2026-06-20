import { useState } from 'react'
import {
  Button, Badge, StatCard, Alert, Avatar,
  Label, Input, Textarea, Select, Field, Switch, Checkbox,
  Progress, Tabs, TabsList, TabsTrigger, TabsContent,
  Tooltip, TooltipProvider,
  Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator,
  Skeleton, SkeletonText, SkeletonTitle, SkeletonAvatar, SkeletonButton, SkeletonStat,
  Spinner, EmptyState,
  DataTable, DataTableHead, DataTableBody, DataTableHeadCell, DataTableRow, DataTableCell,
} from '@combined/ui'

function Section({ id, num, title, intro, children }: {
  id: string; num: string; title: string; intro?: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="py-12 border-b border-line-soft">
      <div className="flex items-baseline gap-4 border-t-2 border-line pt-3 mb-2">
        <span className="font-mono text-[13px] font-bold text-royal">{num}</span>
        <h2 className="font-display text-[30px] font-bold text-ink m-0 tracking-tight">{title}</h2>
      </div>
      {intro && <p className="text-base text-muted max-w-[680px] mt-2 mb-7">{intro}</p>}
      {children}
    </section>
  )
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[11px] font-bold uppercase tracking-[1.5px] text-ink border-t border-line pt-2 mt-9 mb-4">
      {children}
    </h3>
  )
}

function Demo({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-surface rounded-lg p-6 shadow-clay-sm mb-3 ${className}`}>
      {children}
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-3 flex-wrap items-center">{children}</div>
}

export default function App() {
  const [switchOn, setSwitchOn] = useState(true)
  const [checked, setChecked] = useState(true)

  return (
    <TooltipProvider>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px' }}>

        {/* MASTHEAD */}
        <header className="border-b-[3px] border-line pt-14 pb-7 mb-2">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <span className="font-display text-[13px] font-bold uppercase tracking-[3px] text-royal flex items-center gap-[10px] mb-4">
                <span className="w-[26px] h-[26px] rounded-sm bg-royal shadow-clay-sm inline-block relative">
                  <span className="absolute inset-[7px] rounded-[3px] bg-gold" />
                </span>
                Combined AppKit
              </span>
              <h1 className="font-display text-[52px] font-bold text-ink m-0 mb-[6px] tracking-tight leading-none">Studio</h1>
              <p className="text-base text-muted m-0">Component library · v0.1.0 · React + Tailwind + Radix</p>
            </div>
            <span className="font-body text-[11px] font-bold uppercase tracking-[1px] text-royal bg-surface rounded-pill px-4 py-[7px] shadow-clay-sm whitespace-nowrap">
              v0.1.0 · Blue · Olive · Gold
            </span>
          </div>

          {/* TOC */}
          <nav className="pt-6 pb-2">
            <ol className="list-none m-0 p-0 grid gap-[10px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
              {[
                'Buttons','Badges','Stat Cards','Forms','Alerts',
                'Tabs','Overlays','Data Table','Loading','Empty States',
              ].map((label, i) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block no-underline text-ink font-display font-bold text-sm bg-surface rounded-md px-4 py-[14px] shadow-clay-sm border-l-4 border-royal transition-all duration-fast hover:-translate-y-[2px] hover:shadow-clay"
                  >
                    <span className="text-gold-dark font-mono text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </header>

        {/* 01 BUTTONS */}
        <Section id="buttons" num="01" title="Buttons" intro="Primary is blue. Accent is gold — reserve for the single most important action per screen. Secondary is army green. Ghost is quiet. Danger is destructive.">
          <Demo>
            <p className="font-mono text-[11px] text-muted mb-3 w-full">Variants</p>
            <Row>
              <Button variant="primary">Primary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </Row>
          </Demo>
          <Demo>
            <p className="font-mono text-[11px] text-muted mb-3 w-full">Sizes</p>
            <Row>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="default">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
            </Row>
          </Demo>
          <Demo>
            <p className="font-mono text-[11px] text-muted mb-3 w-full">With spinner (loading state)</p>
            <Row>
              <Button variant="primary" className="flex items-center gap-[10px] cursor-default opacity-85">
                <Spinner size="sm" className="border-white/30 border-t-white" />
                Saving…
              </Button>
            </Row>
          </Demo>
        </Section>

        {/* 02 BADGES */}
        <Section id="badges" num="02" title="Badges" intro="Brand badges label category or status. Semantic badges mark outcomes. Soft badges sit quietly inside cards.">
          <Demo>
            <Row>
              <Badge variant="royal">Round 2</Badge>
              <Badge variant="gold">Featured</Badge>
              <Badge variant="green">Category B</Badge>
              <Badge variant="pos">Win</Badge>
              <Badge variant="neg">Loss</Badge>
              <Badge variant="soft">Neutral</Badge>
            </Row>
          </Demo>
        </Section>

        {/* 03 STAT CARDS */}
        <Section id="stat-cards" num="03" title="Stat Cards" intro="Brand-filled cards rotate blue, gold, and olive for visual rhythm. Plain cards keep the blue figure on white. Deltas always use semantic green/red — never brand color.">
          <Demo>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
              <StatCard variant="royal" value="4–2" label="Series lead" delta="+2 games" />
              <StatCard variant="gold"  value="3.4" label="Goals / game" delta="▲ +0.6" deltaType="pos" />
              <StatCard variant="green" value="91%" label="PK success" delta="3rd in league" />
              <StatCard variant="gold"  value="22.4" label="Shots / game" delta="▼ −1.1" deltaType="neg" />
            </div>
          </Demo>
          <Demo>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
              <StatCard variant="plain" value="48"  label="Wins"   delta="▲ +5" deltaType="pos" />
              <StatCard variant="plain" value="26"  label="Losses" delta="▼ +3" deltaType="neg" />
              <StatCard variant="plain" value="102" label="Points" delta="▲ +13" deltaType="pos" />
            </div>
          </Demo>
        </Section>

        {/* 04 FORMS */}
        <Section id="forms" num="04" title="Forms" intro="Inputs are pressed-in wells — they read as places to put something. Focus draws a royal ring. Toggles and checkboxes fill royal when active with a gold mark.">
          <Demo>
            <Field><Label>Team name</Label><Input defaultValue="Buffalo Sabres" /></Field>
            <Field>
              <Label>Season</Label>
              <Select defaultValue="2025-26">
                <option>2025–26</option>
                <option>2024–25</option>
              </Select>
            </Field>
            <Field><Label>Notes</Label><Textarea defaultValue="Strong second-round showing against Toronto." /></Field>
            <div className="flex gap-6 mt-2 flex-wrap">
              <label className="flex items-center gap-[10px] cursor-pointer">
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
                <span className="text-[13px] text-body">Email alerts</span>
              </label>
              <label className="flex items-center gap-[10px] cursor-pointer">
                <Checkbox checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
                <span className="text-[13px] text-body">Track power play</span>
              </label>
            </div>
          </Demo>
        </Section>

        {/* 05 ALERTS */}
        <Section id="alerts" num="05" title="Alerts" intro="Informational alerts use brand blue. Status alerts use semantic colors. The icon block carries the color; the body stays neutral.">
          <Demo className="grid gap-3">
            <Alert variant="info" title="Heads up">You can add components to your app using the CLI.</Alert>
            <Alert variant="pos"  title="Saved">Your dashboard changes have been saved successfully.</Alert>
            <Alert variant="neg"  title="Failed">Couldn't reach the data source. Check your connection.</Alert>
            <Alert variant="warn" title="Pending">This season's stats are provisional until the series ends.</Alert>
          </Demo>
        </Section>

        {/* 06 TABS */}
        <Section id="tabs" num="06" title="Tabs" intro="Segmented control pattern. Active tab lifts with a clay shadow; inactive tabs are muted text on the pressed background.">
          <Demo>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="roster">Roster</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="text-sm text-muted mt-4">Season overview stats and highlights go here.</p>
              </TabsContent>
              <TabsContent value="roster">
                <p className="text-sm text-muted mt-4">Full roster and player stats go here.</p>
              </TabsContent>
              <TabsContent value="schedule">
                <p className="text-sm text-muted mt-4">Upcoming game schedule goes here.</p>
              </TabsContent>
            </Tabs>
          </Demo>
        </Section>

        {/* 07 OVERLAYS */}
        <Section id="overlays" num="07" title="Overlays" intro="Tooltips, dropdowns, and modals each live on their own z-index tier so they never fight each other.">
          <Sub>Tooltip</Sub>
          <Demo>
            <Row>
              <Tooltip content="Saves to your profile">
                <Button variant="primary">Save stats</Button>
              </Tooltip>
              <Tooltip content="Downloads as CSV">
                <Button variant="ghost">Export</Button>
              </Tooltip>
              <Tooltip content="Eastern Conference" side="right">
                <Badge variant="royal" className="cursor-default">Round 2</Badge>
              </Tooltip>
              <Tooltip content="Hover avatars too" side="bottom">
                <Avatar initials="AH" />
              </Tooltip>
            </Row>
          </Demo>

          <Sub>Dropdown</Sub>
          <Demo>
            <Row>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">Actions ▾</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View game log</DropdownMenuItem>
                  <DropdownMenuItem>Export CSV</DropdownMenuItem>
                  <DropdownMenuItem>Share dashboard</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem danger>Remove team</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="primary">Season ▾</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>2025–26</DropdownMenuItem>
                  <DropdownMenuItem>2024–25</DropdownMenuItem>
                  <DropdownMenuItem>2023–24</DropdownMenuItem>
                  <DropdownMenuItem>2022–23</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Row>
          </Demo>

          <Sub>Modal</Sub>
          <Demo>
            <Row>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="primary">Open modal</Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Export game log</ModalTitle>
                    <ModalClose asChild>
                      <button className="bg-canvas border-none cursor-pointer text-muted w-8 h-8 rounded-sm shadow-clay-sm flex items-center justify-center hover:shadow-clay transition-shadow duration-fast text-sm">✕</button>
                    </ModalClose>
                  </ModalHeader>
                  <ModalBody>
                    Choose a format to download all 82 games from the 2025–26 season. CSV works with Excel and Google Sheets; JSON is best for further processing.
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose>
                    <Button variant="accent">Download CSV</Button>
                    <Button variant="primary">Download JSON</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Modal>
                <ModalTrigger asChild>
                  <Button variant="danger">Confirm action</Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Remove team?</ModalTitle>
                    <ModalClose asChild>
                      <button className="bg-canvas border-none cursor-pointer text-muted w-8 h-8 rounded-sm shadow-clay-sm flex items-center justify-center text-sm">✕</button>
                    </ModalClose>
                  </ModalHeader>
                  <ModalBody>
                    This will permanently delete <strong>Buffalo Sabres</strong> and all associated game logs. This action cannot be undone.
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild><Button variant="ghost">Cancel</Button></ModalClose>
                    <Button variant="danger">Remove team</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Row>
          </Demo>
        </Section>

        {/* 08 DATA TABLE */}
        <Section id="data-table" num="08" title="Data Table" intro="Swiss column headers — black, hairline-ruled — with clay-soft rows. Badges for outcome, bold numbers for key metrics.">
          <Demo>
            <DataTable>
              <DataTableHead>
                <DataTableRow>
                  <DataTableHeadCell>Date</DataTableHeadCell>
                  <DataTableHeadCell>Opponent</DataTableHeadCell>
                  <DataTableHeadCell>Result</DataTableHeadCell>
                  <DataTableHeadCell>Score</DataTableHeadCell>
                  <DataTableHeadCell>Shots</DataTableHeadCell>
                </DataTableRow>
              </DataTableHead>
              <DataTableBody>
                {[
                  { date: 'Jun 17', opp: '@ Toronto', result: 'W', score: '3–2', shots: 24 },
                  { date: 'Jun 15', opp: 'vs Toronto', result: 'L', score: '1–2', shots: 19 },
                  { date: 'Jun 13', opp: '@ Toronto', result: 'W', score: '5–1', shots: 27 },
                  { date: 'Jun 11', opp: 'vs Toronto', result: 'W', score: '4–3', shots: 21 },
                ].map((row) => (
                  <DataTableRow key={row.date}>
                    <DataTableCell>{row.date}</DataTableCell>
                    <DataTableCell>{row.opp}</DataTableCell>
                    <DataTableCell>
                      <Badge variant={row.result === 'W' ? 'pos' : 'neg'}>{row.result}</Badge>
                    </DataTableCell>
                    <DataTableCell numeric>{row.score}</DataTableCell>
                    <DataTableCell numeric>{row.shots}</DataTableCell>
                  </DataTableRow>
                ))}
              </DataTableBody>
            </DataTable>
          </Demo>

          <Sub>Progress bars</Sub>
          <Demo className="grid gap-4">
            <div>
              <p className="font-display font-bold text-xs text-muted mb-[6px]">Season completion</p>
              <Progress value={72} />
            </div>
            <div>
              <p className="font-display font-bold text-xs text-muted mb-[6px]">Playoff push</p>
              <Progress value={40} accent />
            </div>
          </Demo>
        </Section>

        {/* 09 LOADING */}
        <Section id="loading" num="09" title="Loading States" intro="Skeletons for content placeholders — they match the shape of real content and prevent layout shift. Spinners for actions in progress.">
          <Sub>Skeleton — card</Sub>
          <Demo>
            <div className="bg-surface rounded-lg p-[22px] shadow-clay-sm">
              <div className="flex gap-4 mb-4">
                <SkeletonAvatar />
                <div className="flex-1">
                  <SkeletonTitle />
                  <SkeletonText style={{ width: '80%' }} />
                </div>
              </div>
              <SkeletonText />
              <SkeletonText style={{ width: '90%' }} />
              <SkeletonText style={{ width: '60%' }} />
              <div className="mt-[18px]"><SkeletonButton /></div>
            </div>
          </Demo>

          <Sub>Skeleton — stat grid</Sub>
          <Demo>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
              <SkeletonStat /><SkeletonStat /><SkeletonStat /><SkeletonStat />
            </div>
          </Demo>

          <Sub>Spinner</Sub>
          <Demo>
            <Row>
              <Spinner />
              <Spinner accent />
              <Spinner size="lg" />
            </Row>
          </Demo>
        </Section>

        {/* 10 EMPTY STATES */}
        <Section id="empty-states" num="10" title="Empty States" intro="Every list and panel needs an empty state: a pressed icon well, a clear headline, one line of context, and a primary action.">
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <EmptyState
              icon="📋"
              title="No games logged yet"
              description="Add your first game to start tracking stats and building your season timeline."
              action={<Button variant="primary">Add game</Button>}
            />
            <EmptyState
              icon="🔍"
              title='No results for "Maple Leafs"'
              description="Try a different team name or check your spelling."
              action={<Button variant="ghost">Clear search</Button>}
            />
            <EmptyState
              error
              title="Stats unavailable"
              description="We couldn't load data for this season. It may still be syncing."
              action={<><Button variant="primary">Try again</Button><Button variant="ghost">Go back</Button></>}
            />
          </div>
        </Section>

        <footer className="py-12 text-center border-t border-line-soft mt-4">
          <p className="text-muted text-[13px] m-0">
            Combined AppKit · Studio · v0.1.0
          </p>
        </footer>

      </div>
    </TooltipProvider>
  )
}
