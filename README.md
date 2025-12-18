React CI/CD Pipeline with Jenkins & Docker

This project is a React Single Page Application (SPA) bootstrapped with Create React App and integrated with a complete CI/CD pipeline using GitHub, Jenkins, and Docker.

The goal of this project is to demonstrate real-world DevOps practices suitable for interviews, portfolios, and production-like workflows.


🚀 Project Overview

This application showcases how a modern frontend application can be:

Version controlled using Git & GitHub

Automatically built and deployed using Jenkins

Containerized using Docker

Triggered via GitHub Webhooks

Notified via Email alerts on build success or failure

🛠️ Tech Stack

Frontend: React (Create React App)

Version Control: Git, GitHub

CI/CD: Jenkins

Containerization: Docker

Server: Ubuntu (AWS EC2)

Notifications: Jenkins Email Notification

Java: OpenJDK 21 (for Jenkins)

📂 Available Scripts

In the project directory, you can run:

npm start

Runs the app in development mode.
Open http://localhost:3000
 to view it in your browser.

npm test

Launches the test runner in interactive watch mode.

npm run build

Builds the app for production into the build folder with optimized and minified files.

npm run eject

⚠️ One-way operation. Gives full control over configuration (Webpack, Babel, ESLint).

🔁 CI/CD Pipeline Flow

Code Push

Developer pushes code to GitHub (main branch)

Webhook Trigger

GitHub Webhook triggers Jenkins job automatically

Jenkins Build

Pulls latest code

Installs dependencies

Builds React application

Docker Image Creation

Jenkins builds a Docker image for the React app

Deployment

Docker container is deployed on the server

Notifications

Email notification sent on success or failure

🧱 Jenkins & Docker Setup (Ubuntu)
Install Docker
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker

Install Java (Required for Jenkins)
sudo apt update
sudo apt install openjdk-21-jdk -y


Install Jenkins
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins

Allow Jenkins to Use Docker
sudo usermod -aG docker jenkins
sudo reboot

🔐 Server Access (AWS EC2)
ssh -i "cicd.pem" ubuntu@<your-ec2-ip>


📦 Git Repository Setup
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <git-url>
git push -u origin main


📧 Email Notifications

Jenkins is configured to send email notifications on:

✅ Build Success

❌ Build Failure

This helps in quick monitoring and faster issue resolution.

👨‍💻 Author

Arpit Kumar

This project was developed by Arpit Kumar to demonstrate a complete CI/CD pipeline for a React Single Page Application using GitHub Webhooks, Jenkins, Docker, and Email Notifications.

It is designed to reflect real-world DevOps workflows and is suitable for interviews and portfolio showcase.


📚 Learn More

Create React App Docs: https://facebook.github.io/create-react-app/docs/getting-started

React Docs: https://reactjs.org/

Jenkins Docs: https://www.jenkins.io/doc/

Docker Docs: https://docs.docker.com/