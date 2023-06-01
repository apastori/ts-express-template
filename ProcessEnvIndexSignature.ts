import { IEnvIndexSignature } from './IEnvIndexSignature';
import { IProcessEnv } from './IProcessEnv';
import {  Environment } from './environmentType';

class ProcessEnvIndexSignature implements IEnvIndexSignature, IProcessEnv  {
    [key: string]: string | undefined;
    PORT: string;
    ENV: Environment;
    DBNAME?: string;
    DBPORT?: string;
    HOST?: string;
    constructor(port: string, env: Environment, dbname?: string, dbport?: string, host?: string) {
        this.PORT = port;
        this.ENV = env;
        this.DBNAME = dbname;
        this.DBPORT = dbport;
        this.HOST = host;
    }
}

export { ProcessEnvIndexSignature }