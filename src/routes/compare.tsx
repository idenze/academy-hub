import { createFileRoute, Link } from "@tanstack/react-router";
import { AcademyShell } from "@/components/academy-shell";
import { PageIntro } from "@/components/academy-ui";
import { cultures } from "@/data/academy";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/compare")({ head: () => meta("Compare cultures", "Compare Igbo, Yoruba and Edo societies by political organisation, religion, art and colonial experience."), component: Page });
const rows = ["Geography and regions", "Political organisation", "Religion and worldview", "Archaeology", "Art, architecture and technology", "Colonial and modern history"];
function Page() { return <AcademyShell><PageIntro eyebrow="Compare cultures" title="Structured comparison, grounded in evidence." description="Where evidence is thin, we say so rather than fill the gap." />
<section className="section-pad"><div className="site-wrap overflow-x-auto"><table className="compare-table"><thead><tr><th scope="col">Dimension</th>{cultures.map((c) => <th key={c.slug} scope="col"><Link to="/cultures/$slug" params={{ slug: c.slug }}>{c.name}</Link></th>)}</tr></thead><tbody>{rows.map((r) => <tr key={r}><th scope="row">{r}</th>{cultures.map((c) => <td key={c.slug}>{c.facts[r] ?? <span className="text-muted-foreground">Evidence under review</span>}</td>)}</tr>)}</tbody></table></div></section></AcademyShell>; }
