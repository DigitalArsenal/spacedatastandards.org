export interface IEventMessage {
    id: string;
    timestamp: Date;
    // Dictionary type for string key-value pairs
    headers: Record<string, string>;
    // Index signature to include any additional properties
    [key: string]: any;
}