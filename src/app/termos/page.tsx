import React from "react";

const pageTermos = () => {
  return (
    <div className="bg-white shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-blue-700">
        {/* termos */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">1. Termos</h1>
          <p className="mt-4 text-justify text-sm">
            Ao acessar ao site Abrir MEI Online, concorda em cumprir estes
            termos de serviço, todas as leis e regulamentos aplicáveis ​​e
            concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis. Se você não concordar com algum desses termos, está
            proibido de usar ou acessar este site. Os materiais contidos neste
            site são protegidos pelas leis de direitos autorais e marcas
            comerciais aplicáveis.
          </p>
        </div>
        {/* uso de licença */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">2. Uso de Licença</h1>
          <p className="mt-4 text-justify text-sm">
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Abrir MEI Online ,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </p>

          <div className="mt-4 text-justify text-sm">
            <ul className="list-decimal pl-5 space-y-2">
              <li>modificar ou copiar os materiais; </li>
              <li>
                usar os materiais para qualquer finalidade comercial ou para
                exibição pública (comercial ou não comercial);{" "}
              </li>
              <li>
                tentar descompilar ou fazer engenharia reversa de qualquer
                software contido no site Abrir MEI Online;{" "}
              </li>
              <li>
                remover quaisquer direitos autorais ou outras notações de
                propriedade dos materiais; ou
              </li>
              <li>
                transferir os materiais para outra pessoa ou ‘espelhe’ os
                materiais em qualquer outro servidor.
              </li>
            </ul>
          </div>

          <p className="mt-4 text-justify text-sm">
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Abrir MEI Online a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>
        </div>
        {/* Isenção de responsabilidade */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">
            3. Isenção de responsabilidade
          </h1>

          <div className="mt-4 text-justify text-sm">
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                Os materiais no site da Abrir MEI Online são fornecidos ‘como
                estão’. Abrir MEI Online não oferece garantias, expressas ou
                implícitas, e, por este meio, isenta e nega todas as outras
                garantias, incluindo, sem limitação, garantias implícitas ou
                condições de comercialização, adequação a um fim específico ou
                não violação de propriedade intelectual ou outra violação de
                direitos.
              </li>
              <li>
                Além disso, o Abrir MEI Online não garante ou faz qualquer
                representação relativa à precisão, aos resultados prováveis ​​ou
                à confiabilidade do uso dos materiais em seu site ou de outra
                forma relacionado a esses materiais ou em sites vinculados a
                este site.
              </li>
            </ul>
          </div>
        </div>
        {/* Limitações*/}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">4. Limitações</h1>

          <p className="mt-4 text-justify text-sm">
            Em nenhum caso o Abrir MEI Online ou seus fornecedores serão
            responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em Abrir
            MEI Online, mesmo que Abrir MEI Online ou um representante
            autorizado do Abrir MEI Online tenha sido notificado oralmente ou
            por escrito da possibilidade de tais danos. Como algumas jurisdições
            não permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>
        </div>
        {/* Precisão dos materiais */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">5. Precisão dos materiais</h1>
          <p className="mt-4 text-justify text-sm">
            Os materiais exibidos no site do Abrir MEI Online podem incluir
            erros técnicos, tipográficos ou fotográficos. Abrir MEI Online não
            garante que qualquer material em seu site seja preciso, completo ou
            atual. Abrir MEI Online pode fazer alterações nos materiais contidos
            em seu site a qualquer momento, sem aviso prévio. No entanto, Abrir
            MEI Online não se compromete a atualizar os materiais.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">6. Links</h1>
          <p className="mt-4 text-justify text-sm">
            O Abrir MEI Online não analisou todos os sites vinculados ao seu
            site e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosso por Abrir MEI Online
            do site. O uso de qualquer site vinculado é por conta e risco do
            usuário.
          </p>
        </div>
        {/* Modificações */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-3xl">Modificações</h1>
          <p className="mt-4 text-justify text-sm">
            O Abrir MEI Online pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </p>
        </div>
        {/* Lei aplicável */}
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-3xl">Lei aplicável</h1>
          <p className="mt-4 text-justify text-sm">
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Abrir MEI Online e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default pageTermos;
