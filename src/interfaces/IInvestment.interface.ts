export interface IPortfolioItem {
  name: string;
  value: number;
}

export interface IPortfolio {
  items: IPortfolioItem[];
}

export interface IInvestment {
  portfolio: IPortfolio;
}
