pipeline {
    agent {
      docker {
        image 'node:8-alpine'
      }
    }

    stages {
        stage('Installing modules') {
            steps {
                sh 'npm install -g @angular/cli@1.6.8'
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
