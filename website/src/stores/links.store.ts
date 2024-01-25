import { writable } from 'svelte/store';
import { type IEventMessage } from "@/class/IEventMessage";

export function createWebSocketStore(url: string) {
    const { subscribe, set, update } = writable<any[]>([]);

    let ws: WebSocket;
    let attempt = 0;

    const connect = () => {
        ws = new WebSocket(`wss://${url}/ws`);

        ws.onopen = () => {
            console.log("WebSocket connected");
            attempt = 0;
        };

        ws.onmessage = (event) => {
            const newMessage: IEventMessage = JSON.parse(event.data);
            console.log(newMessage)
            update(messages => {
                const updatedMessages = [...messages, newMessage].slice(-10000);
                localStorage.setItem('messages', JSON.stringify(updatedMessages));
                return updatedMessages;
            });
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
            attempt++;
            const delay = Math.min(1000 * (2 ** attempt), 30000);
            setTimeout(connect, delay);
        };
    };

    connect();

    return {
        set,
        subscribe,
        sendMessage: (message: any) => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(message);
            }
        },
        reconnect: () => {
            if (ws) {
                ws.close();
            } else {
                connect();
            }
        }
    };
}

export const nodeREDURL = "apollo.sdataplab.com/node-red";
export const messages = createWebSocketStore(nodeREDURL);
