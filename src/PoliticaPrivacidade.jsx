import React from 'react';

export default function PoliticaPrivacidade({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto text-slate-300 text-sm leading-relaxed shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
          <h3 className="text-xl font-bold text-white">Política de Privacidade</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white font-bold text-lg px-2"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <p>
            A <strong>RMB Fretes</strong> valoriza a privacidade de seus usuários e clientes. Esta Política de Privacidade descreve como tratamos as informações coletadas através do nosso site.
          </p>

          <h4 className="font-bold text-amber-500 text-base">1. Coleta de Dados</h4>
          <p>
            Não realizamos a coleta automatizada de dados pessoais ou armazenamento de cookies em banco de dados neste site. Os únicos dados fornecidos ocorrem de forma voluntária quando você clica nos botões de contato para iniciar uma conversa via WhatsApp.
          </p>

          <h4 className="font-bold text-amber-500 text-base">2. Uso das Informações</h4>
          <p>
            As informações fornecidas durante o contato via WhatsApp (como nome, endereço de origem/destino e detalhes da carga) são utilizadas exclusivamente para a elaboração de orçamentos e execução dos serviços de frete e transporte contratados.
          </p>

          <h4 className="font-bold text-amber-500 text-base">3. Compartilhamento de Dados</h4>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros sob nenhuma hipótese.
          </p>

          <h4 className="font-bold text-amber-500 text-base">4. Contato do Responsável</h4>
          <p>
            Serviço prestado de forma autônoma por <strong>Rian Moreira Brandão</strong>.<br />
            Documentação vinculada ao CPF: 703.***.***-** | Manaus - AM<br />
            Contato: (92) 99166-3645
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2 rounded-xl transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}