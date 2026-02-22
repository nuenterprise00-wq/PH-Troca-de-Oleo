import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("database.sqlite");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );

  CREATE TABLE IF NOT EXISTS vehicles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    year INTEGER,
    engine TEXT,
    fuel TEXT,
    oil_spec TEXT,
    oil_quantity REAL,
    filter_type TEXT,
    UNIQUE(brand, model, year, engine)
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    type TEXT, -- Sintético, Semi-Sintético, Mineral
    viscosity TEXT,
    UNIQUE(name, brand, viscosity)
  );

  INSERT OR REPLACE INTO settings (key, value) VALUES ('whatsapp_number', '5521997573111');
`);

// Robust Seeding Logic
const insertVehicle = db.prepare(`
  INSERT OR IGNORE INTO vehicles (brand, model, year, engine, fuel, oil_spec, oil_quantity, filter_type)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

// Honda
insertVehicle.run('Honda', 'Civic', 2018, '2.0', 'Flex', '0W20 Sintético', 4.2, 'PH5939');
insertVehicle.run('Honda', 'Civic', 2014, '1.8', 'Flex', '0W20 Sintético', 3.7, 'PH5939');
insertVehicle.run('Honda', 'Fit', 2015, '1.5', 'Flex', '0W20 Sintético', 3.6, 'PH5939');
insertVehicle.run('Honda', 'HR-V', 2019, '1.8', 'Flex', '0W20 Sintético', 3.7, 'PH5939');

// Toyota
insertVehicle.run('Toyota', 'Corolla', 2020, '2.0', 'Flex', '0W20 Sintético', 4.4, 'PH10358');
insertVehicle.run('Toyota', 'Corolla', 2015, '1.8', 'Flex', '5W30 Sintético', 4.2, 'PH10358');
insertVehicle.run('Toyota', 'Etios', 2017, '1.3', 'Flex', '5W30 Sintético', 3.4, 'PH10358');
insertVehicle.run('Toyota', 'Hilux', 2018, '2.8 Diesel', 'Diesel', '5W30 Sintético', 7.5, 'PH11457');

// Volkswagen
insertVehicle.run('Volkswagen', 'Gol', 2015, '1.0', 'Flex', '5W40 Sintético', 3.5, 'PH5548');
insertVehicle.run('Volkswagen', 'Polo', 2020, '1.0 TSI', 'Flex', '5W40 Sintético', 4.0, 'PH5548');
insertVehicle.run('Volkswagen', 'Amarok', 2015, '2.0 Diesel', 'Diesel', '5W30 Sintético', 7.0, 'PH10958');
insertVehicle.run('Volkswagen', 'Golf', 2016, '1.4 TSI', 'Flex', '5W40 Sintético', 4.0, 'PH5548');

// Chevrolet
insertVehicle.run('Chevrolet', 'Onix', 2019, '1.0 Turbo', 'Flex', '5W30 Sintético', 3.5, 'PH4722');
insertVehicle.run('Chevrolet', 'Onix', 2015, '1.0', 'Flex', '5W30 Semi-Sintético', 3.5, 'PH4722');
insertVehicle.run('Chevrolet', 'S10', 2018, '2.8 Diesel', 'Diesel', '5W30 Sintético', 6.0, 'PH11462');
insertVehicle.run('Chevrolet', 'Cruze', 2017, '1.4 Turbo', 'Flex', '5W30 Sintético', 4.0, 'PH4722');

// Fiat
insertVehicle.run('Fiat', 'Palio', 2014, '1.0 Fire', 'Flex', '15W40 Semi-Sintético', 2.7, 'PH5949');
insertVehicle.run('Fiat', 'Toro', 2018, '2.0 Diesel', 'Diesel', '5W30 Sintético', 4.8, 'PH11462');
insertVehicle.run('Fiat', 'Argo', 2020, '1.0 Firefly', 'Flex', '0W20 Sintético', 3.2, 'PH5949');
insertVehicle.run('Fiat', 'Strada', 2019, '1.4 Fire', 'Flex', '15W40 Semi-Sintético', 2.7, 'PH5949');

// Ford
insertVehicle.run('Ford', 'Ka', 2018, '1.0 3cil', 'Flex', '5W20 Sintético', 4.0, 'PH10027');
insertVehicle.run('Ford', 'EcoSport', 2017, '1.5 3cil', 'Flex', '5W20 Sintético', 4.0, 'PH10027');
insertVehicle.run('Ford', 'Ranger', 2015, '3.2 Diesel', 'Diesel', '5W30 Sintético', 9.8, 'PH11457');

