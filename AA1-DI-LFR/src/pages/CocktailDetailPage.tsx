import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type CocktailDetail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  [key: string]: string | undefined;
};

export default function CocktailDetailPage() {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState<CocktailDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.drinks || data.drinks.length === 0) {
          setError("No se encontró el cóctel");
          setLoading(false);
          return;
        }

        setCocktail(data.drinks[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Error cargando el cóctel");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p style={{ margin: 0, fontSize: "30px", textAlign: "center" }}>
        ◌ Cargando cóctel...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ margin: 0, fontSize: "30px", textAlign: "center" }}>
        {error}
      </p>
    );
  }

  if (!cocktail) {
    return null;
  }

  const ingredientes = [];

  for (let i = 1; i <= 15; i++) {
    const ingrediente = cocktail[`strIngredient${i}`];
    const medida = cocktail[`strMeasure${i}`];

    if (ingrediente && ingrediente.trim() !== "") {
      ingredientes.push(
        medida && medida.trim() !== ""
          ? `${ingrediente} - ${medida}`
          : ingrediente
      );
    }
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "var(--color-titulo-detalle)",
          marginBottom: "30px",
          fontSize: "2.8rem",
        }}
      >
        Detalle del Cóctel 🍹
      </h1>

      <div
        style={{
          backgroundColor: "var(--color-panel)",
          borderRadius: "24px",
          padding: "32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          alignItems: "center",
          color: "var(--color-texto-oscuro)",
        }}
      >
        <div>
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            style={{
              width: "100%",
              borderRadius: "18px",
              display: "block",
            }}
          />
        </div>

        <div>
          <h2
            style={{
              color: "var(--color-texto-oscuro)",
              fontSize: "2.5rem",
              marginTop: 0,
              marginBottom: "24px",
            }}
          >
            {cocktail.strDrink}
          </h2>

          <h3
            style={{
              color: "var(--color-texto-oscuro)",
              fontSize: "1.8rem",
              marginBottom: "16px",
            }}
          >
            Características:
          </h3>

          {cocktail.strCategory && (
            <p style={{ fontSize: "1.4rem", lineHeight: 1.6 }}>
              <strong>Categoría:</strong> {cocktail.strCategory}
            </p>
          )}

          {cocktail.strAlcoholic && (
            <p style={{ fontSize: "1.4rem", lineHeight: 1.6 }}>
              <strong>Tipo:</strong> {cocktail.strAlcoholic}
            </p>
          )}

          {cocktail.strGlass && (
            <p style={{ fontSize: "1.4rem", lineHeight: 1.6 }}>
              <strong>Vaso:</strong> {cocktail.strGlass}
            </p>
          )}

          <h3
            style={{
              color: "var(--color-texto-oscuro)",
              fontSize: "1.8rem",
              marginTop: "28px",
            }}
          >
            Ingredientes:
          </h3>

          <div style={{ fontSize: "1.35rem", lineHeight: 1.8 }}>
            {ingredientes.map((ingrediente, index) => (
              <p key={index} style={{ margin: "0 0 6px" }}>
                {ingrediente}
              </p>
            ))}
          </div>

          {cocktail.strInstructions && (
            <>
              <h3
                style={{
                  color: "var(--color-texto-oscuro)",
                  fontSize: "1.8rem",
                  marginTop: "28px",
                }}
              >
                Instrucciones:
              </h3>

              <p style={{ fontSize: "1.35rem", lineHeight: 1.8 }}>
                {cocktail.strInstructions}
              </p>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}