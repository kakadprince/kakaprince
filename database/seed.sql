INSERT INTO users (id, email, password_hash, role)
VALUES
  ('c3b0d2e3-1111-4c40-9b14-1a1b2b3c4d5e', 'admin@institute.org', 'hashed-password', 'Administrator'),
  ('d4c1e3f4-2222-4d50-9c25-2b2c3d4e5f6a', 'member@institute.org', 'hashed-password', 'Approved Member');

INSERT INTO applications (id, user_id, category, status, submitted_at)
VALUES
  ('e5d2f4a5-3333-4e60-9d36-3c3d4e5f6a7b', 'd4c1e3f4-2222-4d50-9c25-2b2c3d4e5f6a', 'Professional Member', 'Approved', NOW());

INSERT INTO members (id, user_id, membership_id, status, expiry_date)
VALUES
  ('f6e3a5b6-4444-4f70-9e47-4d4e5f6a7b8c', 'd4c1e3f4-2222-4d50-9c25-2b2c3d4e5f6a', 'GI-2025-0001', 'Active', '2025-12-31');

INSERT INTO courses (id, title, price, access_rule, completion_criteria)
VALUES
  ('0a1b2c3d-5555-4070-9f58-5e5f6a7b8c9d', 'Professional Ethics & Governance', 220.00, 'Members only', '80% quiz score');

INSERT INTO enrolments (id, member_id, course_id, progress)
VALUES
  ('1b2c3d4e-6666-4180-a068-6f6a7b8c9d0e', 'f6e3a5b6-4444-4f70-9e47-4d4e5f6a7b8c', '0a1b2c3d-5555-4070-9f58-5e5f6a7b8c9d', 68.00);

INSERT INTO invoices (id, member_id, type, amount, status)
VALUES
  ('2c3d4e5f-7777-4290-a179-7a7b8c9d0e1f', 'f6e3a5b6-4444-4f70-9e47-4d4e5f6a7b8c', 'Membership fee', 350.00, 'Paid');