// Hyundai
insertVehicle.run('Hyundai', 'HB20', 2019, '1.0', 'Flex', '5W30 Sintético', 3.5, 'PH10358');
insertVehicle.run('Hyundai', 'Creta', 2020, '2.0', 'Flex', '5W30 Sintético', 4.0, 'PH10358');

// Jeep
insertVehicle.run('Jeep', 'Renegade', 2018, '1.8', 'Flex', '5W30 Sintético', 4.3, 'PH11462');
insertVehicle.run('Jeep', 'Compass', 2019, '2.0 Diesel', 'Diesel', '5W30 Sintético', 4.8, 'PH11462');

const insertProduct = db.prepare(`
  INSERT OR IGNORE INTO products (name, brand, type, viscosity)
  VALUES (?, ?, ?, ?)
`);
insertProduct.run('Super 3000', 'Mobil', 'Sintético', '0W20');
insertProduct.run('Magnatec', 'Castrol', 'Sintético', '5W30');
insertProduct.run('Helix Ultra', 'Shell', 'Sintético', '5W40');
insertProduct.run('Evolution', 'Elf', 'Sintético', '5W30');
insertProduct.run('Selenia K', 'Petronas', 'Sintético', '5W30');

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/settings", (req, res) => {
    const settings = db.prepare("SELECT * FROM settings").all();
    const config = settings.reduce((acc: any, curr: any) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});
    res.json(config);
  });

  app.post("/api/settings", (req, res) => {
    const { whatsapp_number } = req.body;
    db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)").run('whatsapp_number', whatsapp_number);
    res.json({ success: true });
  });

  app.get("/api/brands", (req, res) => {
    const brands = db.prepare("SELECT DISTINCT brand FROM vehicles ORDER BY brand").all();
    res.json(brands.map((b: any) => b.brand));
  });

  app.get("/api/models/:brand", (req, res) => {
    const models = db.prepare("SELECT DISTINCT model FROM vehicles WHERE brand = ? ORDER BY model").all(req.params.brand);
    res.json(models.map((m: any) => m.model));
  });

  app.get("/api/years/:brand/:model", (req, res) => {
    const years = db.prepare("SELECT DISTINCT year FROM vehicles WHERE brand = ? AND model = ? ORDER BY year DESC").all(req.params.brand, req.params.model);
    res.json(years.map((y: any) => y.year));
  });

  app.get("/api/engines/:brand/:model/:year", (req, res) => {
    const engines = db.prepare("SELECT DISTINCT engine, fuel, id FROM vehicles WHERE brand = ? AND model = ? AND year = ?").all(req.params.brand, req.params.model, req.params.year);
    res.json(engines);
  });

  app.get("/api/vehicle/:id", (req, res) => {
    const vehicle = db.prepare("SELECT * FROM vehicles WHERE id = ?").get(req.params.id);
    res.json(vehicle);
  });

  app.get("/api/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
  });

  // Admin Routes
  app.get("/api/admin/vehicles", (req, res) => {
    const vehicles = db.prepare("SELECT * FROM vehicles").all();
    res.json(vehicles);
  });

  app.post("/api/admin/vehicles", (req, res) => {
    const { brand, model, year, engine, fuel, oil_spec, oil_quantity, filter_type } = req.body;
    db.prepare(`
      INSERT INTO vehicles (brand, model, year, engine, fuel, oil_spec, oil_quantity, filter_type)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(brand, model, year, engine, fuel, oil_spec, oil_quantity, filter_type);
    res.json({ success: true });
  });

  app.delete("/api/admin/vehicles/:id", (req, res) => {
    db.prepare("DELETE FROM vehicles WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  app.get("/api/admin/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
  });

  app.post("/api/admin/products", (req, res) => {
    const { name, brand, type, viscosity, price_per_liter, service_fee } = req.body;
    db.prepare(`
      INSERT INTO products (name, brand, type, viscosity, price_per_liter, service_fee)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(name, brand, type, viscosity, price_per_liter, service_fee);
    res.json({ success: true });
  });

  app.delete("/api/admin/products/:id", (req, res) => {
    db.prepare("DELETE FROM products WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
