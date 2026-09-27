\# CampusPrint



CampusPrint is a planned printing information, pricing, and request portal

for students. It is an independent practice project inspired by COMP1170

Entrepreneurship for Computer Scientists.



\## Purpose



Some students find computer printing steps confusing or do not know that

self-service printing is available. CampusPrint aims to provide clear

guidance and an assisted-printing request option.



The intended audience is students at the campus, starting with a small

group before expanding. These initial assumptions will be investigated

through market research.



\## Planned first version



\- Homepage explaining self-service and assisted printing.

\- Self-service instructions and guidance for checking campus printing funds.

\- Price estimates based on pages, copies, colour, and sidedness.

\- Assisted-printing request form with database storage.

\- Protected operator page for viewing requests and updating their status.

\- Summary of request counts and estimated revenue, excluding cancelled requests.



Printing options will include black-and-white or colour, with single-sided

or double-sided printing. Printer capabilities and prices remain to be verified.



Students using assisted printing will bring their documents on a USB drive.

Request statuses will be Pending, In progress, Ready, Collected, or Cancelled.



Students will check their available funds themselves. CampusPrint will

provide guidance and estimates, not read live campus account balances.



\## Outside the first version



\- Document uploads.

\- Online payments.

\- Email notifications.

\- Live campus printing balance integration.

\- Direct control of printers.



## Technology

- Frontend: HTML, CSS, and JavaScript.
- Server: Node.js with Express.
- Database: SQLite is planned but has not been connected yet.

## Running locally

With Node.js and npm installed, open Command Prompt in the CampusPrint
project folder. For a fresh checkout, run `npm install` first to install
the project's dependencies.

Start the development server:

```bat
npm start
```

Keep Command Prompt running and open http://127.0.0.1:3000 in your browser.
Press **Ctrl+C** in Command Prompt to stop the server.

\## Development data



Development will use fictional customer data. Secrets, passwords, private

survey responses, and real customer data must not be committed.



\## Project status



Planning and repository setup are in progress. No application has been

implemented yet.

