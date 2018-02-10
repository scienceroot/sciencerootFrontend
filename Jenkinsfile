pipeline {
    agent {
      docker {
        image 'scrfrontendbuild:latest'
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
