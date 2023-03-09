interface ingredientProps {
  content: {
    ingredients: string[];
  };
}
export default function PostIngredients({ content }: ingredientProps) {
  const { ingredients } = content;
  return (
    <>
      <h2>Ingredienser</h2>
      <ol>
        {ingredients.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </ol>
    </>
  );
}
