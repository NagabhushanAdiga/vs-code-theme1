const { Blob } = require('buffer');

class File extends Blob {
  constructor(bits, name, options = {}) {
    super(bits, options);
    this.name = String(name ?? '');
    this.lastModified =
      typeof options.lastModified === 'number'
        ? options.lastModified
        : Date.now();
    this.webkitRelativePath = '';
  }
}

if (!global.File) {
  global.File = File;
}

