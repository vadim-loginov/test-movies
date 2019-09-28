import { EventEmitter } from '@angular/core';

export interface BusEvent {
  action: string;
  data: any;
}

export const bus: EventEmitter<BusEvent> = new EventEmitter();
