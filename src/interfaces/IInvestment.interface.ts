export interface IPortfolioItem {
  name: string;
  value: number;
}

export interface IPortfolio {
  items: IPortfolioItem[];
}

export interface IActiveClosedItem {
  name: string;
  y: number;
}

export interface IActiveClosed {
  items: IActiveClosedItem[];
}

export interface IInvestment {
  portfolio: IPortfolio;
  activeClosed: IActiveClosed;
}
