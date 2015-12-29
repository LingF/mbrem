# mbrem
postcss plugin

## Install

With npm do:

`
  npm install --save-dev postcss-mbrem
`

### Input

`
  .box {
    width: 100mm;
    height: 200mm;
    margin: 10mm 20mm;
  }
`

### Output

`
  .box {
    width: 2.13333rem;
    height: 4.26667rem;
    margin: 0.21333rem 0.42667rem;
  }
`

## Options

  * width - 设计稿宽度(默认：750)
  * median - 中间值(默认：320/20)

### Example

`
  var gulp = require('gulp');
  var postcss = require('gulp-postcss'),
      mbrem = require('gulp-mbrem');

  gulp.task('default', function() {
    var processors = [
          mbrem({width: 1125})
        ];
    return gulp.src(["./src/c/*.css"])
          .pipe(postcss(processors))
          .pipe(gulp.dest("./dest/c/"));
  });
`

## Description
一个简单的手机端需求，开发中需要使用rem的适配方案，但在拿到设计稿后测量元素尺寸位置得出的像素值还需要通过计算再写入css，这样相当麻烦。类似在使用[hotcss](https://github.com/imochen/hotcss)这个结解决方案时，每次需要带入自定义的sass方程_rem2px_，受此影响何不创造一种新的单位来直接书写，免去方程的书写和单位的换算，省时省力。