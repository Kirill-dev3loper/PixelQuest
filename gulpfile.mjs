import gulp from 'gulp'
import CleanCSS from 'gulp-clean-css'
import autoPrefixer from 'gulp-autoprefixer'

const cloneFiles= async()=>{
    return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public'))
}

const cloneJS=async()=>{
    return gulp.src('app/js/*.js')
    .pipe(gulp.dest('public/js'))
}

const minifyCss = async()=>{
    return gulp.src('app/css/*.css')
    .pipe(autoPrefixer())
    .pipe(CleanCSS())
    .pipe(gulp.dest('public/css'))
}

const css = async()=>{
    gulp.watch('app/css/*.css', gulp.series(minifyCss))
}

const html = async()=>{
    gulp.watch('app/*.html', gulp.series(cloneFiles))
}

const js = async()=>{
    gulp.watch('app/js/*.js', gulp.series(cloneJS))
}


const build = gulp.parallel(html,css,js)

export{
    cloneFiles,
    cloneJS,
    minifyCss,
    css, 
    html,
    js,
    build as default
}