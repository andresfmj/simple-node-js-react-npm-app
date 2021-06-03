pipeline {
  agent {
    docker {
      image '770344956962.dkr.ecr.us-east-1.amazonaws.com/node-aws:1.0'
      args '-p 3000:3000'
      registryCredentialsId '9f29bf54-59e0-4d83-9e5f-301635aa2504'
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