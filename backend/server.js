const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory collections provide a lightweight prototype data store.
const applications = [
  {
    id: uuid(),
    name: "Amara Singh",
    email: "amara@example.org",
    category: "Professional Member",
    status: "Pending",
    submittedAt: "2025-01-12",
  },
];

// Approved members with certificates and learning progress.
const members = [
  {
    id: uuid(),
    name: "Miguel Santos",
    status: "Active",
    expiryDate: "2025-12-31",
    certificates: ["Ethics Foundation", "Compliance Essentials"],
    learningProgress: 0.68,
  },
];

// Course catalog entries and completion criteria.
const courses = [
  {
    id: uuid(),
    title: "Professional Ethics & Governance",
    price: 220,
    accessRule: "Members only",
    completionCriteria: "80% quiz score",
  },
];

// Invoices for membership and course fees.
const invoices = [
  {
    id: uuid(),
    memberId: members[0].id,
    type: "Membership fee",
    amount: 350,
    status: "Paid",
    issuedAt: "2025-01-10",
  },
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/applications", (req, res) => {
  res.json({ data: applications });
});

// Accept new membership applications.
app.post("/api/applications", (req, res) => {
  const { name, email, category } = req.body;
  const application = {
    id: uuid(),
    name,
    email,
    category,
    status: "Pending",
    submittedAt: new Date().toISOString().split("T")[0],
  };
  applications.push(application);
  res.status(201).json({ message: "Application received", application });
});

// Record approval or rejection decisions with an optional reason.
app.post("/api/applications/:id/decision", (req, res) => {
  const { id } = req.params;
  const { decision, reason } = req.body;
  const application = applications.find((item) => item.id === id);
  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  application.status = decision;
  application.decisionReason = reason || null;

  res.json({ message: "Decision recorded", application });
});

app.get("/api/members", (req, res) => {
  res.json({ data: members });
});

app.post("/api/members", (req, res) => {
  const { name } = req.body;
  const member = {
    id: uuid(),
    name,
    status: "Active",
    expiryDate: "2025-12-31",
    certificates: [],
    learningProgress: 0,
  };
  members.push(member);
  res.status(201).json({ message: "Member created", member });
});

app.get("/api/courses", (req, res) => {
  res.json({ data: courses });
});

app.post("/api/courses", (req, res) => {
  const { title, price, accessRule, completionCriteria } = req.body;
  const course = {
    id: uuid(),
    title,
    price,
    accessRule,
    completionCriteria,
  };
  courses.push(course);
  res.status(201).json({ message: "Course created", course });
});

app.get("/api/invoices", (req, res) => {
  res.json({ data: invoices });
});

app.post("/api/invoices", (req, res) => {
  const { memberId, type, amount } = req.body;
  const invoice = {
    id: uuid(),
    memberId,
    type,
    amount,
    status: "Pending",
    issuedAt: new Date().toISOString().split("T")[0],
  };
  invoices.push(invoice);
  res.status(201).json({ message: "Invoice created", invoice });
});

app.get("/api/ai/recommendations", (req, res) => {
  res.json({
    memberId: members[0].id,
    recommendations: [
      "Regulatory Compliance Masterclass",
      "Leadership for Professional Bodies",
    ],
    generatedBy: "placeholder-ai-engine",
  });
});

// Placeholder AI chat response for study support.
app.post("/api/ai/study-assistant", (req, res) => {
  const { question } = req.body;
  res.json({
    question,
    response:
      "This is a placeholder response. Integrate with an LLM or knowledge base here.",
    confidence: 0.72,
  });
});

app.get("/api/reports/summary", (req, res) => {
  res.json({
    members: {
      total: members.length,
      active: members.filter((member) => member.status === "Active").length,
    },
    enrolments: 128,
    revenue: 45230,
    updatedAt: new Date().toISOString(),
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Membership portal API running on port ${port}`);
});
