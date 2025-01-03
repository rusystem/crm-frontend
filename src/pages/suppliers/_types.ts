export enum SupplierTableField {
  Id = "id",
  Address = "actual_address",
  Balance = "balance",
  BankDetails = "bank_details",
  Comments = "comments",
  ContactPerson = "contact_person",
  ContractNumber = "contract_number",
  Country = "country",
  Email = "email",
  Files = "files",
  IsActive = "is_active",
  LegalAddress = "legal_address",
  Name = "name",
  PaymentTerms = "payment_terms",
  Phone = "phone",
  ProductCategories = "product_categories",
  ProductTypes = "product_types",
  PurchaseAmount = "purchase_amount",
  Region = "region",
  RegistrationDate = "registration_date",
  TaxId = "tax_id",
  WarehouseAddress = "warehouse_address",
  Website = "website",
}

export type Supplier = {
  warehouse_address: string;
  actual_address: string;
  balance: number;
  bank_details: number;
  comments: string;
  company_id: number;
  contact_person: string;
  contract_number: string;
  country: string;
  tax_id: string;
  email: string;
  files: string;
  id: number;
  is_active: boolean;
  website: string;
  legal_address: string;
  name: string;
  other_fields: Record<string, string>;
  payment_terms: string;
  phone: string;
  product_categories: Array<string>;
  product_types: number;
  purchase_amount: number;
  region: string;
};
