export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}
