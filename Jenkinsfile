pipeline {
  agent {
    docker {
      image 'ferdroid1337/alpine-node-custom'
      args '-p 3000:3000'
    }
  }
  // environment {
  //     CI = 'true'
  // }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Deliver') {
      steps {
        sh './jenkins/scripts/deliver.sh'
      }
    }
  }
}