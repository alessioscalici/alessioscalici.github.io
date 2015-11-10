


var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber')
    ;




//####################################################################################################################################//
//                                                          TASK FUNCTIONS
//####################################################################################################################################//



var task = {

  less : function(){
        return gulp.src(['src/less/main.less'])
            .pipe(plumber())
            .pipe(less({
                includePaths : ['src/less/']
            }))
            .pipe(plumber.stop())
            .pipe(gulp.dest('assets/css'));
    },
    jade : function(){
        return gulp.src(['src/*.jade'])
            .pipe(plumber())
            .pipe(jade())
            .pipe(plumber.stop())
            .pipe(gulp.dest('.'));
    }
};


//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//
//                                         BUILD TASKS
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//



gulp.task('less', task.less);
gulp.task('jade', task.jade);
gulp.task('default', ['less', 'jade']);






//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//
//                                     WATCH TASKS
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000//


var watchMode = false;

gulp.task('watch', function(){

    watchMode = true;


    watch(['src/**/*.less'], function(){
        try {
            task.less()
            .on('end', task.index);
        } catch (e) {
            console.log(e);
        }
    });

    watch(['src/*.jade'], function(){
        try {
            task.jade()
            .on('end', task.index);
        } catch (e) {
            console.log(e);
        }
    });


});
