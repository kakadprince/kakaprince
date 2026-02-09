-- Core membership entities
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE applications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  category VARCHAR(100) NOT NULL,
  status VARCHAR(30) NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  decision_reason TEXT
);

CREATE TABLE members (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  membership_id VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(30) NOT NULL,
  expiry_date DATE NOT NULL
);

CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  member_id UUID REFERENCES members(id),
  title VARCHAR(200) NOT NULL,
  issued_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE courses (
  id UUID PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  access_rule VARCHAR(100),
  completion_criteria VARCHAR(200)
);

CREATE TABLE modules (
  id UUID PRIMARY KEY,
  course_id UUID REFERENCES courses(id),
  title VARCHAR(200) NOT NULL,
  content_type VARCHAR(50),
  content_url TEXT
);

CREATE TABLE enrolments (
  id UUID PRIMARY KEY,
  member_id UUID REFERENCES members(id),
  course_id UUID REFERENCES courses(id),
  progress DECIMAL(5, 2) DEFAULT 0,
  completed_at TIMESTAMP
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  member_id UUID REFERENCES members(id),
  type VARCHAR(50) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(30) NOT NULL,
  issued_at TIMESTAMP DEFAULT NOW(),
  paid_at TIMESTAMP
);

CREATE TABLE payments (
  id UUID PRIMARY KEY,
  invoice_id UUID REFERENCES invoices(id),
  method VARCHAR(50),
  status VARCHAR(30) NOT NULL,
  transaction_reference VARCHAR(100),
  paid_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE audit_trail (
  id UUID PRIMARY KEY,
  action VARCHAR(200) NOT NULL,
  performed_by UUID REFERENCES users(id),
  performed_at TIMESTAMP DEFAULT NOW(),
  metadata JSONB
);
