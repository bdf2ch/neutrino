import { Injectable } from '@angular/core';
import { Session } from "selenium-webdriver";

@Injectable()
export class SessionManagerService {
  private sessions: Session[] = [];
  private currentSession: Session|null = null;

  constructor() {};

  /**
   * Return session of current user
   * @returns {Session|null}
   */
  getCurrentSession(): Session|null {
    return this.currentSession;
  };
}
