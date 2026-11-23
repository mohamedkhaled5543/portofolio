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
    slug: "campaignforge",
    name: "CampaignForge AI",
    shortName: "CampaignForge AI",
    tagline: "An AI-powered workflow that turns a product brief into a structured marketing campaign.",
    problem: "Creating a marketing campaign requires understanding a product, researching its audience, choosing a strategy, and producing platform-ready content. Doing each step manually takes time and can lead to disconnected creative decisions.",
    whatItDoes: "CampaignForge takes a product brief, uses a marketing knowledge base through retrieval-augmented generation, proposes strategic directions, and generates campaign content for social platforms alongside an AI-generated advertising visual. The project combines LLM orchestration, retrieval, backend APIs, and a user interface.",
    businessValue: [
      "Connects product understanding, strategy, and content generation in one workflow",
      "Uses retrieved marketing knowledge to ground campaign recommendations",
      "Offers multiple strategic directions before content generation",
      "Combines text generation with advertising-image creation"
    ],
    technologies: ["Python", "FastAPI", "LangChain", "RAG", "FAISS", "Hugging Face", "Gemini", "Streamlit"],
    workflow: [
      { label: "Product Brief", detail: "The user provides product details, goals, and campaign context." },
      { label: "Product Understanding", detail: "The application structures the brief into useful product and audience context." },
      { label: "Knowledge Retrieval", detail: "Relevant marketing guidance is retrieved from the knowledge base using embeddings and FAISS." },
      { label: "Strategy Generation", detail: "The LLM proposes distinct campaign directions grounded in the available context." },
      { label: "Content Creation", detail: "The selected direction is expanded into platform-specific social content." },
      { label: "Visual Generation", detail: "The workflow produces an advertising image to accompany the campaign." }
    ],
    github: "https://github.com/mohamedkhaled5543/CampaignForge",
    accent: "amber"
  },
  {
    slug: "hotel-operations",
    name: "Smart Hotel Operations Automation",
    shortName: "Smart Hotel Operations",
    tagline: "Coordinates reservations, housekeeping, checkout, and payment workflows.",
    problem: "Hotel operations often spread information across booking forms, spreadsheets, email, and staff messaging. Manually transferring updates between these tools creates delays and opportunities for mistakes.",
    whatItDoes: "This n8n automation project connects reservation intake with room availability checks, housekeeping operations, guest checkout, payment recording, receipts, and daily reporting. It uses date-overlap logic for reservations and includes safeguards such as duplicate-payment prevention.",
    businessValue: [
      "Checks room availability using reservation date ranges",
      "Coordinates room status and housekeeping tasks",
      "Connects checkout and payment records across tools",
      "Includes duplicate-payment prevention and operational reporting"
    ],
    technologies: ["n8n", "Google Forms", "Google Sheets", "Gmail", "Telegram", "Workflow Logic"],
    workflow: [
      { label: "Reservation Intake", detail: "A booking request enters through the connected form and spreadsheet." },
      { label: "Availability Check", detail: "Date-overlap logic checks whether the requested room is available." },
      { label: "Room Operations", detail: "Room status and housekeeping tasks are updated through connected workflows." },
      { label: "Guest Checkout", detail: "Checkout events trigger the relevant operational updates." },
      { label: "Payment Recording", detail: "Payments are recorded with checks to prevent duplicate processing." },
      { label: "Reports & Notifications", detail: "Receipts, notifications, and daily operational reports are sent to the relevant channels." }
    ],
    github: "https://github.com/mohamedkhaled5543/smart-hotel-operations-automation",
    accent: "teal"
  },
  {
    slug: "customer-support",
    name: "AI Customer Support Automation",
    shortName: "AI Customer Support",
    tagline: "Uses an LLM to classify incoming requests and route them through connected workflows.",
    problem: "Support teams receive repeated requests that need to be understood, categorized, and routed. Manual triage takes time and makes it harder to keep records and notifications consistent.",
    whatItDoes: "The workflow receives incoming email, validates the request, uses an LLM through OpenRouter to classify intent into structured output, and routes the case to the relevant operational path. It logs activity and can send customer responses and team alerts through connected services.",
    businessValue: [
      "Automates initial message classification and routing",
      "Uses structured model output to support downstream workflow logic",
      "Keeps operational records in Google Sheets",
      "Connects customer communication with team notifications"
    ],
    technologies: ["n8n", "OpenRouter", "LLMs", "JavaScript", "Gmail", "Google Sheets", "Telegram"],
    workflow: [
      { label: "Email Intake", detail: "A customer message enters the workflow." },
      { label: "Validation", detail: "The request is checked and prepared for processing." },
      { label: "AI Classification", detail: "An LLM classifies the request and returns structured fields." },
      { label: "Routing", detail: "Workflow logic selects the appropriate handling path." },
      { label: "Response & Logging", detail: "The system sends relevant communications and records the outcome." }
    ],
    github: "https://github.com/mohamedkhaled5543/ai-customer-support-automation",
    accent: "amber"
  },
  {
    slug: "order-cancellation-agent",
    name: "AI Order Cancellation Agent",
    shortName: "Order Cancellation Agent",
    tagline: "An AI agent that verifies cancellation eligibility and asks for confirmation before acting.",
    problem: "A cancellation request should not be executed based on a chat message alone. The system must find the correct order, verify its status against policy, and obtain customer confirmation before changing data.",
    whatItDoes: "This n8n-based agent interprets a cancellation request, looks up order details, checks eligibility, asks the customer to confirm, and rechecks the conditions before executing the cancellation. PostgreSQL is used for agent memory, with connected services for order records and messaging.",
    businessValue: [
      "Checks order status and payment conditions before cancellation",
      "Requires explicit customer confirmation before execution",
      "Revalidates eligibility before taking the final action",
      "Connects agent reasoning with structured order data"
    ],
    technologies: ["n8n", "OpenRouter", "AI Agent", "PostgreSQL", "Google Sheets", "Telegram"],
    workflow: [
      { label: "Customer Request", detail: "The customer asks to cancel an order through Telegram." },
      { label: "Intent & Order Lookup", detail: "The agent understands the request and retrieves the relevant order." },
      { label: "Eligibility Check", detail: "The order is checked against cancellation conditions." },
      { label: "Customer Confirmation", detail: "The agent asks the customer to approve the cancellation." },
      { label: "Final Recheck", detail: "Eligibility is checked again before the action is performed." },
      { label: "Execution & Record", detail: "The cancellation result is recorded and communicated." }
    ],
    github: "https://github.com/mohamedkhaled5543/ai-order-cancellation-agent",
    accent: "teal"
  },
  {
    slug: "bilingual-rag",
    name: "Bilingual PDF RAG Q&A",
    shortName: "Bilingual PDF RAG",
    tagline: "Question answering over PDF documents in Arabic and English with retrieved context.",
    problem: "Finding precise information in long documents can be difficult, especially when users need to ask questions in more than one language and verify where an answer came from.",
    whatItDoes: "This application processes a PDF into searchable chunks, creates multilingual embeddings, retrieves relevant passages with FAISS, and sends the retrieved context to an LLM to generate an answer. The Streamlit interface supports Arabic and English questions.",
    businessValue: [
      "Supports questions in Arabic and English",
      "Retrieves relevant document passages before generation",
      "Grounds responses in the selected PDF rather than relying only on model memory",
      "Provides a practical interface for document-based question answering"
    ],
    technologies: ["Python", "RAG", "FAISS", "Sentence Transformers", "Multilingual Embeddings", "Mistral", "Streamlit"],
    workflow: [
      { label: "PDF Input", detail: "The user supplies a document for question answering." },
      { label: "Text Processing", detail: "Document text is extracted and split into searchable chunks." },
      { label: "Embedding", detail: "A multilingual embedding model converts chunks into vectors." },
      { label: "Retrieval", detail: "FAISS retrieves passages relevant to the user's question." },
      { label: "Grounded Answer", detail: "The LLM generates a response using the retrieved context." }
    ],
    github: "https://github.com/mohamedkhaled5543/bilingual-rag-pdf-qa",
    accent: "amber"
  },
  {
    slug: "network-attack-detector",
    name: "Network Attack Detector",
    shortName: "Network Attack Detector",
    tagline: "A machine learning application for network intrusion classification.",
    problem: "Network traffic datasets contain patterns that can indicate normal activity or malicious behavior. A useful classifier needs to be evaluated across both attack and normal classes, not just by overall accuracy.",
    whatItDoes: "This project trains and evaluates classification models on the UNSW-NB15 dataset and exposes predictions through a Streamlit application. The repository reports an XGBoost test accuracy of 0.85, F1 score of 0.837, attack recall of 0.96, and normal recall of 0.78.",
    businessValue: [
      "Applies supervised learning to network intrusion detection",
      "Reports class-level evaluation metrics alongside accuracy",
      "Includes an adjustable classification threshold",
      "Makes model predictions accessible through a web interface"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "UNSW-NB15"],
    workflow: [
      { label: "Dataset", detail: "Network traffic records are loaded from UNSW-NB15." },
      { label: "Preprocessing", detail: "Features are prepared for model training and evaluation." },
      { label: "Model Training", detail: "Classification models are trained and compared." },
      { label: "Evaluation", detail: "Accuracy, F1, and class-level recall are inspected." },
      { label: "Prediction App", detail: "The selected model is exposed through a Streamlit interface." }
    ],
    github: "https://github.com/mohamedkhaled5543/network-attack-detector",
    accent: "teal"
  },
  {
    slug: "edupilot-ai",
    name: "EduPilot AI",
    shortName: "EduPilot AI",
    tagline: "Graduation project · a multi-agent intelligent learning platform currently in its planning and initial setup phase.",
    problem: "Students and instructors often rely on separate tools for course materials, practice, feedback, and performance insights. A connected learning platform could make these activities more coherent and personalized.",
    whatItDoes: "EduPilot AI is the team's graduation project concept: an intelligent learning platform planned to include a RAG-based tutor with source citations, assessment generation and grading, student performance analytics, and instructor support. The current work is focused on requirements and initial project setup; the planned features should not be interpreted as completed functionality.",
    businessValue: [
      "Explores how AI can support learning and teaching workflows",
      "Plans source-grounded answers over course materials",
      "Combines assessment support with student progress insights",
      "Designed around a real university learning context"
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "LLMs", "RAG", "LangGraph"],
    workflow: [
      { label: "Course Materials", detail: "Course files are intended to provide the learning knowledge base." },
      { label: "Learning Tutor", detail: "A planned RAG tutor will answer questions with source references." },
      { label: "Assessment", detail: "Planned workflows include quiz generation and grading support." },
      { label: "Progress Insights", detail: "Student performance data is intended to support analytics." },
      { label: "Instructor Support", detail: "Planned tools will help instructors review learning gaps and course activity." }
    ],
    github: "https://github.com/mohamedkhaled5543/EduPilot-AI",
    accent: "amber"
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
