
export type messageType =  0 | 1;
export interface IReturnMessage<T> {
    data: T,
    no: messageType
}