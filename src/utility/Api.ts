import { Scenario } from "./Scenario";

console.log(window.location.host);
console.log(window.location.host.includes("plakait"));

const BACKEND_BASE_URL =
  window.location.host.includes("plakait")
    ? new URL("https://plakait-backend-production.up.railway.app/")
    : new URL("http://localhost:8000/");

console.log("BACKEND_BASE_URL", BACKEND_BASE_URL);

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
): Promise<Message[]> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, content }),
  };

  const endpoint = new URL(`/chat/${game_id}`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json() as Promise<Message[]>;
      }
      throw Error("Failed Post message - Server returned a non 200 response");
    })
    .catch(() => {
      throw Error("Post Chat Exception");
    });
};

interface PostGameResponse {
  gameId: string;
  messages: Message[];
}
export const PostGame = async (scenario: Scenario): Promise<PostGameResponse> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ scenario }),
  };

  const endpoint = new URL("/game", BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json() as Promise<PostGameResponse>;
      }
      throw Error("Failed to initiate game - Server returned a non 200 response");
    })
    .catch(() => {
      throw Error("Post Game Exception");
    });
};

export const GetHistory = async (game_id: string): Promise<Message[]> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const endpoint = new URL(`/history/${game_id}`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json() as Promise<Message[]>;
      }
      throw Error("Failed to Get game history - Server returned a non 200 response");
    })
    .catch(() => {
      throw Error("Get History Exception");
    });
};

export const GetRoot = async (): Promise<string> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const endpoint = new URL(`/`, BACKEND_BASE_URL);
  return fetch(endpoint, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw Error("Failed to Get Root - Server returned a non 200 response");
    })
    .catch(() => {
      throw Error("Get Root Exception");
    });
};
