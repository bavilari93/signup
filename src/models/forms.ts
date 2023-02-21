export interface formCredentialsModel {
    first_name: string;
    last_name: string;
    email: string; 
    uniquePassword?:boolean;
    referral_url?:string;
  }

  export interface SignUpCredential {
    external_id?: string | undefined;
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    referral_url?: string | undefined;
  }

  export interface NewUserFormModel {
    first_name: string;
    last_name: string;
    email: string;
    password:string;
    confirm_password:string;
    unique_password:boolean;
    accept_terms: boolean;
  }