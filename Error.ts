import { IError } from './IError';

class CustomError extends Error {
    name: string;
    message!: string;
    httpCode?: number;
    description?: string;
    isOperational?: boolean;
    constructor(name: string, message: string) {
        super();
        this.name = name;
        this.message = message;
    }
}

export default CustomError;