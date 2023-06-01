export interface IError extends Error {
    name: string;
    httpCode?: number;
    description?: string;
    isOperational?: boolean;
}