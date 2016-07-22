module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            build: {
                expand: true,
                src: '**',
                cwd: 'src',
                dest: 'dist/',
            },
            backup: {
                src: '**',
                dest: 'c:\backup'
            }
        },
        clean: {
            build: ['dist/*']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', [
        'clean:build',
        'copy:build'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};