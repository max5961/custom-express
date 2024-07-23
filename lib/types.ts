import http from "http";
import HttpResponse from "./HttpResponse";

/* The app[method] names */
export type AppMethod = "GET" | "POST" | "PUT" | "DELETE" | "USE";

export type HttpRequest = http.IncomingMessage & {
    body?: any;
    params?: any;
};

export type HttpError = Error & { [key: string]: string };
export type Next = (err?: HttpError) => void;
export type Handler = (req: HttpRequest, res: HttpResponse, next: Next) => void;
export type ErrorHandler = (
    err: HttpError,
    req: HttpRequest,
    res: HttpResponse,
    next: Next,
) => void;
