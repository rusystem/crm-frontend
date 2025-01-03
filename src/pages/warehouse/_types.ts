export enum WarehouseTableField {
  Name = "name",
  Address = "address",
  MaxCapacity = "max_capacity",
  CurrentOccupancy = "current_occupancy",
  ResponsibilityPerson = "responsible_person",
  Id = "id",
  Country = "country",
  Region = "region",
  Phone = "phone",
  Email = "email",
  Comments = "comments",
}

export type Warehouse = {
  address: string;
  company_id: number;
  created_at: string;
  country_id: string;
  current_occupancy: number;
  id: number;
  max_capacity: number;
  name: string;
  country: string;
  region: string;
  responsible_person: string;
  phone: string;
  email: string;
  otherFields: Record<string, string>;
  comments: string;
};
