export interface Manufacturer {
  id: string;
  name: string;
}

export interface VehicleModel {
  id: string;
  manufacturerId: string;
  name: string;
}

export interface Engine {
  id: string;
  modelId: string;
  name: string; // Ex: 1.6 MSI, 2.0 TSI, 1.0 Firefly
  code?: string; // Ex: EA211, EA111
  fuel: string;
  years: number[]; // Anos em que este motor saiu neste modelo
}

export interface OilSpec {
  engineId: string;
  viscosity: string;
  manufacturerNorm: string; // Ex: VW 508.88, Dexos 1 Gen 2
  acea?: string;
  api?: string;
  capacity: number; // Litros
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  engine: string;
  fuel: string;
  oil_spec: string;
  oil_quantity: number;
  filter_type: string;
}

export interface CustomerData {
  name: string;
  phone: string;
  neighborhood: string;
  preferredTime: string;
  km: string;
  plate?: string;
}
