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
    }
  }, [selectedVehicleId]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const generateWhatsAppLink = () => {
    if (!vehicleDetails || !settings.whatsapp_number) return '#';
    
    const message = `Olá! Gostaria de verificar disponibilidade para troca de óleo.

🚗 *Veículo:* ${vehicleDetails.brand} ${vehicleDetails.model} ${vehicleDetails.year} ${vehicleDetails.engine}
🛣️ *KM:* ${customer.km}
🛢️ *Recomendação:* ${vehicleDetails.oil_spec}
📊 *Quantidade:* ${vehicleDetails.oil_quantity}L
🔧 *Filtro:* ${vehicleDetails.filter_type}

👤 *Cliente:* ${customer.name}
📍 *Bairro:* ${customer.neighborhood}
⏰ *Horário desejado:* ${customer.preferredTime}

*Favor confirmar o óleo disponível e o valor do serviço.*

Aguardando confirmação 🙂`;

    return `https://wa.me/${settings.whatsapp_number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 font-sans">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <Droplets className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">PH TROCA DE OLEO</span>
        </div>
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
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold">Dados de Contato</h2>
              </div>

              <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-900/50 space-y-2 mb-6">
                <p className="text-emerald-400 text-sm font-medium">Recomendação Técnica para seu {vehicleDetails.model}:</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-100">{vehicleDetails.oil_spec}</span>
                  <span className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-full font-bold">{vehicleDetails.oil_quantity}L</span>
                </div>
                <p className="text-emerald-300/70 text-xs">Filtro sugerido: {vehicleDetails.filter_type}</p>
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
