pipeline {
  // agent {
  //   docker {
  //     image 'ferdroid1337/alpine-node-custom:1.0'
  //     args '-p 3000:3000'
  //   }
  // }
  agent {
    none
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