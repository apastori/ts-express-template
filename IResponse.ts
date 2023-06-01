import { Response } from "express";

export interface IResponse extends Omit<Response, 'send'> {
    send(text: string): void
}