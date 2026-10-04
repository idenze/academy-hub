import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AcademyShell } from "@/components/academy-shell";
import { PageIntro } from "@/components/academy-ui";
import { mapSites } from "@/data/academy";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/map")({ head: () => meta("Interactive map", "Historical states, archaeological sites and ritual centres of southern Nigeria."), component: Page });
function Page() { const [sel, setSel] = useState(0); const s = mapSites[sel];
return <AcademyShell><PageIntro eyebrow="Interactive map" title="Sites, states and centres" description="Positions are schematic. Boundaries of historical states were fluid and are not drawn with false precision." />
<section className="section-pad"><div className="site-wrap grid gap-8 lg:grid-cols-[1fr_20rem]"><div className="map-canvas" role="group" aria-label="Schematic map">{mapSites.map((m, i) => <button key={m.name} style={{ left: `${m.x}%`, top: `${m.y}%` }} aria-pressed={sel === i} onClick={() => setSel(i)}><span className="sr-only">{m.name}</span></button>)}<span className="map-label" style={{ left: "52%", top: "86%" }}>Niger Delta</span></div>
<aside className="details-aside"><p className="eyebrow text-primary">{s.kind}</p><h3 className="mt-2 text-2xl">{s.name}</h3><Link className="text-link mt-4" to="/cultures/$slug" params={{ slug: s.culture }}>Culture profile</Link><h4 className="mt-8 text-xs font-bold uppercase tracking-caps text-muted-foreground">Text alternative</h4><ul className="mt-2 grid gap-1 text-sm">{mapSites.map((m, i) => <li key={m.name}><button className="underline-offset-2 hover:underline" onClick={() => setSel(i)}>{m.name}</button> — {m.kind}</li>)}</ul></aside></div></section></AcademyShell>; }
