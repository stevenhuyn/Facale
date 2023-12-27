import ChatCompletionRole from "openai";
export const MessageRole = ChatCompletionRole;

export type DispatchEventType = (typeof DispatchEvent)[keyof typeof DispatchEvent];
export const DispatchEvent = {
  loading: "plakait-loading",
  history: "plakait-history",
  endMessage: "plakait-endMessage",
  gameId: "plakait-gameId",
  scenario: "plakait-scenario",
  name: "plakait-name",
};
