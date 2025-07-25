---Create ENUM
CREATE TYPE user_role AS ENUM('user','admin','moderaotor');

---Create Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- gen_random_uuid()

---Create Usesr Table
CREATE TABLE users(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
username TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
city TEXT NOT NULL,
ip_addr INET,
role user_role NOT NULL DEFAULT 'user',
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

---Create Board Table
CREATE TABLE boards(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
name TEXT NOT NULL UNIQUE,
title TEXT NOT NULL,
description TEXT,
cover_img TEXT,
user_id UUID REFERENCES users(id) ON DELETE CASCADE,
is_deleted BOOLEAN DEFAULT FALSE,
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
