var gulp       = require('gulp'), // Подключаем Gulp

	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов




gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки

'assets/web/assets/jquery/jquery.min.js',
'assets/preloder.js',
'assets/popper/popper.min.js',
'assets/tether/tether.min.js',
'assets/bootstrap/js/bootstrap.min.js',
'assets/dropdown/js/script.min.js',
'assets/touch-swipe/jquery.touch-swipe.min.js',
'assets/jarallax/jarallax.min.js',
'assets/smooth-scroll/smooth-scroll.js',
'assets/jquery-mb-vimeo_player/jquery.mb.vimeo_player.js',
'assets/viewport-checker/jquery.viewportchecker.js',
'assets/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js',
'assets/masonry/masonry.pkgd.min.js',
'assets/imagesloaded/imagesloaded.pkgd.min.js',
'assets/jquery-mb-ytplayer/jquery.mb.ytplayer.min.js',
'assets/theme/js/script.js',
'assets/mobirise-gallery/player.min.js',
'assets/mobirise-gallery/script.js',
'assets/mobirise-slider-video/script.js',
'assets/formoid/formoid.min.js',


				'assets/jquery.magnific-popup.min.js',
				'assets/jquery.pjax.js',
				'assets/common.js'
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});




gulp.task('style', function() {
	return gulp.src([
		'assets/web/assets/mobirise-icons/mobirise-icons.css',
		'assets/socicon/css/styles.css',

			'assets/tether/tether.min.css',
			'assets/bootstrap/css/bootstrap.min.css',
			'assets/bootstrap/css/bootstrap-grid.min.css',
			'assets/bootstrap/css/bootstrap-reboot.min.css',
			'assets/dropdown/css/style.css',
			'assets/theme/css/style.css',
			'assets/mobirise-gallery/style.css',
			'assets/popup-gallery.css'
	]) // Выбираем файл для минификации
		.pipe(concat('style.css'))
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});

gulp.task('micon', function() {
	return gulp.src('assets/web/assets/mobirise-icons/mobirise-icons.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename('mbricons.css')) // Добавляем суффикс .min
		.pipe(gulp.dest('assets/web/assets/mobirise-icons')); // Выгружаем в папку app/css
});

gulp.task('sicon', function() {
	return gulp.src('assets/socicon/css/styles.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename('socicon.css')) // Добавляем суффикс .min
		.pipe(gulp.dest('assets/socicon/css')); // Выгружаем в папку app/css
});

gulp.task('mbr', function() {
	return gulp.src('assets/mobirise/css/mbr-additional.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename('mbr.css')) // Добавляем суффикс .min
		.pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});



gulp.task('default', ['scripts', 'style', 'micon', 'sicon', 'mbr']);