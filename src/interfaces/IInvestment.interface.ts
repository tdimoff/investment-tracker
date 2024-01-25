export interface IPortfolioItem {
  name: string;
  value: number;
}

export interface IActiveClosedItem {
  name: string;
  value: number;
}

export interface IActiveClosed {
  items: IActiveClosedItem[];
}

export interface IInvestmentItem {
  id: number;
  name: string;
  value: number;
  type: string;
  status: string;
  date: string;
}

export interface IInvestedValueItem {
  period: string;
  value: number;
}

export interface IInvestment {
  investedValue: IInvestedValueItem[];
  portfolio: IPortfolioItem[];
  activeClosed: IActiveClosedItem[];
  investments: IInvestmentItem[];
}
