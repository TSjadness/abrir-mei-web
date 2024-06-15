import React from 'react'

const pageFaleConosco = () => {
  return (
    <div className="bg-white shadow min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-blue-700">
        <div className="flex flex-col items-start justify-center mt-8">
          <h1 className="font-semibold text-4xl">Fale conosco</h1>
          <p className="mt-4 text-justify text-base">
            Nossa equipe está de prontidão para quaisquer dúvidas. Basta enviar
            um email para <span className="font-bold">contato@portalmeibrasil.com!</span> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default pageFaleConosco;