# Recipe Share - Foodies Community

## Application Purpose
Платформа за споделяне на кулинарни рецепти, която помага на потребителите да откриват нови ястия и да съхраняват своите собствени рецепти.

## User Roles
- **Guest:** Разглежда каталога, чете подробни рецепти, регистрира се.
- **Authenticated User:** Добавя нови рецепти, редактира/изтрива своите и има достъп до профил.

## Data Structure (Recipe Object)
- `_id`: String
- `title`: String (min 3 chars)
- `ingredients`: String
- `instructions`: String
- `imageUrl`: String (URL validation)
- `ownerId`: String (Link to User)

## How to Run
1. `npm install`
2. `ng serve`