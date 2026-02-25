export interface Service {
  id: string;
  title: string;
  description?: string;
  items?: string[];
  icon?: string;
  image?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}
