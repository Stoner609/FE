// 引用 gulp plugin
var gulp = require('gulp');

//------------------------------------
// 定義名稱為 default 的 gulp 工作
// gulp.task('default', function () {
//     console.log('Hello Gulp Default Task');
// });
// // 定義名稱為 other 的 gulp 工作
// gulp.task('other', function () {
//     console.log('Hello Gulp Other Task');
// });

//------------------------------------
// // 定義名稱為 default 的 gulp 工作
// gulp.task('default', ['other', 'scripts']);

// // 定義名稱為 other 的 gulp 工作
// gulp.task('other', function () {
//     console.log('Hello Gulp Other Task');
// });

// // 定義名稱為 scripts 的 gulp 工作
// gulp.task('scripts', function () {
//     console.log('Hello Gulp Scripts Task');
// });

//---------------------------------------
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss') // sass 的來源資料夾
    .pipe(sass( // 編譯 sass
      {outputStyle: 'expanded'} // sass 的輸出格式
    ).on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets')); // sass 編譯完成後的匯出資料夾
});

gulp.task('img', function () {
  return gulp.src('./source/img/**')
  .pipe(gulp.dest('./public/img'));
})

gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
  // 監控資料夾，當有變化時執行 'sass' 任務
});

/*
 *所以開發者可以定義相當多的 Task，就以本範例中還有一個監控的任務可以使用 gulp sass:watch，如果不想要一直重啟 gulp 來編譯 sass 可以使用此指令。
*/