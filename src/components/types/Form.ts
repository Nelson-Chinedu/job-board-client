export type TInput = {
  title: string;
  companyName: string;
  companyWebsite: string;
  emailAddress: string;
  companyHeadquarter: string;
  companyDescription: string;
  selectedRole: () => void;
  applicationMode?: any;
  roleType: string;
  selectedPosition: any;
  jobDescription: string;
  positionType: string;
};

export type TForm = {
  values: TInput;
  errors: TInput;
  handleChange: () => void;
  handleBlur: () => void;
}