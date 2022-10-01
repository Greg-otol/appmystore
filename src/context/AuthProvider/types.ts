export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }

export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IFavorites {
    
}