interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Travel Agent'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Travel Agent', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Flight Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read flight information',
    'Create, Edit, and Delete bookings',
    'Read ticket information',
    'Create customer service requests',
  ],
  ownerAbilities: ['Manage bookings', 'Create and manage flights', 'Issue tickets', 'Provide customer service'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a9e0076d-4c49-46de-b8d6-e5cbd71756ce',
};
