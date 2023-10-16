export interface IResponseAPI {
  [key: string]: {
    name: string,
    lore: string,
    image: {
      full: string
    },
    spells: [
      {
        name: string
      }
    ]
  }
}

