import { useState } from "react";
import {
  Button,
  Badge,
  Card,
  Input,
  Tabs,
  Modal,
  Accordion,
  StatsCard,
  Skeleton,
} from "../components/ui";
import { ComponentsExplorer } from "../app/components-explorer";
export default function Demo({ id }: { id: string; onBack: () => void }) {
  const [count, setCount] = useState(0),
    [text, setText] = useState(""),
    [tab, setTab] = useState("overview"),
    [open, setOpen] = useState(false),
    [copied, setCopied] = useState(false);
  const name = id
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
  const snippet = `import { ${name.replace(/ /g, "")} } from './components/ui/${id}';`;
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen p-8 space-y-8">
      <header>
        <p className="text-xs text-zinc-500">UI PRIMITIVES / LIVE EXAMPLE</p>
        <h1 className="text-4xl font-semibold mt-3">{name}</h1>
      </header>
      <section className="max-w-xl space-y-6 p-6 rounded-xl border border-zinc-800">
        {id === "button" && (
          <>
            <Button onClick={() => setCount((c) => c + 1)}>
              Clicked {count} times
            </Button>
            <Button variant="neo" onClick={() => setCount(0)}>
              Reset
            </Button>
          </>
        )}
        {id === "badge" && (
          <div className="flex gap-3">
            <Badge variant="emerald" dot>
              Available
            </Badge>
            <Badge variant="cyan">In progress</Badge>
            <Badge variant="amber">Review</Badge>
          </div>
        )}
        {id === "card" && (
          <Card variant="glass" hoverEffect className="p-6">
            <h2 className="text-xl">A space for your next idea.</h2>
            <p className="mt-3 text-slate-400">
              A reusable surface with glass, elevated, glow and bold variants.
            </p>
          </Card>
        )}
        {id === "input" && (
          <>
            <Input
              label="Your idea"
              placeholder="What are you making?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <p aria-live="polite">{text || "Type to try the input."}</p>
          </>
        )}
        {id === "tabs" && (
          <>
            <Tabs
              tabs={[
                { id: "overview", label: "Overview" },
                { id: "details", label: "Details" },
              ]}
              activeTab={tab}
              onChange={setTab}
            />
            <p aria-live="polite">
              {tab === "overview"
                ? "The overview panel is selected."
                : "The details panel is selected."}
            </p>
          </>
        )}
        {id === "modal" && (
          <>
            <Button onClick={() => setOpen(true)}>Open example modal</Button>
            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              title="A little room for an idea."
            >
              <p>This is an interactive modal example.</p>
              <Button onClick={() => setOpen(false)}>Done</Button>
            </Modal>
          </>
        )}
        {id === "accordion" && (
          <Accordion
            items={[
              {
                id: "one",
                title: "How do I use this?",
                content:
                  "Import the component from the source download and pass its documented props.",
              },
              {
                id: "two",
                title: "Can I change its appearance?",
                content:
                  "Yes. Edit the Tailwind classes or supply your own className.",
              },
            ]}
          />
        )}
        {id === "stats-card" && (
          <StatsCard
            label="Ideas collected"
            value="257"
            change="+7 collections"
            changeType="positive"
            description="A sample statistic, using local demo data."
          />
        )}
        {id === "skeleton" && (
          <div aria-label="Loading placeholder example" className="space-y-4">
            <Skeleton variant="circle" className="w-16 h-16" />
            <Skeleton variant="text" className="w-3/4" />
            <Skeleton variant="text" className="w-1/2" />
            <Skeleton className="h-28 w-full" />
          </div>
        )}
      </section>
      <div>
        <pre className="text-xs overflow-x-auto text-cyan-300">{snippet}</pre>
        <Button
          variant="outline"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(snippet);
              setCopied(true);
            } catch {
              setCopied(false);
            }
          }}
        >
          {copied ? "Copied" : "Copy import"}
        </Button>
      </div>
      <details>
        <summary className="cursor-pointer text-sm text-zinc-400">
          All original component examples
        </summary>
        <ComponentsExplorer />
      </details>
    </div>
  );
}
