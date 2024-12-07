export interface IGoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    pageCount: number;
    categories: string[];
    publisher: string;
    publishedDate: string;
  };
}

export interface IBookSaleWithUser extends IBookSale {
  users: {
    full_name: string;
    phone: number;
  };
}

export interface IBookSale {
  id: number;
  book_id: string;
  price: number;
  book_condition: BookCondition;
  remarks: string | null;
  created_at: Date;
  user_id: string;
}

export enum BookCondition {
  GOOD = 'Good',
  USED = 'Used',
  WORN = 'Worn',
}

export interface IWishlistBook {
  id: number;
  book_id: string;
  created_at: Date;
  user_id: string;
}
