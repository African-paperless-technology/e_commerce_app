pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'docker build -t my-react-app .'
            }
        }
         stage('Tests Selenium') {
            steps {
                docker.image('python:3.9').inside {
                    sh 'pip install selenium'
                    sh 'python test.py'
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker push my-react-app'
                bat 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
