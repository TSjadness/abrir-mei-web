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

  return value.replace(/\D/g, "").replace(/(\d{5})(\d{3})+?$/, "$1-$2");
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

// export const maskPlate = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{3})(\d)/, "$1-$2");
// };

// export const maskPlateMercosul = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{3})(\d)/, "$1-$2")
//     .replace(/([A-Z]{3})(\d{1})([A-Z]{1})/, "$1$2$3");
// };

// export const maskPlateOld = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2");
// };

// export const maskPlateOldMercosul = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2")
//     .replace(/([A-Z]{3})(\d{1})([A-Z]{1})/, "$1$2$3");
// };

// export const maskPlateAuto = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2");
// };

// export const maskPlateAutoMercosul = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2")
//     .replace(/([A-Z]{3})(\d{1})([A-Z]{1})/, "$1$2$3");
// };

// export const maskPlateAutoOld = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2");
// };

// export const maskPlateAutoOldMercosul = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2")
//     .replace(/([A-Z]{3})(\d{1})([A-Z]{1})/, "$1$2$3");
// };

// export const maskPlateTruck = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replace(/(\d{4})(\d)/, "$1-$2");
// };

// export default masks;
// export const normalizeCpfNumber = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{3})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d{1,2})/, "$1-$2")
//     .replace(/(-\d{2})\d+?$/, "$1");
// };

// export const normalizeCnpjNumber = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{2})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d)/, "$1/$2")
//     .replace(/(\d{4})(\d)/, "$1-$2")
//     .replace(/(-\d{2})\d+?$/, "$1");
// };

// export const normalizePhone = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{2})(\d)/, "($1) $2")
//     .replace(/(\d{5})(\d)/, "$1-$2");
// };

// export const normalizeCep = (value: String | undefined) => {
//   if (!value) return "";

//   return value.replace(/[\D]/g, "").replace(/(\d{5})(\d{3})+?$/, "$1-$2");
// };

// export const normalizeRg = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{2})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d)/, "$1.$2")
//     .replace(/(\d{3})(\d{1,2})/, "$1-$2")
//     .replace(/(-\d{1})\d+?$/, "$1");
// };

// export const normalizeCardNumber = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{4})(\d)/, "$1 $2")
//     .replace(/(\d{4})(\d)/, "$1 $2")
//     .replace(/(\d{4})(\d)/, "$1 $2");
// };

// export const normalizeCardExpiration = (value: String | undefined) => {
//   if (!value) return "";

//   return value
//     .replace(/[\D]/g, "")
//     .replace(/(\d{2})(\d)/, "$1/$2")
//     .replace(/(\/\d{2})\d+?$/, "$1");
// };

// export const normalizeCardCVV = (value: String | undefined) => {
//   if (!value) return "";

//   return value.replace(/[\D]/g, "");
// };
