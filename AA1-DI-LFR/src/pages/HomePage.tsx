import CocktailCard from "../components/CocktailCard";

export default function HomePage() {

  const cocktail = {
    idDrink: "123",
    strDrink: "Margarita",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass"
  };

  return (
    <div>
      <CocktailCard cocktail={cocktail} />
    </div>
  );
}