export type User = {
  company_id: number;
  country: string;
  created_at: string;
  email: string;
  id: number;
  is_active: boolean;
  is_approved: boolean;
  is_send_system_notification: boolean;
  language: string;
  last_login: string;
  name: string;
  phone: string;
  position: string;
  role: "admin" | "user" | "manager";
  sections: string[];
  updated_at: string;
  username: string;
};
