pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t my-react-app .'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker push my-react-app'
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
