export * from './customer';

export type ApiMessage = {
  code: string;
  message: string;
}

export type ApiResponse<T> = {
    status: boolean;
    message: ApiMessage[];
    reason: string;
    data: T;
    count: number;
}