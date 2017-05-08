export class Model {

  private changed: boolean = false;

  _model: any = {
    backup: {
      data: {}
    },
    status: {}
  };


  /**
   *
   */
  constructor() {
    let instance = this;
    this._model.backup.data = {};


    /**
     * Setups backup for specified fields
     * @param fields {string[]} - array of fields for backup
     */
    this._model.backup['setup'] = function (fields: string[]): void {
      let length = fields.length;
      for (let i = 0; i < length; i++) {
        if (instance.hasOwnProperty(fields[i]) && typeof instance[fields[i]] !== 'function') {
          instance._model.backup.data[fields[i]] = instance[fields[i]];
        }
      }
    };


    /**
     * Restores backup for specified fields
     * @param fields {string[]} - array of fields to restore
     */
    this._model.backup['restore'] = function (fields?: string[]): void {
      if (fields) {
        let length = fields.length;
        for (let i = 0; i < length; i++) {
          if (instance._model.backup.data[fields[i]] !== undefined) {
            instance[fields[i]] = instance._model.backup.data[fields[i]];
          }
        }
      } else {
        for (let field in instance._model.backup.data) {
          instance[field] = instance._model.backup.data[field];
        }
      }
      instance.changed = false;
    };


    /**
     * Gets/sets the status if object changed
     * @param flag {boolean} - value of changed status
     * @returns {boolean}
     */
    this._model.status['change'] = function (flag?: boolean) {
      if (flag)
        instance.changed = flag;
      return instance.changed;
    };
  }
};
