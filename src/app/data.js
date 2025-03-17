// src/app/data.js
export const courses = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  title: `Course ${i + 1}`,
  category: `Category ${Math.floor(Math.random() * 3) + 1}`,
  enrollStudents: Math.floor(Math.random() * 100),
  price: (Math.random() * 100).toFixed(2),
  status: Math.random() < 0.5 ? "Active" : "Inactive",
  published: Math.random() < 0.5 ? "Yes" : "No",
}));


// src/app/data.js (or create a new data file)
export const students = [
  { id: 1, name: "Alice Smith", email: "alice@example.com", course: "Math 101" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", course: "Physics 201" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", course: "History 301" },
  { id: 4, name: "David Lee", email: "david@example.com", course: "Computer Science 101" },
  { id: 5, name: "Eve Wilson", email: "eve@example.com", course: "English 201" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", course: "Chemistry 301" },
  { id: 7, name: "Grace Davis", email: "grace@example.com", course: "Biology 101" },
  { id: 8, name: "Henry Garcia", email: "henry@example.com", course: "Art 201" },
  { id: 9, name: "Ivy Rodriguez", email: "ivy@example.com", course: "Music 301" },
  { id: 10, name: "Jack Martinez", email: "jack@example.com", course: "Physical Education 101" },
  { id: 11, name: "Karen Anderson", email: "karen@example.com", course: "Geography 201" },
  { id: 12, name: "Liam Thomas", email: "liam@example.com", course: "Economics 301" },
  { id: 13, name: "Mia Jackson", email: "mia@example.com", course: "Sociology 101" },
  { id: 14, name: "Noah White", email: "noah@example.com", course: "Psychology 201" },
  { id: 15, name: "Olivia Harris", email: "olivia@example.com", course: "Political Science 301" },
  // ... add more students as needed
];