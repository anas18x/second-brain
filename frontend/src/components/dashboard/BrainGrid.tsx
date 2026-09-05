import BrainCard from "@/components/dashboard/BrainCard"

const brains = [
  {
    id: "1",
    title: "A travel video I want to watch before my next trip",
    body: "",
    url: "https://youtube.com/watch?v=example",
    tags: ["travel", "fun"],
  },

  {
    id: "2",
    title:
      "A reminder: you don't need to turn every hobby into a side hustle.",
    body: "",
    url: "https://x.com/example/status/123",
    tags: ["ideas", "inspiration"],
  },

  {
    id: "3",
    title:
      "How modern databases actually handle millions of requests",
    body: "",
    url: "https://example.com/database-article",
    tags: ["tech"],
  },

  {
    id: "4",
    title: "An idea I want to build someday",
    body:
      "A small tool that helps people organize things they want to learn. Something simple, useful, and actually enjoyable to build.",
    url: "",
    tags: ["ideas"],
  },

  {
    id: "5",
    title:
      "The surprisingly simple rule behind good system design",
    body:
      "Good systems aren't necessarily the ones with the most clever architecture. Start with the simplest thing that works, understand where the pressure actually comes from, and only then introduce complexity.",
    url: "https://example.com/system-design",
    tags: ["tech", "ideas"],
  },

  {
    id: "6",
    title:
      "This video completely changed how I think about learning",
    body:
      "I used to think learning was about consuming more information. The important part is actually being able to retrieve, apply, and explain what you've learned.",
    url: "https://youtube.com/watch?v=learning",
    tags: ["inspiration", "tech"],
  },

  {
    id: "7",
    title:
      "Don't optimize your life before you've figured out what you actually want.",
    body: "",
    url: "https://x.com/example/status/456",
    tags: ["inspiration", "ideas"],
  },

  {
    id: "8",
    title:
      "Things I want to remember when building my next project",
    body:
      "Keep the architecture simple. Ship early. Don't build abstractions before they are needed. Make the boring parts boring. Good software doesn't need to look complicated to be impressive.",
    url: "",
    tags: ["tech", "ideas"],
  },

  {
    id: "9",
    title:
      "A beautiful guide to understanding distributed systems",
    body:
      "Notes from an article explaining distributed systems using simple examples instead of jumping directly into complicated terminology.",
    url: "https://example.com/distributed-systems",
    tags: ["tech"],
  },

  {
    id: "10",
    title: "Places I want to visit someday",
    body:
      "Japan, Iceland, Switzerland, and somewhere completely unexpected. I want at least one trip where I don't have a strict itinerary.",
    url: "",
    tags: ["travel"],
  },

  {
    id: "11",
    title: "A playlist for late-night coding sessions",
    body: "",
    url: "https://youtube.com/playlist?list=example",
    tags: ["fun", "inspiration"],
  },

  {
    id: "12",
    title:
      "The best ideas usually start as unfinished thoughts.",
    body:
      "Don't wait until an idea is perfectly formed before writing it down. Capture the rough version first. You can always refine it later.",
    url: "https://x.com/example/status/789",
    tags: ["ideas", "inspiration"],
  },
]

function BrainGrid() {
  return (
    <div
      className="
        mt-7
        columns-1
        gap-4
        sm:columns-2
        xl:columns-3
      "
    >
      {brains.map((brain) => (
        <div
          key={brain.id}
          className="
            mb-4
            break-inside-avoid
          "
        >
          <BrainCard
            id={brain.id}
            title={brain.title}
            body={brain.body}
            url={brain.url}
            tags={brain.tags}
          />
        </div>
      ))}
    </div>
  )
}

export default BrainGrid