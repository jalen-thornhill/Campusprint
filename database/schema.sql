CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY,
    customerName TEXT NOT NULL,
    customerEmail TEXT NOT NULL,
    requestPages INTEGER NOT NULL,
    requestCopies INTEGER NOT NULL,
    requestColor TEXT NOT NULL,
    requestSideness TEXT NOT NULL,
    estimatedTotalCents INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pending',
    createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);