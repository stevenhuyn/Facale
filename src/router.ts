import { Router } from "@vaadin/router";

export const router = new Router(document.getElementById("main"));
router.setRoutes([
  { path: "/", component: "landing-page" },
  { path: "/game(/?)(\\?.*)?", component: "game-page" },
  { path: "/name", component: "name-page" },
  { path: "(.*)", component: "not-found-page" },
]);
