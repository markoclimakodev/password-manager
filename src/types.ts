export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export interface ServicesTypeWithId {
  serviceName: string;
  login: string;
  password: string;
  url:string;
  id: number
}

export type Change = React.ChangeEvent<HTMLInputElement>;
export type Focus = React.FocusEventHandler<HTMLInputElement>;
export type Mouse = React.MouseEvent<HTMLInputElement, MouseEvent>;

export type TipsType = {
  hasEightOrMoreCharacters: boolean;
  hasUpToSixteenCharacters: boolean;
  isAlphanumeric: boolean;
  hasSpecialChar: boolean;
};
