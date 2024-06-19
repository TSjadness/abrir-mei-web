"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const ConfirmationPage = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText("código pix aqui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className=" w-full max-w-5xl animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#1EA230]">
          Seu pedido foi reservado!
        </h1>
       
        <p className="text-gray-600 mb-4 text-center font-semibold text-xl">
          Detalhes do pedido:
        </p>
        
        <div className="flex  items-center justify-center  p-4">
          <ol className=" font-semibold ">
            <li>1. Clique no botão abaixo para copiar o código</li>
            <li>2. Abra o aplicativo do seu banco ou instituição financeira e entre na opção PIX</li>
            <li>3. Na opção PIX copia e cola, insira o código copiado no passo 1.</li>
          </ol>
        </div>

        <div className="mb-4 text-center">
          <p className="text-red-700 font-semibold text-2xl">
            Tempo restante para o pagamento:
          </p>
          <p className="text-2xl font-mono text-red-700 font-bold ">
            {formatTime(timeLeft)}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={handleCopyPix}
            className={`mb-4 px-24 py-2 rounded text-white ${
              copied ? "bg-green-500 px-32 py-2 mb-4" : "bg-blue-500 hover:bg-blue-600 "
            } transition-colors duration-300`}
          >
            {copied ? "Copiado!" : "Copiar código Pix"}
          </button>
          <div className="bg-gray-200 p-4 rounded ">
            <QRCode size={300} value="Seu código Pix aqui" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
