MyELib – Library Management System
Project Summary
Part	Tech Stack & Purpose

Backend	Node.js + Express.js + MongoDB – Handles books, borrowers, issue/return logic, search/filter, and data validation through REST API.
Frontend	React + Tailwind (Planned) – User interface for managing books, borrowers, and transactions with a dashboard and responsive design.

 Backend Summary

APIs: RESTful (JSON)

Core Features:

Book CRUD (Create, Read, Update, Delete)

Borrower management

Issue/return tracking

Status (available/issued)

Filtering & search




Start:

npm run dev  # Starts dev server on http://localhost:5000

Frontend Summary (Planned)

Framework: React + Vite

Styling: Tailwind CSS

Navigation: React Router

State: Context API or Redux

Features:

Dashboard for books/borrowers

Add, edit, delete books

Search/filter interface

Borrow/return book UI

Mobile-first responsive design

 Testing

API Testing: Postman / cURL

Sample Call:

curl http://localhost:5000/books

 Next Steps

 Backend ready =>Build React frontend =>  Deploy