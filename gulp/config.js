global.CACHE_FOLDER = 'cache';
global.PKG_FOLDER = 'pkg';
global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'release';
global.TEST_FOLDER = 'test';
global.TMP_FOLDER = 'tmp';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/**/*',
      scripts: SRC_FOLDER + '/js/**/*.js',
      styles: SRC_FOLDER + '/styles/app.scss',
      stylesGlob: SRC_FOLDER + '/styles/**/*.scss',
      templates: SRC_FOLDER + '/**/*.html',
      templatesHTML: SRC_FOLDER + '/**/*.html',
      templatesCompiled: TMP_FOLDER,
      tests: TEST_FOLDER + '/*-spec.js',
      livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
      js: './' + SRC_FOLDER + '/js/app.js'
    },
    dest: {
      build: {
        styles: BUILD_FOLDER,
        scripts: BUILD_FOLDER,
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets',
        index: BUILD_FOLDER,
        server: BUILD_FOLDER
      },
      release: {
        styles: RELEASE_FOLDER,
        scripts: RELEASE_FOLDER,
        images: RELEASE_FOLDER + '/assets/images',
        assets: RELEASE_FOLDER + '/assets',
        index: RELEASE_FOLDER,
        server: RELEASE_FOLDER
      }
    }
  },
  filenames: {
    config: {
      app: process.env.config ? SRC_FOLDER + '/js/config/' + process.env.config : SRC_FOLDER + '/js/config/config.json',
      electron: SRC_FOLDER + '/electron/',
      nw: SRC_FOLDER + '/nw/',
      dest: SRC_FOLDER + '/js/',
      test: TEST_FOLDER + '/config.js'
    },
    build: {
      styles: 'bundle.css',
      scripts: 'bundle.js'
    },
    pkg: {
      electron: PKG_FOLDER + '/electron/',
      nw: PKG_FOLDER + '/nw/'
    },
    release: {
      styles: 'bundle.min.css',
      scripts: 'bundle.min.js'
    },
    templates: {
      compiled: 'templates.js',
      angular: {
        moduleName: 'app.templates',
        prefix: '',
        stripPrefix: 'app/'
      }
    }
  },
  deploy: {
    url: 'https://host/',
    server: 'host',
    dest: '/var/www',
  },
  ports: {
    staticServer: 8080,
    livereloadServer: 35729
  }
};
