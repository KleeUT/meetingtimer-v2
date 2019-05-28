export interface Timer {
  start(action: Function): void;
  stop(): void;
  isRunning(): boolean;
}

let timerInstance: TimeProvider;

class TimeProvider implements Timer {
  private timeout: number | undefined;
  private running: boolean;
  constructor() {
    this.running = false;
  }
  start(action: Function) {
    console.log(`Starting: Current timeout is ${this.timeout}`);
    this.timeout = window.setTimeout(() => {
      action();
      this.start(action);
    }, 1000);
    this.running = true;
    console.log(`Started ${this.timeout}`);
  }
  stop() {
    window.clearTimeout(this.timeout);
    this.timeout = undefined;
    this.running = false;
    console.log("STOPPED");
  }
  isRunning() {
    return this.running;
  }
}

export const getTimeProvider = () => {
  console.log("getting");
  if (!timerInstance) {
    console.log("New instance time");
    timerInstance = new TimeProvider();
  }
  return timerInstance;
};
