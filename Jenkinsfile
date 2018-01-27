pipeline {
    agent {
      docker {
        image: 'node:9-alpine'
      }
    }

    stages {
        stage('Installing modules') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
        }
    }
}
