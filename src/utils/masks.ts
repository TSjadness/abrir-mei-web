const maskMoney = (value: String | undefined) => {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/(\d{1,})(\d{2})$/, "$1,$2")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const maskCPF = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const maskPhone = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
};

const maskCEP = (value: String | undefined) => {
  if (!value) return "";

  return value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2");
};

const maskRG = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{1})\d+?$/, "$1");
};

const maskCardNumber = (value: String | undefined) => {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2");
};

const maskCardExpiration = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
};

const maskCardCVV = (value: String | undefined) => {
  if (!value) return "";

  return value.replace(/\D/g, "");
};

const maskCNPJ = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const maskDate = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
};

const maskTime = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/(:\d{2})\d+?$/, "$1");
};

const maskDateTime = (value: String | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1")
    .replace(/(\d{2})(\d)/, "$1:$2")
    .replace(/(:\d{2})\d+?$/, "$1");
};

export const allMasks = {
  maskMoney,
  maskCPF,
  maskPhone,
  maskCEP,
  maskRG,
  maskCardNumber,
  maskCardExpiration,
  maskCardCVV,
  maskCNPJ,
  maskDate,
  maskTime,
  maskDateTime,
};
