export interface ErrorNotificator {
  notify(error: Error): Promise<void>
}