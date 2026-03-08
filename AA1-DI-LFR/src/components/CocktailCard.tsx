import { Link } from "react-router-dom";

type Cocktail = {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strCategory?: string
  strAlcoholic?: string
  strGlass?: string
}

type Props = {
  cocktail: Cocktail
}

export default function CocktailCard({ cocktail }: Props) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-panel)",
        borderRadius: "18px",
        padding: "24px",
        maxWidth: "420px",
        width: "100%",
        color: "var(--color-texto-oscuro)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        <Link to={`/cocktails/${cocktail.idDrink}`} className="cocktail-link">
          {cocktail.strDrink}
        </Link>
      </h2>

      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        style={{
          width: "100%",
          maxWidth: "300px",
          display: "block",
          margin: "0 auto 20px",
          borderRadius: "10px"
        }}
      />

      {cocktail.strCategory && (
        <p>
          <strong>Categoría:</strong> {cocktail.strCategory}
        </p>
      )}

      {cocktail.strAlcoholic && (
        <p>
          <strong>Tipo:</strong> {cocktail.strAlcoholic}
        </p>
      )}

      {cocktail.strGlass && (
        <p>
          <strong>Vaso:</strong> {cocktail.strGlass}
        </p>
      )}
    </div>
  )
}