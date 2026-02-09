const { useState } = React;

const roles = [
  "Visitor",
  "Applicant",
  "Approved Member",
  "Trainer",
  "Administrator",
  "Finance Officer",
];

const courseCatalog = [
  {
    title: "Professional Ethics & Governance",
    level: "Foundation",
    description: "Explore global professional standards, ethics, and governance frameworks.",
  },
  {
    title: "Regulatory Compliance Masterclass",
    level: "Intermediate",
    description: "Build compliance skills with interactive scenarios and assessments.",
  },
  {
    title: "Leadership for Professional Bodies",
    level: "Advanced",
    description: "Develop leadership, strategy, and member engagement expertise.",
  },
];

const aiInsights = [
  "Recommended next: Regulatory Compliance Masterclass",
  "Revision focus: Governance case studies",
  "Suggested badge: Ethics Champion",
];

function App() {
  const [selectedRole, setSelectedRole] = useState("Visitor");

  return (
    <div>
      <header>
        <nav>
          <div className="brand">Global Institute Portal</div>
          <div className="actions">
            <button className="cta secondary">Explore Courses</button>
            <button className="cta secondary">Login</button>
            <button className="cta primary">Join Now</button>
          </div>
        </nav>
        <div className="hero">
          <div>
            <h1>Digitise membership. Power lifelong learning.</h1>
            <p>
              A unified membership portal with integrated LMS, certification, and
              AI-enabled support aligned to global professional body standards.
            </p>
            <div className="actions">
              <button className="cta primary">Start Application</button>
              <button className="cta secondary">View Membership Tiers</button>
            </div>
          </div>
          <div className="card">
            <div className="badge">AI learning assistant</div>
            <h3>Ask the study coach</h3>
            <p>
              “Summarise module 2 and highlight key compliance risks for my exam.”
            </p>
            <button className="cta primary">Launch AI Assistant</button>
          </div>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Membership lifecycle at a glance</h2>
        <div className="cards">
          {[
            "Apply online with document uploads",
            "Admin review, approve, request info",
            "Automated invoicing & receipts",
            "Digital membership certificate",
            "Renewals, CPD tracking, and audits",
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                Structured workflows with status tracking, notifications, and audit
                trails across each stage.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "#f8fafc" }}>
        <h2 className="section-title">Role-based experience</h2>
        <div className="grid-two">
          <div>
            <p>
              Switch roles to preview tailored dashboards, workflows, and learning
              services.
            </p>
            <div className="cards">
              {roles.map((role) => (
                <button
                  key={role}
                  className={`cta ${selectedRole === role ? "primary" : "secondary"}`}
                  style={{ color: selectedRole === role ? "#111827" : "#111827", border: "1px solid #e2e8f0" }}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="badge">Selected role</div>
            <h3>{selectedRole}</h3>
            <p>
              {selectedRole === "Visitor" &&
                "Browse membership categories, preview courses, and contact support."}
              {selectedRole === "Applicant" &&
                "Complete application forms, upload documents, and track approval status."}
              {selectedRole === "Approved Member" &&
                "Access your profile, certificates, CPD progress, and member services."}
              {selectedRole === "Trainer" &&
                "Create courses, upload content, manage assessments, and issue certificates."}
              {selectedRole === "Administrator" &&
                "Manage applications, users, memberships, audits, and platform settings."}
              {selectedRole === "Finance Officer" &&
                "Oversee invoices, payments, refunds, and revenue reporting."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Course catalogue preview</h2>
        <div className="cards">
          {courseCatalog.map((course) => (
            <div className="card" key={course.title}>
              <span className="tag">{course.level}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="cta secondary" style={{ marginTop: "1rem", color: "#111827", border: "1px solid #e2e8f0" }}>
                View syllabus
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "#f8fafc" }}>
        <h2 className="section-title">Member dashboard snapshot</h2>
        <div className="dashboard-grid">
          <div className="metric">
            <span>Membership Status</span>
            <strong>Active · Expires Dec 2025</strong>
          </div>
          <div className="metric">
            <span>Learning Progress</span>
            <strong>68% complete</strong>
          </div>
          <div className="metric">
            <span>Certificates</span>
            <strong>3 issued</strong>
          </div>
          <div className="metric">
            <span>Invoices</span>
            <strong>2 paid · 1 pending</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">AI learning support</h2>
        <div className="grid-two">
          <div className="card">
            <h3>Study assistant</h3>
            <p>
              Chat-based support for course content, FAQs, and exam readiness.
              Integrates with institutional knowledge bases.
            </p>
            <div className="list">
              <div className="list-item">
                <span>Explain module 3 in simple terms</span>
                <span className="tag">AI</span>
              </div>
              <div className="list-item">
                <span>Generate practice questions</span>
                <span className="tag">AI</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Recommended next steps</h3>
            <div className="list">
              {aiInsights.map((insight) => (
                <div className="list-item" key={insight}>
                  <span>{insight}</span>
                  <span className="badge">Personalised</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f8fafc" }}>
        <h2 className="section-title">Administration & compliance</h2>
        <div className="cards">
          <div className="card">
            <h3>Application review queue</h3>
            <p>Approve, reject, or request additional documents with audit trails.</p>
          </div>
          <div className="card">
            <h3>Membership management</h3>
            <p>Suspend, revoke, or renew memberships with automated notices.</p>
          </div>
          <div className="card">
            <h3>Reports & exports</h3>
            <p>Export CSV/PDF reports for finance, CPD, and regulatory audits.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">FAQs & Support</h2>
        <div className="cards">
          <div className="card">
            <h3>How long does approval take?</h3>
            <p>Most applications are reviewed within 5 business days.</p>
          </div>
          <div className="card">
            <h3>Can I pay in instalments?</h3>
            <p>Yes. Finance officers can configure instalment plans in the portal.</p>
          </div>
          <div className="card">
            <h3>Need help?</h3>
            <p>Contact support or chat with the AI assistant for instant guidance.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <h3>Global Institute Portal</h3>
            <p>Professional membership, certification, and learning platform.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>support@globalinstitute.org</p>
            <p>+1 (555) 010-2025</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p>
              <a href="#">Membership tiers</a>
            </p>
            <p>
              <a href="#">Course catalogue</a>
            </p>
            <p>
              <a href="#">Privacy policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
