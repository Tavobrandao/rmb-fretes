import React from 'react';

const WhatsAppBtn = ({ text = "SOLICITE SEU ORÇAMENTO!" }) => (
  <a
    href="https://wa.me/5592991663645?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20de%20frete."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base md:text-lg px-6 py-3.5 md:px-8 md:py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-200 uppercase tracking-wide cursor-pointer"
  >
    <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    {text}
  </a>
);

export default function App() {
  const servicos = [
    { title: "Entrega de Mercadorias", desc: "Envio rápido para lojas e clientes." },
    { title: "Retirada de Compras", desc: "Buscamos suas compras em lojas ou depósitos." },
    { title: "Transporte de Móveis", desc: "Cuidado e proteção para seus estofados e armários." },
    { title: "Materiais de Construção", desc: "Transporte de cimento, tintas e suprimentos." },
    { title: "Mudanças Pequenas", desc: "Agilidade no transporte da sua mudança." },
    { title: "Entregas para Lojas", desc: "Parceria para entregas de comércios locais." },
    { title: "Fretes Dentro e Fora da Cidade", desc: "Atendimento em Manaus e municípios vizinhos." },
    { title: "Rapidez e Pontualidade", desc: "Horário combinado é horário cumprido." },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/public/logo.jpg" alt="RMB Fretes Logo" className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-amber-500 object-cover" />
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wider text-white">RMB FRETES</h1>
              <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Frete Particular</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <WhatsAppBtn text="Falar no WhatsApp" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-4">
            RAPIDEZ | SEGURANÇA | CONFIANÇA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            FRETE PARTICULAR E ENTREGAS RÁPIDAS
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
            Transporte seguro e ágil para suas cargas, compras e mudanças pequenas em Manaus e região.
          </p>
          
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-5 mb-8 inline-block w-full sm:w-auto">
            <p className="text-amber-500 font-black text-lg md:text-xl uppercase">Carga até 500 KG</p>
            <p className="text-slate-300 text-xs md:text-sm font-medium">Com total segurança e cuidado</p>
          </div>

          <div className="block sm:hidden mb-4">
            <WhatsAppBtn />
          </div>
          <div className="hidden sm:block">
            <WhatsAppBtn />
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src="/public/veiculo.jpg" 
            alt="Veículo RMB Fretes" 
            className="rounded-2xl border-2 border-slate-800 shadow-2xl max-w-full h-auto object-cover max-h-[400px]" 
          />
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="bg-slate-900/60 py-12 md:py-16 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-10 uppercase tracking-wide">
            Nossos <span className="text-amber-500">Serviços</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {servicos.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mb-3"></div>
                <h4 className="font-bold text-base md:text-lg text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl">
            <h4 className="font-bold text-lg md:text-xl text-amber-500 mb-1">Segurança na Entrega</h4>
            <p className="text-slate-400 text-sm">Sua carga bem presa e protegida durante todo o trajeto.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl">
            <h4 className="font-bold text-lg md:text-xl text-amber-500 mb-1">Cuidado com sua Carga</h4>
            <p className="text-slate-400 text-sm">Atenção especial no manuseio de móveis e mercadorias.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900 border border-slate-800 rounded-2xl">
            <h4 className="font-bold text-lg md:text-xl text-amber-500 mb-1">Compromisso com Você</h4>
            <p className="text-slate-400 text-sm">Pontualidade no horário e ótimo atendimento.</p>
          </div>
        </div>

        <WhatsAppBtn text="Solicitar Orçamento Agora" />
      </section>

      {/* Footer com seus Créditos */}
      <footer className="border-t border-slate-800 bg-slate-900 py-6 text-center text-slate-500 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} RMB Fretes - Todos os direitos reservados.</p>
        <p className="mt-1">Atendimento em Manaus e Região</p>
        <p className="mt-3 text-slate-400 font-medium">
          Desenvolvido por{" "}
          <a
            href="https://github.com/Tavobrandao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 underline font-semibold transition-colors"
          >
            Gustavo Brandão
          </a>
        </p>
      </footer>

    </div>
  );
}