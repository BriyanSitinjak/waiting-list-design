export type NavBarType = {
    name: string;
}

type vendorType = 'independent' | 'company';

type statusType = 'onboarded' | 'rejected';

type serviceOfferingType = 'windowscleaning' | 'housekeeping' | 'carValet';

export type TableType = {
    email: string;
    phoneNumber: number;
    postCode: number;
    vendor: vendorType;
    serviceOffering: serviceOfferingType;
    signupDate : number;
    status: statusType;
}