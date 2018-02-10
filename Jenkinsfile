pipeline {
    agent {
      docker {
        image 'scrfrontendbuild'
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
