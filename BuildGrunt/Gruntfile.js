module.exports = function(grunt) {
    grunt.initConfig({
        useminPrepare: {
            html: 'src/index.html'
        },
        usemin: {
            html: 'dist/index.html'
        },
        copy: {
            build: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'dist/',
            },
        },
        clean: {
            prebuild: ['dist/*'],
            postbuild: ['.tmp']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('build', [
        'clean:prebuild',
        'copy:build',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'usemin',
        'clean:postbuild',
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};