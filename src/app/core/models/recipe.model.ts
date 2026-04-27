export interface Recipe {
  _id?: string;          // Уникално ID (опционално, защото базата ще го създаде)
  title?: string;        // Заглавие на рецептата
  name?: string;         // Алтернативно име
  description: string;  // Кратко описание/Статия
  ingredients: string;  // Съставки (засега като текст)
  imageUrl?: string;     // Линк към снимка
  image?: string;        // Алтернативен линк към снимка
  instructions?: string; // Инструкции
  steps?: string;        // Стъпки (алтернатива на instructions)
  ownerId?: string;     // Кой е създателят
  likes: string[];      // Списък с ID-та на хората, които са лайкнали
  comments: Comment[];  // Списък с коментари
}

export interface Comment {
  username: string;
  text: string;
}