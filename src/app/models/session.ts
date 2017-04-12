/**
 * Session interface
 */
export interface ISession {
  token: string;    // session token
  started: number;  // when session started
  expires: number;  // when session expires
};


/**
 * User session class
 */
export class Session {
  token: string = '';         // session token
  started: Date|null = null;  // when sessions started
  expires: Date|null = null;  // when session expires

  /**
   * Constructor
   * @param config {ISession} - configuration object
   */
  constructor (config?: ISession) {
    if (config) {
      this.token = config.token;
      this.started = new Date(config.started * 1000);
      this.expires = new Date(config.expires * 1000);
    }
  };
};
