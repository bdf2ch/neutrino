/**
 * File interface
 */
export interface IFile {
  name: string;
  size: number;
  mime?: string;
  isFolder: boolean;
};


/**
 * File class
 */
export class File {
  name: string = '';
  extension: string = '';
  size: number = 0;
  mime: string = '';
  isFolder: boolean = false;


  /**
   * Constructor
   * @param config? {IFile} - configuration object
   */
  constructor (config?: IFile) {
    if (config) {
      this.name = config.name;
      this.size = config.size;
      this.mime = config.mime ? config.mime : '';
      let parts = this.name.split('.');
      this.extension = parts.length > 0 ? parts[parts.length - 1] : '';
    }
  };
};
