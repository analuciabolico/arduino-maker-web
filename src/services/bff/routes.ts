import { Class } from "#/models/classes/classes";
import { bff, List, Object } from "#/services/bff/server";

export const ENDPOINTS = {
  BLOCKS: () => "/api/blocks",
  ACTUATORS: () => "/api/blocks/actuators",
  SENSORS: () => "/api/blocks/sensors",
  FIXED: () => "/api/blocks/fixed",
};

export const BFF = {
  BLOCKS: (): List<Class> => bff.get(ENDPOINTS.BLOCKS()),
  ACTUATORS: (): List<Class> => bff.get(ENDPOINTS.ACTUATORS()),
  SENSORS: (): List<Class> => bff.get(ENDPOINTS.SENSORS()),
  FIXED: (): Object<Class> => bff.get(ENDPOINTS.FIXED()),
};
