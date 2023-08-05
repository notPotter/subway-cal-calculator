export interface Food {
  name: string;
  kcal: number;
  protein: number;
  saturatedFat: number;
  sugars: number;
  sodium: number;
}

export interface Menu extends Food {
  img: string;
  description: string;
}
