type FormDataMei = {
  [key: string]: any;
  step1?: FormDataType1;
  step2?: FormDataType2;
  step3?: FormDataType3;
  step4?: FormDataType4;
};

type StepProps = {
  nextStep: (data: any) => void;
  previousStep?: (data: FormDataMei) => void;
};

type FormDataType1 = {
  name: string;
  email: string;
};

type FormDataType2 = {
  name2: string;
  email2: string;
};

type FormDataType3 = {
  name3: string;
  email3: string;
};

type FormDataType4 = {
  name4: string;
  email4: string;
};

