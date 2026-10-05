import { createFridge } from './fridge.js';
import { createWasher } from './washer.js';
import { createAirConditioner } from './aircon.js';
import { createTelevision } from './tv.js';
import { createMicrowave, createRiceCooker, createKettle, createOven } from './kitchen.js';
import { createFan, createRadio, createBoombox, createLamp } from './living.js';
import { createVacuum, createTelephone, createSewingMachine, createHairDryer } from './utility.js';

export const BUILDERS = {
  fridge: createFridge,
  washer: createWasher,
  aircon: createAirConditioner,
  tv: createTelevision,
  fan: createFan,
  radio: createRadio,
  boombox: createBoombox,
  microwave: createMicrowave,
  riceCooker: createRiceCooker,
  kettle: createKettle,
  oven: createOven,
  lamp: createLamp,
  vacuum: createVacuum,
  telephone: createTelephone,
  sewingMachine: createSewingMachine,
  hairDryer: createHairDryer,
};

export const APPLIANCE_IDS = Object.keys(BUILDERS);

export function createAppliance(id) {
  const builder = BUILDERS[id];
  if (!builder) throw new Error(`Unknown appliance id: ${id}`);
  return builder();
}
