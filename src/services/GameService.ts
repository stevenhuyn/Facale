import { Scenario } from "../utility/Scenario";
import { DispatchEvent, DispatchEventType } from "../utility/Utility";

export class GameService extends EventTarget {
  static #instance: GameService;

  public static Instance(): GameService {
    if (!this.#instance) {
      this.#instance = new GameService();
    }
    return this.#instance;
  }

  #gameId: string | null = null;
  #scenario: Scenario | null = null;
  #name: string | null = null;

  //#region Getters and Setters
  public get gameId() {
    return this.#gameId;
  }

  public set gameId(gameId: string | null) {
    if (this.#gameId === gameId) return;
    this.#gameId = gameId;
    this.dispatch(DispatchEvent.gameId);
  }

  public get scenario() {
    return this.#scenario;
  }

  public set scenario(scenario: Scenario | null) {
    if (this.#scenario === scenario) return;
    this.#scenario = scenario;
    this.dispatch(DispatchEvent.scenario);
  }

  public get name() {
    return this.#name;
  }

  public set name(name: string | null) {
    if (this.#name === name) return;
    this.#name = name;
    this.dispatch(DispatchEvent.name);
  }
  //#endregion

  get queryParams(): string {
    const params = new URLSearchParams({});
    this.name && params.set("name", this.name);
    this.gameId && params.set("gameId", this.gameId);
    this.scenario && params.set("scenario", this.scenario);
    return params.toString();
  }

  // TODO: Make this method an interface/method to inherit or utility
  private dispatch(type: DispatchEventType, value?: unknown) {
    const event = new CustomEvent(type, { detail: value });
    this.dispatchEvent(event);
  }
}
