/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
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
  Zap,
  Info
} from 'lucide-react';
import { Manufacturer, VehicleModel, Engine, OilSpec, CustomerData } from './types';
import { MANUFACTURERS, MODELS, ENGINES, OIL_SPECS, WHATSAPP_NUMBER } from './data';

export default function App() {
  const [step, setStep] = useState(0);
  
  // Form State
  const [selectedManufacturerId, setSelectedManufacturerId] = useState('');
  const [selectedModelId, setSelectedModelId] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | ''>('');
  const [selectedEngineId, setSelectedEngineId] = useState('');

  // Custom Vehicle State (for "Other" manufacturer)
  const [customManufacturer, setCustomManufacturer] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [customYear, setCustomYear] = useState('');
  const [customEngine, setCustomEngine] = useState('');
  
  const [customer, setCustomer] = useState<CustomerData>({
    name: '',
    phone: '',
    neighborhood: '',
    preferredTime: '',
    km: ''
  });

  // Derived Data
  const manufacturers = MANUFACTURERS;
  
  const models = useMemo(() => {
    if (!selectedManufacturerId) return [];
    return MODELS.filter(m => m.manufacturerId === selectedManufacturerId);
  }, [selectedManufacturerId]);

  const availableYears = useMemo(() => {
    if (!selectedModelId) return [];
    const modelEngines = ENGINES.filter(e => e.modelId === selectedModelId);
    const allYears = modelEngines.flatMap(e => e.years);
    return Array.from(new Set(allYears)).sort((a, b) => b - a);
  }, [selectedModelId]);

  const engines = useMemo(() => {
    if (!selectedModelId || !selectedYear) return [];
    return ENGINES.filter(e => e.modelId === selectedModelId && e.years.includes(Number(selectedYear)));
  }, [selectedModelId, selectedYear]);

  const engineDetails = useMemo(() => {
    return ENGINES.find(e => e.id === selectedEngineId) || null;
  }, [selectedEngineId]);

  const oilSpec = useMemo(() => {
    return OIL_SPECS.find(s => s.engineId === selectedEngineId) || null;
  }, [selectedEngineId]);

  const manufacturer = useMemo(() => {
    return MANUFACTURERS.find(m => m.id === selectedManufacturerId) || null;
  }, [selectedManufacturerId]);

  const model = useMemo(() => {
    return MODELS.find(m => m.id === selectedModelId) || null;
  }, [selectedModelId]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const generateWhatsAppLink = () => {
    const isOther = selectedManufacturerId === 'other';
    
    if (!isOther && (!engineDetails || !oilSpec || !manufacturer || !model)) return '#';
    if (isOther && (!customManufacturer || !customModel || !customYear || !customEngine)) return '#';
    
    const vehicleName = isOther 
      ? `${customManufacturer} ${customModel} (${customYear})`
      : `${manufacturer?.name} ${model?.name} (${selectedYear})`;

    const engineInfo = isOther
      ? `${customEngine}`
      : `${engineDetails?.name} ${engineDetails?.code ? `[${engineDetails?.code}]` : ''}`;

    const technicalSpec = isOther
      ? `🛢️ *Viscosidade:* (A consultar)\n✅ *Norma:* (A consultar)\n📊 *Capacidade:* (A consultar)`
      : `🛢️ *Viscosidade:* ${oilSpec?.viscosity}\n✅ *Norma:* ${oilSpec?.manufacturerNorm}\n📊 *Capacidade:* ${oilSpec?.capacity}L`;

    const message = `Olá! Gostaria de verificar disponibilidade para troca de óleo.

🚗 *Veículo:* ${vehicleName}
⚙️ *Motor:* ${engineInfo}
🛣️ *KM:* ${customer.km}

📋 *Especificação Técnica:*
${technicalSpec}

👤 *Cliente:* ${customer.name}
📍 *Bairro:* ${customer.neighborhood}
⏰ *Horário desejado:* ${customer.preferredTime}

*Favor confirmar o óleo disponível e o valor do serviço.*

Aguardando confirmação 🙂`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur-md border-b border-white/5 px-6 py-6 flex justify-center items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/30">
            <Droplets className="text-white w-7 h-7" />
          </div>
          <span className="font-extrabold text-2xl md:text-3xl tracking-tighter text-white uppercase italic">PH TROCA DE OLEO</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              <div className="space-y-6 text-center">
                <h1 className="text-4xl md:text-6xl font-black leading-[1] tracking-tight text-white">
                  O óleo certo para o seu motor, <span className="text-emerald-500">sem complicações.</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto">
                  Evite erros na especificação e economize tempo. Orçamento imediato via WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-xl space-y-3">
                  <Zap className="text-amber-500 w-8 h-8" />
                  <h3 className="font-bold text-base text-zinc-100">Atendimento Rápido</h3>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-xl space-y-3">
                  <ShieldCheck className="text-emerald-500 w-8 h-8" />
                  <h3 className="font-bold text-base text-zinc-100">Sem Erro de Óleo</h3>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-xl space-y-3">
                  <Droplets className="text-blue-500 w-8 h-8" />
                  <h3 className="font-bold text-base text-zinc-100">Orçamento Imediato</h3>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-xl space-y-3">
                  <Clock className="text-purple-500 w-8 h-8" />
                  <h3 className="font-bold text-base text-zinc-100">Confirmação Ágil</h3>
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
              className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/30">1</div>
                <h2 className="text-3xl font-black text-white tracking-tight">Dados do Veículo</h2>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Fabricante</label>
                  <select 
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white cursor-pointer"
                    value={selectedManufacturerId}
                    onChange={(e) => {
                      setSelectedManufacturerId(e.target.value);
                      setSelectedModelId('');
                      setSelectedYear('');
                      setSelectedEngineId('');
                      setCustomManufacturer('');
                      setCustomModel('');
                      setCustomYear('');
                      setCustomEngine('');
                    }}
                  >
                    <option value="" className="bg-zinc-900">Selecione o fabricante</option>
                    {manufacturers.map(m => <option key={m.id} value={m.id} className="bg-zinc-900">{m.name}</option>)}
                  </select>
                </div>

                {selectedManufacturerId === 'other' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Qual o Fabricante?</label>
                      <input 
                        type="text"
                        placeholder="Ex: BMW, Audi, Volvo..."
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                        value={customManufacturer}
                        onChange={(e) => setCustomManufacturer(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Modelo</label>
                      <input 
                        type="text"
                        placeholder="Ex: X3, A3, XC60..."
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                        value={customModel}
                        onChange={(e) => setCustomModel(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Ano</label>
                      <input 
                        type="text"
                        placeholder="Ex: 2022"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                        value={customYear}
                        onChange={(e) => setCustomYear(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Motorização</label>
                      <input 
                        type="text"
                        placeholder="Ex: 2.0 Turbo"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                        value={customEngine}
                        onChange={(e) => setCustomEngine(e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}

                {selectedManufacturerId && selectedManufacturerId !== 'other' && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Modelo</label>
                    <select 
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white cursor-pointer"
                      value={selectedModelId}
                      onChange={(e) => {
                        setSelectedModelId(e.target.value);
                        setSelectedYear('');
                        setSelectedEngineId('');
                      }}
                    >
                      <option value="" className="bg-zinc-900">Selecione o modelo</option>
                      {models.map(m => <option key={m.id} value={m.id} className="bg-zinc-900">{m.name}</option>)}
                    </select>
                  </div>
                )}

                {selectedModelId && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Ano</label>
                    <select 
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white cursor-pointer"
                      value={selectedYear}
                      onChange={(e) => {
                        setSelectedYear(Number(e.target.value));
                        setSelectedEngineId('');
                      }}
                    >
                      <option value="" className="bg-zinc-900">Selecione o ano</option>
                      {availableYears.map(y => <option key={y} value={y} className="bg-zinc-900">{y}</option>)}
                    </select>
                  </div>
                )}

                {selectedYear && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Motorização</label>
                    <select 
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white cursor-pointer"
                      value={selectedEngineId}
                      onChange={(e) => setSelectedEngineId(e.target.value)}
                    >
                      <option value="" className="bg-zinc-900">Selecione o motor</option>
                      {engines.map(e => <option key={e.id} value={e.id} className="bg-zinc-900">{e.name} {e.code ? `(${e.code})` : ''}</option>)}
                    </select>
                  </div>
                )}

                {(selectedEngineId || (selectedManufacturerId === 'other' && customEngine)) && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Quilometragem Atual</label>
                    <input 
                      type="number"
                      placeholder="Ex: 78000"
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                      value={customer.km}
                      onChange={(e) => setCustomer({...customer, km: e.target.value})}
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={handleBack} className="flex-1 bg-zinc-800 border border-white/5 py-5 rounded-2xl font-bold hover:bg-zinc-700 transition-colors text-zinc-300">Voltar</button>
                <button 
                  disabled={
                    (selectedManufacturerId !== 'other' && !selectedEngineId) || 
                    (selectedManufacturerId === 'other' && (!customManufacturer || !customModel || !customYear || !customEngine)) ||
                    !customer.km
                  }
                  onClick={handleNext} 
                  className="flex-[2] bg-emerald-500 text-white py-5 rounded-2xl font-black hover:bg-emerald-600 disabled:opacity-30 transition-all shadow-xl shadow-emerald-500/30 text-lg"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (selectedManufacturerId === 'other' || (engineDetails && oilSpec)) && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/30">2</div>
                <h2 className="text-3xl font-black text-white tracking-tight">Dados de Contato</h2>
              </div>

              {selectedManufacturerId !== 'other' && engineDetails && oilSpec ? (
                <div className="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/20 space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Info className="w-5 h-5" />
                    <p className="text-sm font-black uppercase tracking-widest">Ficha Técnica do Motor</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-black text-emerald-500/50">Viscosidade</p>
                      <p className="font-black text-xl text-emerald-100">{oilSpec.viscosity}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase font-black text-emerald-500/50">Capacidade</p>
                      <p className="font-black text-xl text-emerald-100">{oilSpec.capacity} Litros</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-emerald-500/10">
                    <p className="text-[10px] uppercase font-black text-emerald-500/50">Norma do Fabricante</p>
                    <p className="text-sm font-bold text-emerald-200">{oilSpec.manufacturerNorm}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-500/10 p-6 rounded-3xl border border-amber-500/20 space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Info className="w-5 h-5" />
                    <p className="text-sm font-black uppercase tracking-widest">Atenção</p>
                  </div>
                  <p className="text-sm text-amber-200 leading-relaxed">Como seu veículo não está em nossa base de dados, nossa equipe técnica fará a consulta manual das especificações assim que recebermos seu pedido.</p>
                </div>
              )}

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Seu Nome</label>
                  <input 
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                    value={customer.name}
                    onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Bairro</label>
                  <input 
                    type="text"
                    placeholder="Onde você está?"
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600"
                    value={customer.neighborhood}
                    onChange={(e) => setCustomer({...customer, neighborhood: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Preferência de Dia/Horário</label>
                  <textarea 
                    placeholder="Ex: Amanhã pela manhã ou Sábado às 14h"
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-white placeholder:text-zinc-600 min-h-[120px]"
                    value={customer.preferredTime}
                    onChange={(e) => setCustomer({...customer, preferredTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={handleBack} className="flex-1 bg-zinc-800 border border-white/5 py-5 rounded-2xl font-bold hover:bg-zinc-700 transition-colors text-zinc-300">Voltar</button>
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-[2] bg-emerald-500 text-white py-5 rounded-2xl font-black hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 text-lg ${(!customer.name || !customer.neighborhood) ? 'opacity-30 pointer-events-none' : ''}`}
                >
                  SOLICITAR NO WHATSAPP
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
