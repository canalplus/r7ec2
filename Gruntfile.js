module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ec2: 'r7-credentials.json'
  });

  grunt.loadNpmTasks('grunt-ec2');
};

