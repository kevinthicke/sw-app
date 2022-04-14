type WithLength = {
  length: number;
}

export const isEmpty = <T extends WithLength>(value: T) => !value.length