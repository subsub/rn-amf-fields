export const dismissedAction = 'DISMISSED_ACTION'

export function open(options) {
  return new Promise((resolve, reject) => {
    resolve({
      action: dismissedAction,
      year: 2017,
      month: 7,
      day: 7
    })
  })
}