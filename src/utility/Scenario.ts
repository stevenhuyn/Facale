export interface ScenarioConfig {
  userName: string;
  oppName: string;
  introText: string;
}

export enum Scenario {
  CarSale = "CarSale",
  BadMil = "BadMil",
  ToiletRun = "ToiletRun",
}

// https://stackoverflow.com/questions/44243060/use-enum-as-restricted-key-type-in-typescript
export const ScenarioData: { [key in Scenario]: ScenarioConfig } = {
  [Scenario.BadMil]: {
    userName: "Jane",
    oppName: "Pamela",
    introText: "Jane your mission is to retrieve your son Jack from your mother in law Pamela",
  },
  [Scenario.CarSale]: {
    userName: "John",
    oppName: "Nick",
    introText: "John your mission is to try to buy a car for as cheap as possible",
  },
  [Scenario.ToiletRun]: {
    userName: "Multiple People",
    oppName: "Jared",
    introText:
      "Mark need to go the the toilet. This MacDonald's toilet is closed, and you are now confronting the store manager Jared",
  },
};
