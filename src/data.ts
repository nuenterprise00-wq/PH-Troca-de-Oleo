import { Manufacturer, VehicleModel, Engine, OilSpec } from './types';

export const WHATSAPP_NUMBER = '5521997573111';

export const MANUFACTURERS: Manufacturer[] = [
  { id: 'vw', name: 'Volkswagen' },
  { id: 'gm', name: 'Chevrolet' },
  { id: 'fiat', name: 'Fiat' },
  { id: 'toyota', name: 'Toyota' },
  { id: 'honda', name: 'Honda' },
  { id: 'hyundai', name: 'Hyundai' },
  { id: 'jeep', name: 'Jeep' },
  { id: 'other', name: 'Outro' },
];

export const MODELS: VehicleModel[] = [
  // VW
  { id: 'vw-gol', manufacturerId: 'vw', name: 'Gol' },
  { id: 'vw-fox', manufacturerId: 'vw', name: 'Fox' },
  { id: 'vw-voyage', manufacturerId: 'vw', name: 'Voyage' },
  { id: 'vw-polo', manufacturerId: 'vw', name: 'Polo' },
  { id: 'vw-saveiro', manufacturerId: 'vw', name: 'Saveiro' },
  { id: 'vw-up', manufacturerId: 'vw', name: 'Up' },
  { id: 'vw-virtus', manufacturerId: 'vw', name: 'Virtus' },
  { id: 'vw-tcross', manufacturerId: 'vw', name: 'T-Cross' },
  { id: 'vw-nivus', manufacturerId: 'vw', name: 'Nivus' },
  { id: 'vw-taos', manufacturerId: 'vw', name: 'Taos' },
  
  // GM
  { id: 'gm-corsa', manufacturerId: 'gm', name: 'Corsa' },
  { id: 'gm-celta', manufacturerId: 'gm', name: 'Celta' },
  { id: 'gm-classic', manufacturerId: 'gm', name: 'Classic' },
  { id: 'gm-astra', manufacturerId: 'gm', name: 'Astra' },
  { id: 'gm-vectra', manufacturerId: 'gm', name: 'Vectra' },
  { id: 'gm-zafira', manufacturerId: 'gm', name: 'Zafira' },
  { id: 'gm-onix', manufacturerId: 'gm', name: 'Onix' },
  { id: 'gm-prisma', manufacturerId: 'gm', name: 'Prisma' },
  { id: 'gm-cobalt', manufacturerId: 'gm', name: 'Cobalt' },
  { id: 'gm-spin', manufacturerId: 'gm', name: 'Spin' },
  { id: 'gm-sonic', manufacturerId: 'gm', name: 'Sonic' },
  { id: 'gm-tracker', manufacturerId: 'gm', name: 'Tracker' },

  // Fiat
  { id: 'fiat-uno', manufacturerId: 'fiat', name: 'Uno' },
  { id: 'fiat-palio', manufacturerId: 'fiat', name: 'Palio' },
  { id: 'fiat-siena', manufacturerId: 'fiat', name: 'Siena' },
  { id: 'fiat-strada', manufacturerId: 'fiat', name: 'Strada' },
  { id: 'fiat-argo', manufacturerId: 'fiat', name: 'Argo' },
  { id: 'fiat-cronos', manufacturerId: 'fiat', name: 'Cronos' },
  { id: 'fiat-mobi', manufacturerId: 'fiat', name: 'Mobi' },
  { id: 'fiat-pulse', manufacturerId: 'fiat', name: 'Pulse' },
  { id: 'fiat-fastback', manufacturerId: 'fiat', name: 'Fastback' },
  { id: 'fiat-toro', manufacturerId: 'fiat', name: 'Toro' },

  // Jeep
  { id: 'jeep-renegade', manufacturerId: 'jeep', name: 'Renegade' },
  { id: 'jeep-compass', manufacturerId: 'jeep', name: 'Compass' },
  { id: 'jeep-commander', manufacturerId: 'jeep', name: 'Commander' },
  { id: 'jeep-grand-cherokee', manufacturerId: 'jeep', name: 'Grand Cherokee' },
  { id: 'jeep-compass-4xe', manufacturerId: 'jeep', name: 'Compass 4xe (Híbrido)' },

  // Toyota
  { id: 'toyota-corolla', manufacturerId: 'toyota', name: 'Corolla' },
  { id: 'toyota-corolla-cross', manufacturerId: 'toyota', name: 'Corolla Cross' },
  { id: 'toyota-hilux', manufacturerId: 'toyota', name: 'Hilux' },
  { id: 'toyota-etios', manufacturerId: 'toyota', name: 'Etios' },
  { id: 'toyota-yaris', manufacturerId: 'toyota', name: 'Yaris' },

  // Honda
  { id: 'honda-civic', manufacturerId: 'honda', name: 'Civic' },
  { id: 'honda-hrv', manufacturerId: 'honda', name: 'HR-V' },
  { id: 'honda-city', manufacturerId: 'honda', name: 'City' },
  { id: 'honda-accord', manufacturerId: 'honda', name: 'Accord' },
  { id: 'honda-crv', manufacturerId: 'honda', name: 'CR-V' },

  // Hyundai
  { id: 'hyundai-hb20', manufacturerId: 'hyundai', name: 'HB20' },
  { id: 'hyundai-creta', manufacturerId: 'hyundai', name: 'Creta' },
  { id: 'hyundai-i30', manufacturerId: 'hyundai', name: 'i30' },
  { id: 'hyundai-tucson', manufacturerId: 'hyundai', name: 'Tucson' },
  { id: 'hyundai-santafe', manufacturerId: 'hyundai', name: 'Santa Fe' },
];

