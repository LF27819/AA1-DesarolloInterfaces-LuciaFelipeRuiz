type Props = {
  query: string;
  onQueryChange: (value: string) => void;
  alcoholFilter: string;
  onAlcoholFilterChange: (value: string) => void;
  alcoholOptions: string[];
  sortOrder: "asc" | "desc";
  onSortOrderChange: (value: "asc" | "desc") => void;
};

export default function CocktailFilters({
  query,
  onQueryChange,
  alcoholFilter,
  onAlcoholFilterChange,
  alcoholOptions,
  sortOrder,
  onSortOrderChange,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Buscar por nombre, categoría, tipo o vaso..."
        style={{
          flex: 1,
          minWidth: "260px",
          maxWidth: "420px",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid var(--color-borde)",
          fontSize: "1rem",
        }}
      />

      <select
        value={alcoholFilter}
        onChange={(event) => onAlcoholFilterChange(event.target.value)}
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid var(--color-borde)",
          fontSize: "1rem",
          minWidth: "180px",
        }}
      >
        <option value="all">Todos los tipos</option>
        {alcoholOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(event) =>
          onSortOrderChange(event.target.value as "asc" | "desc")
        }
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid var(--color-borde)",
          fontSize: "1rem",
          minWidth: "180px",
        }}
      >
        <option value="asc">Ascendente (A-Z)</option>
        <option value="desc">Descendente (Z-A)</option>
      </select>
    </div>
  );
}