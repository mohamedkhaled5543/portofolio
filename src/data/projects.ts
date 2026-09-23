export type WorkflowStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  problem: string;
  whatItDoes: string;
  businessValue: string[];
  technologies: string[];
  workflow: WorkflowStep[];
  github: string;
  accent: "amber" | "teal";
};

export const projects: Project[] = [
  {
    slug: "order-cancellation-agent",
    name: "AI Order Cancellation Agent",
    shortName: "Order Cancellation Agent",
    tagline: "An AI agent that handles real cancellation requests — not just chat replies.",
    problem:
      "Cancellation requests eat support time. Every request means checking the order, applying store policy, and confirming with the customer before anything actually happens. Done manually, it's repetitive and slow. Done with a plain chatbot, it's unreliable — most bots can talk about a cancellation, but can't safely verify one against real data and execute it.",
    whatItDoes:
      "This system understands a cancellation request in natural language, looks up the real order, checks it against eligibility rules, asks the customer to confirm, and only then executes the cancellation. It's built as an AI agent with tool access to real data — not a scripted flow with an AI label on it, and not a chatbot that only sounds helpful.",
    businessValue: [
      "Removes manual order lookups from the support workflow",
      "Applies cancellation policy consistently, every time",
      "Keeps a confirmation step before any action is taken",
      "Runs on top of existing order data instead of replacing it",
    ],
    technologies: ["n8n", "OpenRouter", "AI Agent", "PostgreSQL", "Google Sheets", "Telegram"],
    workflow: [
      { label: "Customer Request", detail: "A cancellation request comes in through the connected channel." },
      { label: "AI Understanding", detail: "The agent parses the request and identifies the order and intent." },
      { label: "Order Lookup", detail: "The real order is retrieved from PostgreSQL / Google Sheets." },
      { label: "Eligibility Check", detail: "The order is checked against cancellation rules before anything proceeds." },
      { label: "Confirmation", detail: "The customer confirms the action through Telegram before execution." },
      { label: "Verified Execution", detail: "The cancellation is only executed after eligibility and confirmation both pass." },
    ],
    github: "https://github.com/mohamedkhaled5543/ai-order-cancellation-agent",
    accent: "amber",
  },
  {
    slug: "customer-support",
    name: "AI Customer Support Automation",
    shortName: "Customer Support Automation",
    tagline: "Connects incoming customer messages to business logic and automated action.",
    problem:
      "Support inboxes fill up with requests that follow the same patterns — status checks, common questions, routine actions. Each one still needs to be read, understood, and routed correctly before a response goes out, which keeps a human in the loop for work that doesn't need one.",
    whatItDoes:
      "This system takes an incoming customer message, processes it with AI to determine intent, runs it through business logic to decide what should happen, triggers the right automated action, and sends a response back to the customer — end to end, without a human touching every step.",
    businessValue: [
      "Routes and resolves routine requests without manual triage",
      "Applies consistent business logic to every incoming message",
      "Connects support directly to the systems that take action",
      "Frees up time for requests that genuinely need a human",
    ],
    technologies: ["n8n", "AI", "APIs", "Webhooks"],
    workflow: [
      { label: "Customer Message", detail: "A request arrives from the connected support channel." },
      { label: "AI Processing", detail: "The message is interpreted to determine intent and required action." },
      { label: "Business Logic", detail: "The request is evaluated against the rules for that type of case." },
      { label: "Automated Action", detail: "The relevant action is triggered through an API or webhook." },
      { label: "Customer Response", detail: "A response is sent back, closing the loop automatically." },
    ],
    github: "https://github.com/mohamedkhaled5543/ai-customer-support-automation",
    accent: "teal",
  },
  {
    slug: "hotel-operations",
    name: "Smart Hotel Operations Automation",
    shortName: "Hotel Operations Automation",
    tagline: "Coordinates reservations, housekeeping, and checkout across separate tools.",
    problem:
      "A hotel's operations usually span several disconnected tools — booking forms, spreadsheets, email, and staff messaging — with someone manually moving information between them at every stage of a guest's stay. That hand-off is where delays and mistakes happen.",
    whatItDoes:
      "This system automates the operational chain around a reservation: it tracks the booking, manages room status, coordinates housekeeping tasks, handles checkout, and reports on payment — keeping Google Sheets, Gmail, and Telegram in sync so staff always work from current information.",
    businessValue: [
      "Removes manual data entry between booking and operations tools",
      "Keeps housekeeping and front-desk status updated automatically",
      "Reduces the coordination gap between reservation and checkout",
      "Centralizes reporting instead of chasing it across tools",
    ],
    technologies: ["n8n", "Google Sheets", "Google Forms", "Gmail", "Telegram"],
    workflow: [
      { label: "Reservation", detail: "A new booking is captured through Google Forms / Sheets." },
      { label: "Room Management", detail: "Room status and assignment are updated automatically." },
      { label: "Housekeeping", detail: "Cleaning and turnover tasks are triggered and tracked." },
      { label: "Checkout", detail: "Checkout status updates flow back through the system automatically." },
      { label: "Payment & Reporting", detail: "Payment status and reporting are synced across Sheets and email." },
    ],
    github: "https://github.com/mohamedkhaled5543/smart-hotel-operations-automation",
    accent: "amber",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
