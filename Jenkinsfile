pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'docker build -t my-react-app .'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
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
