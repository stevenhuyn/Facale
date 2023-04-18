import { BACKEND_BASE_URL } from "../config";
import { Scenario } from "./Scenario";

export type BotMessage = {
  type: "Bot";
  name: string;
  expression: string;
  content: string;
  endMessage?: string;
};

export type UserMessage = {
  type: "User";
  name?: string;
  content?: string;
};

export type Message = BotMessage | UserMessage;

export const PostChat = async (
  game_id: string,
  name: string,
  content: string
): Promise<Message[] | null> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, content }),
  };

  const endpoint = new URL(`/chat/${game_id}`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => response.json() as Promise<Message[]>)
    .catch(() => {
      throw Error("Add message to backend failed");
    });
};

interface PostGameResponse {
  gameId: string;
  messages: Message[];
}
export const PostGame = async (scenario: Scenario): Promise<PostGameResponse | null> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ scenario }),
  };

  const endpoint = new URL("/game", BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => response.json() as Promise<PostGameResponse>)
    .catch(() => {
      throw Error("Failed to initiate room");
    });
};

export const GetHistory = async (game_id: string): Promise<Message[] | null> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const endpoint = new URL(`/history/${game_id}`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => response.json() as Promise<Message[]>)
    .catch(() => {
      throw Error("Failed to get messages");
    });
};

export const GetRoot = async (): Promise<string | null> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const endpoint = new URL(`/`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .catch(() => {
      throw Error("Failed to get messages");
    });
};
