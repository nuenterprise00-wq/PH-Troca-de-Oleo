import { Vehicle } from './types';

export const WHATSAPP_NUMBER = '5521997573111';

export const VEHICLES: Vehicle[] = [
  // Honda
  { id: 1, brand: 'Honda', model: 'Civic', year: 2018, engine: '2.0', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 4.2, filter_type: 'PH5939' },
  { id: 2, brand: 'Honda', model: 'Civic', year: 2014, engine: '1.8', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 3.7, filter_type: 'PH5939' },
  { id: 3, brand: 'Honda', model: 'Fit', year: 2015, engine: '1.5', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 3.6, filter_type: 'PH5939' },
  { id: 4, brand: 'Honda', model: 'HR-V', year: 2019, engine: '1.8', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 3.7, filter_type: 'PH5939' },

  // Toyota
  { id: 5, brand: 'Toyota', model: 'Corolla', year: 2020, engine: '2.0', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 4.4, filter_type: 'PH10358' },
  { id: 6, brand: 'Toyota', model: 'Corolla', year: 2015, engine: '1.8', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 4.2, filter_type: 'PH10358' },
  { id: 7, brand: 'Toyota', model: 'Etios', year: 2017, engine: '1.3', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 3.4, filter_type: 'PH10358' },
  { id: 8, brand: 'Toyota', model: 'Hilux', year: 2018, engine: '2.8 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 7.5, filter_type: 'PH11457' },

  // Volkswagen
  { id: 9, brand: 'Volkswagen', model: 'Gol', year: 2015, engine: '1.0', fuel: 'Flex', oil_spec: '5W40 Sintético', oil_quantity: 3.5, filter_type: 'PH5548' },
  { id: 10, brand: 'Volkswagen', model: 'Polo', year: 2020, engine: '1.0 TSI', fuel: 'Flex', oil_spec: '5W40 Sintético', oil_quantity: 4.0, filter_type: 'PH5548' },
  { id: 11, brand: 'Volkswagen', model: 'Amarok', year: 2015, engine: '2.0 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 7.0, filter_type: 'PH10958' },
  { id: 12, brand: 'Volkswagen', model: 'Golf', year: 2016, engine: '1.4 TSI', fuel: 'Flex', oil_spec: '5W40 Sintético', oil_quantity: 4.0, filter_type: 'PH5548' },

  // Chevrolet
  { id: 13, brand: 'Chevrolet', model: 'Onix', year: 2019, engine: '1.0 Turbo', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 3.5, filter_type: 'PH4722' },
  { id: 14, brand: 'Chevrolet', model: 'Onix', year: 2015, engine: '1.0', fuel: 'Flex', oil_spec: '5W30 Semi-Sintético', oil_quantity: 3.5, filter_type: 'PH4722' },
  { id: 15, brand: 'Chevrolet', model: 'S10', year: 2018, engine: '2.8 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 6.0, filter_type: 'PH11462' },
  { id: 16, brand: 'Chevrolet', model: 'Cruze', year: 2017, engine: '1.4 Turbo', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 4.0, filter_type: 'PH4722' },

  // Fiat
  { id: 17, brand: 'Fiat', model: 'Palio', year: 2014, engine: '1.0 Fire', fuel: 'Flex', oil_spec: '15W40 Semi-Sintético', oil_quantity: 2.7, filter_type: 'PH5949' },
  { id: 18, brand: 'Fiat', model: 'Toro', year: 2018, engine: '2.0 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 4.8, filter_type: 'PH11462' },
  { id: 19, brand: 'Fiat', model: 'Argo', year: 2020, engine: '1.0 Firefly', fuel: 'Flex', oil_spec: '0W20 Sintético', oil_quantity: 3.2, filter_type: 'PH5949' },
  { id: 20, brand: 'Fiat', model: 'Strada', year: 2019, engine: '1.4 Fire', fuel: 'Flex', oil_spec: '15W40 Semi-Sintético', oil_quantity: 2.7, filter_type: 'PH5949' },

  // Ford
  { id: 21, brand: 'Ford', model: 'Ka', year: 2018, engine: '1.0 3cil', fuel: 'Flex', oil_spec: '5W20 Sintético', oil_quantity: 4.0, filter_type: 'PH10027' },
  { id: 22, brand: 'Ford', model: 'EcoSport', year: 2017, engine: '1.5 3cil', fuel: 'Flex', oil_spec: '5W20 Sintético', oil_quantity: 4.0, filter_type: 'PH10027' },
  { id: 23, brand: 'Ford', model: 'Ranger', year: 2015, engine: '3.2 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 9.8, filter_type: 'PH11457' },

  // Hyundai
  { id: 24, brand: 'Hyundai', model: 'HB20', year: 2019, engine: '1.0', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 3.5, filter_type: 'PH10358' },
  { id: 25, brand: 'Hyundai', model: 'Creta', year: 2020, engine: '2.0', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 4.0, filter_type: 'PH10358' },

  // Jeep
  { id: 26, brand: 'Jeep', model: 'Renegade', year: 2018, engine: '1.8', fuel: 'Flex', oil_spec: '5W30 Sintético', oil_quantity: 4.3, filter_type: 'PH11462' },
  { id: 27, brand: 'Jeep', model: 'Compass', year: 2019, engine: '2.0 Diesel', fuel: 'Diesel', oil_spec: '5W30 Sintético', oil_quantity: 4.8, filter_type: 'PH11462' },
];
