import Card from "./card";
import { useEffect, useState } from "react";
export default function Categories() {
  const [categorias, setCategorias] = useState([]);

  const getCategorie = async () => {
    const fetching = await fetch("https://rickandmortyapi.com/api/character");
    const category = await fetching.json();
    await setCategorias(category.results);
  };
  console.log(categorias);

  useEffect(() => {
    getCategorie();
  }, []);
  return (
    <div className={"flex "}>
      <h1>hola</h1>
      {categorias.map((categoria) => (
        <Card key={categoria['id']} categorie={categoria['name']} image={categoria['image']} />

      ))}
    </div>
  );
}
