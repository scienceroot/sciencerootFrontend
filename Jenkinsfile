pipeline {
    agent {
      docker {
        image 'node:8-alpine'
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
                sh './node_modules/.bin/ng build --prod'
            }
        }
    }
}
