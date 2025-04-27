pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/amrita-de/simple-calculator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install your dependencies here
                    // Assuming you're using npm or similar package manager
                    // This is for Windows-based machines, so using `bat` instead of `sh`

                    // If using npm
                    bat 'npm install'

                    // If using pip (for Python projects)
                    // bat 'pip install -r requirements.txt'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run your test commands here
                    // Again, use `bat` for Windows compatibility

                    // Example for running tests with npm
                    bat 'npm test'

                    // Example for running tests with pytest (for Python projects)
                    // bat 'pytest'
                }
            }
        }

        stage('Post Actions') {
            steps {
                echo 'Test completed!'
            }
        }
    }
}
