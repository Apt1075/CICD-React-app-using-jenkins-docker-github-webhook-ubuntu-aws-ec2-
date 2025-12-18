pipeline {
    agent any

    environment {
        CONTAINER_NAME = "reacrt-app-container"
        IMAGE_NAME = "react-app-image"
        // EMAIL_RECIPIENT = "aws.arpit25@gmail.com"
        PORT = "3000"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Clone Repository...'
                git branch: 'main', url: 'https://github.com/Apt1075/CICD-React-app-using-jenkins-docker-github-webhook-ubuntu-aws-ec2-.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                echo 'Stopping and removing existing container...'
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }
        stage('Docker Run') {
            steps {
                echo 'Deploying...'
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }

        // stage('Send Email Notification') {
        //     steps {
        //         email{
        //             echo 'Sending email notification...',
        //             to "${EMAIL_RECIPIENT}",
        //             subject "React App Deployment Successful",
        //             body "The React application has been successfully deployed and is running on port ${PORT}."
        //         }
        //     }
        // }
    }
}