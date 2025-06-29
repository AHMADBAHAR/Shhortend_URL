URL Shortener Project
A simple URL Shortener web application built with Node.js, Express, MongoDB, and EJS. It allows users to generate short URLs, track click history, and redirect to the original long URLs.

🚀 Features
Generate short URLs for long links

Store URL mappings in MongoDB

Track total clicks and visit history (timestamps)

View all generated URLs and their analytics

EJS-powered frontend with responsive UI

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript Templates)

Database: MongoDB, Mongoose

Others: Shortid package for unique URL generation



URL_Shortener/
│
├── controller/         # Controller logic
│── model/              # Mongoose schemas
│── Route/              # Express routes
│── views/              # EJS templates
├── conectionMongoose.js # Database connection setup
├── index.js            # Main server file
├── package.json
└── README.md

Install dependencies

bash
Copy
Edit
npm install
Start MongoDB
Make sure your MongoDB server is running locally or update the connection string in conectionMongoose.js.

Run the server

bash
Copy
Edit
node index.js


Access the App
Open your browser and visit:

arduino
Copy
Edit
http://localhost:3000
🌐 Usage
Enter a long URL in the form and click Generate

The short URL is displayed (e.g., localhost:3000/xyz123)

Click the short URL to get redirected to the original long link

Visit /analytics/:shortId to check click history for a short URL
