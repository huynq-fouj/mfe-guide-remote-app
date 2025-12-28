export type CardInformation = {
    cardId: number | null;
    cardCode: string | null;
    cardName: string | null;
    point: number;
    amount: number;
    rank: string | null;
    accumValue: number | null;
    redeemValue: number | null;
}

export type Customer = {
    comId: number;
    id: number;
    name: string | null;
    gender: number | null;
    code: string;
    code2: string;
    address: string | null;
    phoneNumber: string | null;
    email: string | null;
    taxCode: string | null;
    idNumber: string | null;
    type: number;
    description: string | null;
    city: string | null;
    district: string | null;
    birthday: string | null;
    note: string | null;
    buyerName: string | null;
    bankNo: string | null;
    bankName: string | null;
    budgetaryRelationshipCode: string | null;
    passportNo: string | null;
    createTime: string;
    updateTime: string;
    pointBalance: number | null;
    moneyBalance: number | null;
    companyName: string | null;
    voucherIds: number[];
    cardInformation: CardInformation | null;
    debtReceivable: number | null;
    debtPayable: number | null;
}

export type CustomerRequestParams = {
    page: number;
    size: number;
    isHiddenDefault?: boolean;
}

export type CustomersResponse = Customer[];