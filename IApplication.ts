import { Application } from 'express';

interface IApplication extends Omit<Application, 'listen' | 'get'> {
  listen(port: number, callback?: () => void): any;
  get(path: string, callback?: () => void): any;
}

export { IApplication }