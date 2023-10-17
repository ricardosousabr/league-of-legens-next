export interface IResponseAPI {
  [key: string]: {
    name: string,
    lore: string,
    image: {
      full: string
    },
    spells: [
      {
        name: string,
        description: string,
      }
    ],
    passive: {
      name: string,
      description: string,
    }
  }
}

