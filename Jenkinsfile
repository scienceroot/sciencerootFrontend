pipeline {
    agent {
      docker {
        image 'scrfrontendbuild:master'
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
