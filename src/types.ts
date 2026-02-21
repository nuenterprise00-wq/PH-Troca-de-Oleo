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

export interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  viscosity: string;
  price_per_liter: number;
  service_fee: number;
}

export interface CustomerData {
  name: string;
  phone: string;
  neighborhood: string;
  preferredTime: string;
  km: string;
  plate?: string;
}

export interface Settings {
  whatsapp_number: string;
}
