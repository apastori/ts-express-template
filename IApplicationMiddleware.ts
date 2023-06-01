import { IApplication } from './IApplication';

interface IApplicationMiddleware extends IApplication {
    x: number
}

export { IApplicationMiddleware }