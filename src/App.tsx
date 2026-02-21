/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Droplets, 
  User, 
  Send, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Settings as SettingsIcon,
  Plus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Zap
} from 'lucide-react';
import { Vehicle, Product, CustomerData, Settings } from './types';

export default function App() {
  const [step, setStep] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Form State
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [engines, setEngines] = useState<any[]>([]);
  
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);
  const [vehicleDetails, setVehicleDetails] = useState<Vehicle | null>(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [customer, setCustomer] = useState<CustomerData>({
    name: '',
    phone: '',
    neighborhood: '',
    preferredTime: '',
    km: ''
  });

  const [settings, setSettings] = useState<Settings>({ whatsapp_number: '' });

  useEffect(() => {
    fetch('/api/brands').then(res => res.json()).then(setBrands);
    fetch('/api/settings').then(res => res.json()).then(setSettings);
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetch(`/api/models/${selectedBrand}`).then(res => res.json()).then(setModels);
      setSelectedModel('');
      setSelectedYear('');
      setSelectedVehicleId(null);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      fetch(`/api/years/${selectedBrand}/${selectedModel}`).then(res => res.json()).then(setYears);
      setSelectedYear('');
      setSelectedVehicleId(null);
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      fetch(`/api/engines/${selectedBrand}/${selectedModel}/${selectedYear}`).then(res => res.json()).then(setEngines);
      setSelectedVehicleId(null);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedVehicleId) {
      fetch(`/api/vehicle/${selectedVehicleId}`).then(res => res.json()).then(setVehicleDetails);
      fetch('/api/products').then(res => res.json()).then(setProducts);
    }
  }, [selectedVehicleId]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const generateWhatsAppLink = () => {
    if (!vehicleDetails || !selectedProduct || !settings.whatsapp_number) return '#';
    
    const totalPrice = (selectedProduct.price_per_liter * vehicleDetails.oil_quantity) + selectedProduct.service_fee;
    
    const message = `Olá! Gostaria de verificar disponibilidade para troca de óleo.

🚗 *Veículo:* ${vehicleDetails.brand} ${vehicleDetails.model} ${vehicleDetails.year} ${vehicleDetails.engine}
🛣️ *KM:* ${customer.km}
🛢️ *Óleo selecionado:* ${selectedProduct.brand} ${selectedProduct.name} (${selectedProduct.viscosity})
📊 *Quantidade:* ${vehicleDetails.oil_quantity}L
💰 *Estimativa:* R$ ${totalPrice.toFixed(2)}

👤 *Cliente:* ${customer.name}
📍 *Bairro:* ${customer.neighborhood}
⏰ *Horário desejado:* ${customer.preferredTime}

Aguardando confirmação 🙂`;

    return `https://wa.me/${settings.whatsapp_number}?text=${encodeURIComponent(message)}`;
  };

  if (isAdmin) {
    return <AdminPanel onBack={() => setIsAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <Droplets className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">PH TROCA DE OLEO</span>
        </div>
        <button 
          onClick={() => setIsAdmin(true)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <SettingsIcon className="w-5 h-5 text-zinc-500" />
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8 pb-24">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white">
                  Descubra o óleo correto do seu carro e solicite atendimento em segundos
                </h1>
                <p className="text-zinc-400 text-lg">
                  Evite erros na especificação e economize tempo. Orçamento imediato via WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/10 shadow-sm space-y-2">
                  <Zap className="text-amber-500 w-6 h-6" />
                  <h3 className="font-semibold text-sm text-zinc-200">Atendimento Rápido</h3>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/10 shadow-sm space-y-2">
                  <ShieldCheck className="text-emerald-500 w-6 h-6" />
                  <h3 className="font-semibold text-sm text-zinc-200">Sem Erro de Óleo</h3>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/10 shadow-sm space-y-2">
                  <Droplets className="text-blue-500 w-6 h-6" />
                  <h3 className="font-semibold text-sm text-zinc-200">Orçamento Imediato</h3>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-white/10 shadow-sm space-y-2">
                  <Clock className="text-purple-500 w-6 h-6" />
                  <h3 className="font-semibold text-sm text-zinc-200">Confirmação Ágil</h3>
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-lg"
              >
                VERIFICAR MEU CARRO
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold">Dados do Veículo</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Marca</label>
                  <select 
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    <option value="" className="bg-zinc-900">Selecione a marca</option>
                    {brands.map(b => <option key={b} value={b} className="bg-zinc-900">{b}</option>)}
                  </select>
                </div>

                {selectedBrand && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Modelo</label>
                    <select 
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="" className="bg-zinc-900">Selecione o modelo</option>
                      {models.map(m => <option key={m} value={m} className="bg-zinc-900">{m}</option>)}
                    </select>
                  </div>
                )}

                {selectedModel && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Ano</label>
                    <select 
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      <option value="" className="bg-zinc-900">Selecione o ano</option>
                      {years.map(y => <option key={y} value={y} className="bg-zinc-900">{y}</option>)}
                    </select>
                  </div>
                )}

                {selectedYear && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Motor / Combustível</label>
                    <select 
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white"
                      value={selectedVehicleId || ''}
                      onChange={(e) => setSelectedVehicleId(Number(e.target.value))}
                    >
                      <option value="" className="bg-zinc-900">Selecione a motorização</option>
                      {engines.map(e => <option key={e.id} value={e.id} className="bg-zinc-900">{e.engine} - {e.fuel}</option>)}
                    </select>
                  </div>
                )}

                {selectedVehicleId && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Quilometragem Atual</label>
                    <input 
                      type="number"
                      placeholder="Ex: 78000"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                      value={customer.km}
                      onChange={(e) => setCustomer({...customer, km: e.target.value})}
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={handleBack} className="flex-1 bg-zinc-900 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-white">Voltar</button>
                <button 
                  disabled={!selectedVehicleId || !customer.km}
                  onClick={handleNext} 
                  className="flex-[2] bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 disabled:opacity-50 transition-all"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && vehicleDetails && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold">Escolha do Produto</h2>
              </div>

              <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-900/50 space-y-2">
                <p className="text-emerald-400 text-sm font-medium">Recomendação Técnica:</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-100">{vehicleDetails.oil_spec}</span>
                  <span className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-full font-bold">{vehicleDetails.oil_quantity}L</span>
                </div>
                <p className="text-emerald-300/70 text-xs">Filtro sugerido: {vehicleDetails.filter_type}</p>
              </div>

              <div className="space-y-3">
                {products.map(product => (
                  <div 
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedProduct?.id === product.id 
                      ? 'border-emerald-500 bg-emerald-950/20 shadow-md' 
                      : 'border-white/10 bg-zinc-900 hover:border-emerald-500/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-white">{product.brand} {product.name}</h3>
                        <p className="text-zinc-400 text-sm">{product.type} • {product.viscosity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-zinc-500 font-bold uppercase">Estimativa</p>
                        <p className="text-xl font-bold text-emerald-400">
                          R$ {((product.price_per_liter * vehicleDetails.oil_quantity) + product.service_fee).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={handleBack} className="flex-1 bg-zinc-900 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-white">Voltar</button>
                <button 
                  disabled={!selectedProduct}
                  onClick={handleNext} 
                  className="flex-[2] bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 disabled:opacity-50 transition-all"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold">Dados de Contato</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Seu Nome</label>
                  <input 
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                    value={customer.name}
                    onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Bairro</label>
                  <input 
                    type="text"
                    placeholder="Onde você está?"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                    value={customer.neighborhood}
                    onChange={(e) => setCustomer({...customer, neighborhood: e.target.value})}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Preferência de Dia/Horário</label>
                  <textarea 
                    placeholder="Ex: Amanhã pela manhã ou Sábado às 14h"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600 min-h-[100px]"
                    value={customer.preferredTime}
                    onChange={(e) => setCustomer({...customer, preferredTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={handleBack} className="flex-1 bg-zinc-900 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors text-white">Voltar</button>
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-[2] bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 ${(!customer.name || !customer.neighborhood) ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  SOLICITAR NO WHATSAPP
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function AdminPanel({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'products' | 'settings'>('vehicles');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<Settings>({ whatsapp_number: '' });

  const [newVehicle, setNewVehicle] = useState<Partial<Vehicle>>({});
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [v, p, s] = await Promise.all([
      fetch('/api/admin/vehicles').then(res => res.json()),
      fetch('/api/admin/products').then(res => res.json()),
      fetch('/api/settings').then(res => res.json())
    ]);
    setVehicles(v);
    setProducts(p);
    setSettings(s);
  };

  const addVehicle = async () => {
    await fetch('/api/admin/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVehicle)
    });
    setNewVehicle({});
    fetchData();
  };

  const deleteVehicle = async (id: number) => {
    await fetch(`/api/admin/vehicles/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const addProduct = async () => {
    await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
    setNewProduct({});
    fetchData();
  };

  const deleteProduct = async (id: number) => {
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const saveSettings = async () => {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
    alert('Configurações salvas!');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans">
      <header className="bg-zinc-900 border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-full text-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="font-bold text-xl text-white">Painel Administrativo</h1>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 bg-zinc-900 p-1 rounded-xl border border-white/10">
          {(['vehicles', 'products', 'settings'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                activeTab === tab ? 'bg-emerald-500 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab === 'vehicles' ? 'Veículos' : tab === 'products' ? 'Produtos' : 'Configurações'}
            </button>
          ))}
        </div>

        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                <Plus className="w-5 h-5 text-emerald-500" />
                Novo Veículo
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Marca" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.brand || ''} onChange={e => setNewVehicle({...newVehicle, brand: e.target.value})} />
                <input placeholder="Modelo" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.model || ''} onChange={e => setNewVehicle({...newVehicle, model: e.target.value})} />
                <input placeholder="Ano" type="number" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.year || ''} onChange={e => setNewVehicle({...newVehicle, year: Number(e.target.value)})} />
                <input placeholder="Motor" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.engine || ''} onChange={e => setNewVehicle({...newVehicle, engine: e.target.value})} />
                <input placeholder="Combustível" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.fuel || ''} onChange={e => setNewVehicle({...newVehicle, fuel: e.target.value})} />
                <input placeholder="Espec. Óleo" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.oil_spec || ''} onChange={e => setNewVehicle({...newVehicle, oil_spec: e.target.value})} />
                <input placeholder="Qtd. Óleo (L)" type="number" step="0.1" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.oil_quantity || ''} onChange={e => setNewVehicle({...newVehicle, oil_quantity: Number(e.target.value)})} />
                <input placeholder="Tipo Filtro" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newVehicle.filter_type || ''} onChange={e => setNewVehicle({...newVehicle, filter_type: e.target.value})} />
              </div>
              <button onClick={addVehicle} className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-all">Cadastrar Veículo</button>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-800/50 border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Veículo</th>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Especificação</th>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Qtd</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {vehicles.map(v => (
                    <tr key={v.id}>
                      <td className="px-4 py-3">
                        <p className="font-bold text-white">{v.brand} {v.model}</p>
                        <p className="text-zinc-500 text-xs">{v.year} • {v.engine}</p>
                      </td>
                      <td className="px-4 py-3 font-medium text-zinc-300">{v.oil_spec}</td>
                      <td className="px-4 py-3 font-medium text-zinc-300">{v.oil_quantity}L</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => deleteVehicle(v.id)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                <Plus className="w-5 h-5 text-emerald-500" />
                Novo Produto
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Nome do Óleo" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newProduct.name || ''} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                <input placeholder="Marca" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newProduct.brand || ''} onChange={e => setNewProduct({...newProduct, brand: e.target.value})} />
                <select className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white" value={newProduct.type || ''} onChange={e => setNewProduct({...newProduct, type: e.target.value})}>
                  <option value="" className="bg-zinc-800">Tipo</option>
                  <option value="Sintético" className="bg-zinc-800">Sintético</option>
                  <option value="Semi-Sintético" className="bg-zinc-800">Semi-Sintético</option>
                  <option value="Mineral" className="bg-zinc-800">Mineral</option>
                </select>
                <input placeholder="Viscosidade (ex: 5W30)" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newProduct.viscosity || ''} onChange={e => setNewProduct({...newProduct, viscosity: e.target.value})} />
                <input placeholder="Preço por Litro" type="number" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newProduct.price_per_liter || ''} onChange={e => setNewProduct({...newProduct, price_per_liter: Number(e.target.value)})} />
                <input placeholder="Taxa de Serviço" type="number" className="bg-zinc-800 border border-white/10 rounded-lg p-2 text-sm text-white placeholder:text-zinc-600" value={newProduct.service_fee || ''} onChange={e => setNewProduct({...newProduct, service_fee: Number(e.target.value)})} />
              </div>
              <button onClick={addProduct} className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-all">Cadastrar Produto</button>
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-800/50 border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Produto</th>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Preço/L</th>
                    <th className="px-4 py-3 font-bold text-zinc-500 uppercase text-[10px] tracking-wider">Taxa</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {products.map(p => (
                    <tr key={p.id}>
                      <td className="px-4 py-3">
                        <p className="font-bold text-white">{p.brand} {p.name}</p>
                        <p className="text-zinc-500 text-xs">{p.type} • {p.viscosity}</p>
                      </td>
                      <td className="px-4 py-3 font-medium text-zinc-300">R$ {p.price_per_liter.toFixed(2)}</td>
                      <td className="px-4 py-3 font-medium text-zinc-300">R$ {p.service_fee.toFixed(2)}</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => deleteProduct(p.id)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-white">Configurações Gerais</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Número do WhatsApp (com DDI)</label>
              <input 
                placeholder="Ex: 5511999999999" 
                className="w-full bg-zinc-800 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600" 
                value={settings.whatsapp_number} 
                onChange={e => setSettings({...settings, whatsapp_number: e.target.value})} 
              />
              <p className="text-xs text-zinc-500 mt-1">Insira apenas números, começando pelo código do país (55 para Brasil).</p>
            </div>
            <button onClick={saveSettings} className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all">Salvar Configurações</button>
          </div>
        )}
      </div>
    </div>
  );
}
