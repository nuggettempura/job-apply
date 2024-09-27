CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    "password" TEXT
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    job_title TEXT,
    income_range TEXT,
    "location" TEXT,
    job_description TEXT
);
