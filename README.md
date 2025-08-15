\# Ownerless Oasis Project



A full-stack web application built with \*\*React\*\* (frontend) and \*\*Node.js + Express\*\* (backend).



---



\## 📌 Features

\- ⚡ \*\*React\*\* for dynamic, interactive UI

\- 🚀 \*\*Node.js + Express\*\* REST API

\- 📦 Modular and scalable folder structure

\- 🎯 API integration between frontend and backend

\- 🔒 Environment-based configuration



---



\## 🛠 Tech Stack

\*\*Frontend:\*\*

\- React

\- Axios / Fetch API

\- React Router

\- TailwindCSS 



\*\*Backend:\*\*

\- Node.js

\- Express



---



&nbsp; "devDependencies": {

&nbsp;   "i": "^0.3.7",

&nbsp;   "nodemon": "^3.1.0",

&nbsp;   "npm": "^10.5.0",

&nbsp;   "or": "^0.2.0"

&nbsp; }



\## 📂 code organization

ownerless-oasis-main/

│

├── ownerless-oasis-client/ # React frontend

│ ├── src/

│ ├── public/

│ └── package.json

│

└── server/ # Node.js backend

├── src/

├── routes/

├── controllers/

├── package.json





\### 1️⃣ Clone the repository

git clone https://github.com/your-username/ownerless-oasis-main.git

cd ownerless-oasis-main



2️⃣ Install dependencies

Frontend



cd ownerless-oasis-client

npm install

cd ../server

npm install



3️⃣ Run the project

Backend



cd server

npm start

Frontend

cd ownerless-oasis-client

npm start



⚙️ Environment Variables

Create a .env file in the server folder with:



host: 'localhost',

&nbsp; user: 'root',

&nbsp; password: '',

&nbsp; database: 'test',

&nbsp; port: 3306,





📜 API Endpoints

Method	Endpoint	Description

GET	/api/users	Get all users

POST	/api/login	Authenticate user



📌 License

This project is licensed under the MIT License.





