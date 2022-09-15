export interface IhttpRequestParameters<T>{
    url: string;
    payload?: T;
    param?: T;

}
export interface IhttpClent{
    get<T, U>(parameters: IhttpRequestParameters<T>): Promise<U>
}