export const ENGINES: Engine[] = [
  // VW EA111
  { id: 'vw-ea111-10', modelId: 'vw-gol', name: '1.0 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { id: 'vw-ea111-16', modelId: 'vw-gol', name: '1.6 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { id: 'vw-ea111-10-fox', modelId: 'vw-fox', name: '1.0 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { id: 'vw-ea111-16-fox', modelId: 'vw-fox', name: '1.6 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { id: 'vw-ea111-10-voyage', modelId: 'vw-voyage', name: '1.0 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { id: 'vw-ea111-16-voyage', modelId: 'vw-voyage', name: '1.6 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { id: 'vw-ea111-16-polo-old', modelId: 'vw-polo', name: '1.6 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { id: 'vw-ea111-16-saveiro', modelId: 'vw-saveiro', name: '1.6 8V Flex (EA111)', code: 'EA111', fuel: 'Flex', years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  
  // VW EA211 MPI
  { id: 'vw-ea211-mpi-10', modelId: 'vw-up', name: '1.0 12V Flex (EA211 MPI)', code: 'EA211', fuel: 'Flex', years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { id: 'vw-ea211-mpi-10-polo', modelId: 'vw-polo', name: '1.0 12V Flex (EA211 MPI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-mpi-10-gol', modelId: 'vw-gol', name: '1.0 12V Flex (EA211 MPI)', code: 'EA211', fuel: 'Flex', years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023] },
  { id: 'vw-ea211-mpi-10-virtus', modelId: 'vw-virtus', name: '1.0 12V Flex (EA211 MPI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022] },

  // VW EA211 MSI
  { id: 'vw-ea211-msi-16', modelId: 'vw-polo', name: '1.6 16V Flex (EA211 MSI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022] },
  { id: 'vw-ea211-msi-16-nivus', modelId: 'vw-nivus', name: '1.6 16V Flex (EA211 MSI)', code: 'EA211', fuel: 'Flex', years: [2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-msi-16-virtus', modelId: 'vw-virtus', name: '1.6 16V Flex (EA211 MSI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022] },
  { id: 'vw-ea211-msi-16-gol', modelId: 'vw-gol', name: '1.6 16V Flex (EA211 MSI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022] },

  // VW EA211 TSI
  { id: 'vw-ea211-tsi-10', modelId: 'vw-tcross', name: '1.0 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-tsi-10-polo', modelId: 'vw-polo', name: '1.0 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-tsi-10-virtus', modelId: 'vw-virtus', name: '1.0 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-tsi-10-nivus', modelId: 'vw-nivus', name: '1.0 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2020, 2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-tsi-14', modelId: 'vw-taos', name: '1.4 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'vw-ea211-tsi-14-tcross', modelId: 'vw-tcross', name: '1.4 Turbo Flex (TSI)', code: 'EA211', fuel: 'Flex', years: [2019, 2020, 2021, 2022, 2023, 2024] },

  // GM Família I
  { id: 'gm-fam1-10', modelId: 'gm-celta', name: '1.0 8V (Família I)', code: 'Família I', fuel: 'Flex', years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015] },
  { id: 'gm-fam1-10-corsa', modelId: 'gm-corsa', name: '1.0 8V (Família I)', code: 'Família I', fuel: 'Flex', years: [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012] },
  { id: 'gm-fam1-10-classic', modelId: 'gm-classic', name: '1.0 8V (Família I)', code: 'Família I', fuel: 'Flex', years: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  
  // GM Família II
  { id: 'gm-fam2-20', modelId: 'gm-astra', name: '2.0 8V (Família II)', code: 'Família II', fuel: 'Flex', years: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011] },
  { id: 'gm-fam2-20-vectra', modelId: 'gm-vectra', name: '2.0 8V (Família II)', code: 'Família II', fuel: 'Flex', years: [2006, 2007, 2008, 2009, 2010, 2011] },

  // GM SPE/4
  { id: 'gm-spe4-10', modelId: 'gm-onix', name: '1.0 Flex (SPE/4)', code: 'SPE/4', fuel: 'Flex', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { id: 'gm-spe4-14', modelId: 'gm-onix', name: '1.4 Flex (SPE/4)', code: 'SPE/4', fuel: 'Flex', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { id: 'gm-spe4-14-prisma', modelId: 'gm-prisma', name: '1.4 Flex (SPE/4)', code: 'SPE/4', fuel: 'Flex', years: [2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { id: 'gm-spe4-14-cobalt', modelId: 'gm-cobalt', name: '1.4 Flex (SPE/4)', code: 'SPE/4', fuel: 'Flex', years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  { id: 'gm-spe4-18-spin', modelId: 'gm-spin', name: '1.8 Flex (SPE/4)', code: 'SPE/4', fuel: 'Flex', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },

  // GM CSS Prime
  { id: 'gm-css-10t', modelId: 'gm-onix', name: '1.0 Turbo Flex (CSS Prime)', code: 'CSS Prime', fuel: 'Flex', years: [2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'gm-css-10t-tracker', modelId: 'gm-tracker', name: '1.0 Turbo Flex (CSS Prime)', code: 'CSS Prime', fuel: 'Flex', years: [2020, 2021, 2022, 2023, 2024] },
  { id: 'gm-css-12t-tracker', modelId: 'gm-tracker', name: '1.2 Turbo Flex (CSS Prime)', code: 'CSS Prime', fuel: 'Flex', years: [2020, 2021, 2022, 2023, 2024] },

  // Fiat Fire
  { id: 'fiat-fire-10', modelId: 'fiat-uno', name: '1.0 Fire', code: 'Fire', fuel: 'Flex', years: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014] },
  { id: 'fiat-fire-10-palio', modelId: 'fiat-palio', name: '1.0 Fire', code: 'Fire', fuel: 'Flex', years: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017] },
  { id: 'fiat-fire-14-strada', modelId: 'fiat-strada', name: '1.4 Fire', code: 'Fire', fuel: 'Flex', years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },

  // Fiat Firefly
  { id: 'fiat-firefly-10', modelId: 'fiat-argo', name: '1.0 3cil Firefly', code: 'GSE', fuel: 'Flex', years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'fiat-firefly-13-argo', modelId: 'fiat-argo', name: '1.3 Firefly', code: 'GSE', fuel: 'Flex', years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'fiat-firefly-10-mobi', modelId: 'fiat-mobi', name: '1.0 3cil Firefly', code: 'GSE', fuel: 'Flex', years: [2016, 2017, 2018, 2019, 2020] },
  { id: 'fiat-firefly-13-strada', modelId: 'fiat-strada', name: '1.3 Firefly', code: 'GSE', fuel: 'Flex', years: [2020, 2021, 2022, 2023, 2024] },

  // Fiat T270
  { id: 'fiat-t270-13', modelId: 'fiat-pulse', name: '1.3 Turbo (T270)', code: 'GSE T4', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'fiat-t270-13-fastback', modelId: 'fiat-fastback', name: '1.3 Turbo (T270)', code: 'GSE T4', fuel: 'Flex', years: [2022, 2023, 2024] },
  { id: 'fiat-t270-13-toro', modelId: 'fiat-toro', name: '1.3 Turbo (T270)', code: 'GSE T4', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'fiat-t270-13-compass', modelId: 'fiat-compass', name: '1.3 Turbo (T270)', code: 'GSE T4', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },

  // Toyota ZR / Dynamic Force
  { id: 'toyota-zr-20', modelId: 'toyota-corolla', name: '2.0 16V (ZR)', code: '3ZR-FE', fuel: 'Flex', years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'toyota-zr-20-cross', modelId: 'toyota-corolla-cross', name: '2.0 16V (ZR)', code: 'M20A-FKB', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'toyota-18-hybrid', modelId: 'toyota-corolla', name: '1.8 Hybrid', code: '2ZR-FXE', fuel: 'Híbrido', years: [2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'toyota-18-hybrid-cross', modelId: 'toyota-corolla-cross', name: '1.8 Hybrid', code: '2ZR-FXE', fuel: 'Híbrido', years: [2021, 2022, 2023, 2024] },

  // Toyota Hilux
  { id: 'toyota-hilux-27', modelId: 'toyota-hilux', name: '2.7 16V (2TR-FE)', code: '2TR-FE', fuel: 'Flex', years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'toyota-hilux-28', modelId: 'toyota-hilux', name: '2.8 Turbo Diesel (GD-6)', code: '1GD-FTV', fuel: 'Diesel', years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },

  // Honda Série R / i-VTEC
  { id: 'honda-r-20', modelId: 'honda-civic', name: '2.0 16V (Série R)', code: 'R20Z5', fuel: 'Flex', years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { id: 'honda-r-20-hrv', modelId: 'honda-hrv', name: '1.8 16V (Série R)', code: 'R18Z9', fuel: 'Flex', years: [2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { id: 'honda-15-ivtec-hrv', modelId: 'honda-hrv', name: '1.5 i-VTEC', code: 'L15B', fuel: 'Flex', years: [2022, 2023, 2024] },
  { id: 'honda-15-turbo-civic', modelId: 'honda-civic', name: '1.5 Turbo', code: 'L15B7', fuel: 'Gasolina', years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  
  // Honda City / Accord / CR-V
  { id: 'honda-15-city', modelId: 'honda-city', name: '1.5 i-VTEC', code: 'L15', fuel: 'Flex', years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'honda-15-turbo-accord', modelId: 'honda-accord', name: '1.5 Turbo', code: 'L15', fuel: 'Gasolina', years: [2018, 2019, 2020, 2021, 2022] },
  { id: 'honda-20-turbo-accord', modelId: 'honda-accord', name: '2.0 Turbo', code: 'K20', fuel: 'Gasolina', years: [2018, 2019, 2020, 2021, 2022] },
  { id: 'honda-15-turbo-crv', modelId: 'honda-crv', name: '1.5 Turbo', code: 'L15', fuel: 'Gasolina', years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'honda-20-crv', modelId: 'honda-crv', name: '2.0 i-VTEC', code: 'R20', fuel: 'Gasolina', years: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },

  // Hyundai Kappa / Gamma / Smartstream
  { id: 'hyundai-kappa-10', modelId: 'hyundai-hb20', name: '1.0 12V (Kappa)', code: 'Kappa', fuel: 'Flex', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { id: 'hyundai-gamma-16-hb20', modelId: 'hyundai-hb20', name: '1.6 16V (Gamma)', code: 'Gamma', fuel: 'Flex', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
  { id: 'hyundai-smart-10t-hb20', modelId: 'hyundai-hb20', name: '1.0 Turbo (Smartstream)', code: 'G3LE', fuel: 'Flex', years: [2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'hyundai-20-i30', modelId: 'hyundai-i30', name: '2.0 MPI', code: 'Beta/Nu', fuel: 'Gasolina', years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] },
  { id: 'hyundai-16t-tucson', modelId: 'hyundai-tucson', name: '1.6 T-GDI', code: 'Gamma', fuel: 'Gasolina', years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'hyundai-22-santafe', modelId: 'hyundai-santafe', name: '2.2 CRDi Diesel', code: 'D4H', fuel: 'Diesel', years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },

  // Jeep Renegade
  { id: 'jeep-renegade-18', modelId: 'jeep-renegade', name: '1.8 E-TorQ 16V Flex', code: 'E-TorQ', fuel: 'Flex', years: [2015, 2016, 2017, 2018, 2019, 2020, 2021] },
  { id: 'jeep-renegade-13t', modelId: 'jeep-renegade', name: '1.3 T270 Turbo Flex', code: 'T270', fuel: 'Flex', years: [2022, 2023, 2024] },
  { id: 'jeep-renegade-20d', modelId: 'jeep-renegade', name: '2.0 Multijet II Turbo Diesel', code: 'Multijet', fuel: 'Diesel', years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },

  // Jeep Compass
  { id: 'jeep-compass-20', modelId: 'jeep-compass', name: '2.0 Tigershark Flex', code: 'Tigershark', fuel: 'Flex', years: [2016, 2017, 2018, 2019, 2020, 2021] },
  { id: 'jeep-compass-13t', modelId: 'jeep-compass', name: '1.3 T270 Turbo Flex', code: 'T270', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'jeep-compass-20d', modelId: 'jeep-compass', name: '2.0 Multijet II Diesel', code: 'Multijet', fuel: 'Diesel', years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },

  // Jeep Commander
  { id: 'jeep-commander-13t', modelId: 'jeep-commander', name: '1.3 T270 Turbo Flex', code: 'T270', fuel: 'Flex', years: [2021, 2022, 2023, 2024] },
  { id: 'jeep-commander-20d', modelId: 'jeep-commander', name: '2.0 Multijet II Diesel', code: 'Multijet', fuel: 'Diesel', years: [2021, 2022, 2023, 2024] },

  // Jeep Compass 4xe
  { id: 'jeep-compass-4xe-13t', modelId: 'jeep-compass-4xe', name: '1.3 Turbo Híbrido', code: 'GSE T4', fuel: 'Híbrido', years: [2022, 2023, 2024] },

  // Jeep Grand Cherokee
  { id: 'jeep-cherokee-36', modelId: 'jeep-grand-cherokee', name: '3.6 V6 Pentastar Gasolina', code: 'Pentastar', fuel: 'Gasolina', years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'jeep-cherokee-57', modelId: 'jeep-grand-cherokee', name: '5.7 V8 HEMI', code: 'HEMI', fuel: 'Gasolina', years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
  { id: 'jeep-cherokee-30d', modelId: 'jeep-grand-cherokee', name: '3.0 V6 Diesel', code: 'EcoDiesel', fuel: 'Diesel', years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
];

export const OIL_SPECS: OilSpec[] = [
  // VW EA111 (5W40, VW 502.00)
  { engineId: 'vw-ea111-10', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-16', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-10-fox', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-16-fox', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-10-voyage', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-16-voyage', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-16-polo-old', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },
  { engineId: 'vw-ea111-16-saveiro', viscosity: '5W40', manufacturerNorm: 'VW 502.00', api: 'SN', capacity: 3.5 },

  // VW EA211 MPI (0W20, VW 508.88)
  { engineId: 'vw-ea211-mpi-10', viscosity: '0W20', manufacturerNorm: 'VW 508.88 / 509.99', api: 'SN', capacity: 3.6 },
  { engineId: 'vw-ea211-mpi-10-polo', viscosity: '0W20', manufacturerNorm: 'VW 508.88 / 509.99', api: 'SN', capacity: 3.6 },
  { engineId: 'vw-ea211-mpi-10-gol', viscosity: '0W20', manufacturerNorm: 'VW 508.88 / 509.99', api: 'SN', capacity: 3.6 },
  { engineId: 'vw-ea211-mpi-10-virtus', viscosity: '0W20', manufacturerNorm: 'VW 508.88 / 509.99', api: 'SN', capacity: 3.6 },

  // VW EA211 MSI (0W20, VW 508.88)
  { engineId: 'vw-ea211-msi-16', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-msi-16-nivus', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-msi-16-virtus', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-msi-16-gol', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },

  // VW EA211 TSI (0W20, VW 508.88)
  { engineId: 'vw-ea211-tsi-10', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-tsi-10-polo', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-tsi-10-virtus', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-tsi-10-nivus', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.0 },
  { engineId: 'vw-ea211-tsi-14', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.3 },
  { engineId: 'vw-ea211-tsi-14-tcross', viscosity: '0W20', manufacturerNorm: 'VW 508.88', api: 'SN', capacity: 4.3 },

  // GM Família I (5W30, GM 6094M)
  { engineId: 'gm-fam1-10', viscosity: '5W30', manufacturerNorm: 'GM 6094M', api: 'SL/SM/SN', capacity: 3.5 },
  { engineId: 'gm-fam1-10-corsa', viscosity: '5W30', manufacturerNorm: 'GM 6094M', api: 'SL/SM/SN', capacity: 3.5 },
  { engineId: 'gm-fam1-10-classic', viscosity: '5W30', manufacturerNorm: 'GM 6094M', api: 'SL/SM/SN', capacity: 3.5 },

  // GM Família II (5W30, GM 6094M)
  { engineId: 'gm-fam2-20', viscosity: '5W30', manufacturerNorm: 'GM 6094M', api: 'SL/SM/SN', capacity: 4.5 },
  { engineId: 'gm-fam2-20-vectra', viscosity: '5W30', manufacturerNorm: 'GM 6094M', api: 'SL/SM/SN', capacity: 4.5 },

  // GM SPE/4 (5W30, DEXOS1 Gen2)
  { engineId: 'gm-spe4-10', viscosity: '5W30', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN', capacity: 3.5 },
  { engineId: 'gm-spe4-14', viscosity: '5W30', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN', capacity: 3.5 },
  { engineId: 'gm-spe4-14-prisma', viscosity: '5W30', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN', capacity: 3.5 },
  { engineId: 'gm-spe4-14-cobalt', viscosity: '5W30', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN', capacity: 3.5 },
  { engineId: 'gm-spe4-18-spin', viscosity: '5W30', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN', capacity: 3.5 },

  // GM CSS Prime (0W20, DEXOS1 Gen2)
  { engineId: 'gm-css-10t', viscosity: '0W20', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN Plus/SP', capacity: 3.5 },
  { engineId: 'gm-css-10t-tracker', viscosity: '0W20', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN Plus/SP', capacity: 3.5 },
  { engineId: 'gm-css-12t-tracker', viscosity: '0W20', manufacturerNorm: 'DEXOS1 Gen2', api: 'SN Plus/SP', capacity: 4.0 },

  // Fiat Fire (15W40, 9.55535-S2)
  { engineId: 'fiat-fire-10', viscosity: '15W40', manufacturerNorm: '9.55535-S2', api: 'SN', capacity: 3.0 },
  { engineId: 'fiat-fire-10-palio', viscosity: '15W40', manufacturerNorm: '9.55535-S2', api: 'SN', capacity: 3.0 },
  { engineId: 'fiat-fire-14-strada', viscosity: '15W40', manufacturerNorm: '9.55535-S2', api: 'SN', capacity: 3.0 },

  // Fiat Firefly (0W20, 9.55535-GS1)
  { engineId: 'fiat-firefly-10', viscosity: '0W20', manufacturerNorm: '9.55535-GS1', api: 'SN/SP', capacity: 3.5 },
  { engineId: 'fiat-firefly-13-argo', viscosity: '0W20', manufacturerNorm: '9.55535-GS1', api: 'SN/SP', capacity: 3.5 },
  { engineId: 'fiat-firefly-10-mobi', viscosity: '0W20', manufacturerNorm: '9.55535-GS1', api: 'SN/SP', capacity: 3.5 },
  { engineId: 'fiat-firefly-13-strada', viscosity: '0W20', manufacturerNorm: '9.55535-GS1', api: 'SN/SP', capacity: 3.5 },

  // Fiat T270 (0W20, 9.55535-DSX)
  { engineId: 'fiat-t270-13', viscosity: '0W20', manufacturerNorm: '9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'fiat-t270-13-fastback', viscosity: '0W20', manufacturerNorm: '9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'fiat-t270-13-toro', viscosity: '0W20', manufacturerNorm: '9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'fiat-t270-13-compass', viscosity: '0W20', manufacturerNorm: '9.55535-DSX', api: 'SP', capacity: 4.8 },

  // Toyota ZR (0W20, Toyota Genuine)
  { engineId: 'toyota-zr-20', viscosity: '0W20', manufacturerNorm: 'Toyota Genuine', api: 'SN/SP', capacity: 4.2 },
  { engineId: 'toyota-zr-20-cross', viscosity: '0W20', manufacturerNorm: 'Toyota Genuine', api: 'SN/SP', capacity: 4.2 },
  { engineId: 'toyota-18-hybrid', viscosity: '0W20', manufacturerNorm: 'Toyota Genuine', api: 'SP', capacity: 3.9 },
  { engineId: 'toyota-18-hybrid-cross', viscosity: '0W20', manufacturerNorm: 'Toyota Genuine', api: 'SP', capacity: 3.9 },
  { engineId: 'toyota-hilux-27', viscosity: '5W30', manufacturerNorm: 'API SP', api: 'SP', capacity: 5.8 },
  { engineId: 'toyota-hilux-28', viscosity: '5W30', manufacturerNorm: 'ACEA C2/C3', api: 'SN', capacity: 7.5 },

  // Honda Série R (0W20, Honda Genuine)
  { engineId: 'honda-r-20', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SN/SP', capacity: 4.0 },
  { engineId: 'honda-r-20-hrv', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SN/SP', capacity: 4.0 },
  { engineId: 'honda-15-ivtec-hrv', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 3.5 },
  { engineId: 'honda-15-turbo-civic', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 3.5 },
  { engineId: 'honda-15-city', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 3.5 },
  { engineId: 'honda-15-turbo-accord', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 3.5 },
  { engineId: 'honda-20-turbo-accord', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 4.8 },
  { engineId: 'honda-15-turbo-crv', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SP', capacity: 3.5 },
  { engineId: 'honda-20-crv', viscosity: '0W20', manufacturerNorm: 'Honda Genuine', api: 'SN', capacity: 4.0 },

  // Hyundai Kappa (5W30, Hyundai Genuine)
  { engineId: 'hyundai-kappa-10', viscosity: '5W30', manufacturerNorm: 'Hyundai Genuine', api: 'SN', capacity: 3.3 },
  { engineId: 'hyundai-gamma-16-hb20', viscosity: '5W30', manufacturerNorm: 'Hyundai Genuine', api: 'SN', capacity: 3.6 },
  { engineId: 'hyundai-smart-10t-hb20', viscosity: '0W20', manufacturerNorm: 'Hyundai Genuine', api: 'SN/SP', capacity: 4.0 },
  { engineId: 'hyundai-20-i30', viscosity: '5W30', manufacturerNorm: 'API SN', api: 'SN', capacity: 4.0 },
  { engineId: 'hyundai-16t-tucson', viscosity: '5W30', manufacturerNorm: 'API SN', api: 'SN', capacity: 4.5 },
  { engineId: 'hyundai-22-santafe', viscosity: '5W30', manufacturerNorm: 'ACEA C3', api: 'SN', capacity: 6.7 },

  // Jeep Renegade
  { engineId: 'jeep-renegade-18', viscosity: '5W30', manufacturerNorm: 'FIAT 9.55535-S2', api: 'SN', capacity: 4.2 },
  { engineId: 'jeep-renegade-13t', viscosity: '0W20', manufacturerNorm: 'FIAT 9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'jeep-renegade-20d', viscosity: '5W30', manufacturerNorm: 'FIAT 9.55535-S1 / ACEA C2', api: 'SN', capacity: 5.5 },

  // Jeep Compass
  { engineId: 'jeep-compass-20', viscosity: '5W30', manufacturerNorm: 'FIAT 9.55535-S2', api: 'SN', capacity: 4.7 },
  { engineId: 'jeep-compass-13t', viscosity: '0W20', manufacturerNorm: 'FIAT 9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'jeep-compass-20d', viscosity: '5W30', manufacturerNorm: 'FIAT 9.55535-S1 / ACEA C2', api: 'SN', capacity: 5.5 },

  // Jeep Commander
  { engineId: 'jeep-commander-13t', viscosity: '0W20', manufacturerNorm: 'FIAT 9.55535-DSX', api: 'SP', capacity: 4.8 },
  { engineId: 'jeep-commander-20d', viscosity: '5W30', manufacturerNorm: 'FIAT 9.55535-S1 / ACEA C2', api: 'SN', capacity: 5.5 },

  // Jeep Compass 4xe
  { engineId: 'jeep-compass-4xe-13t', viscosity: '0W20', manufacturerNorm: 'FIAT 9.55535-DSX', api: 'SP', capacity: 4.8 },

  // Jeep Grand Cherokee
  { engineId: 'jeep-cherokee-36', viscosity: '5W20', manufacturerNorm: 'Chrysler MS-6395', api: 'SN', capacity: 5.6 },
  { engineId: 'jeep-cherokee-57', viscosity: '5W20', manufacturerNorm: 'Chrysler MS-6395', api: 'SN', capacity: 6.6 },
  { engineId: 'jeep-cherokee-30d', viscosity: '5W30', manufacturerNorm: 'ACEA C3', api: 'SN', capacity: 6.5 },
];
