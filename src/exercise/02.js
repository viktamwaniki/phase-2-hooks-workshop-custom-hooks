import styled from "styled-components";
import React, { useEffect, useState } from "react";

/* ✅ modify this usePokemon custom hook to take in a query as an argument */
export function usePokemon() {
export function usePokemon(query) {
  console.log(query)
  /* ✅ this hook should only return one thing: an object with the pokemon data */
  const [{ data, errors, status }, setState] = useState({
    data: null,
    errors: null,
    status: "idle",
  });

  useEffect(() => {
    setState(state => ({ ...state, errors: null, status: "pending" }));
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(async (r) => {
      if (r.ok) {
        return r.json();
      } else {
        const err = await r.text();
        throw err;
      }
    })
    .then(data => {
      setState({ data, errors: null, status: "fulfilled" });
    })
    .catch(err => {
      setState({ data: null, errors: [err], status: "rejected" });
    });
  }, [query]);
  return { data, status, errors };

}

function Pokemon({ query }) {
  const {data:pokemon}=usePokemon(query)
  // console.log(`Che  ${query}`)
  /* 
   ✅ move the code from the useState and useEffect hooks into the usePokemon hook
   then, call the usePokemon hook to access the pokemon data in this component
  */
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(r => r.json())
      .then(setPokemon);
  }, [query]);


  // 🚫 don't worry about the code below here, you shouldn't have to touch it
  if (!pokemon) return <h3>Loading...</h3>;
@@ -60,7 +84,6 @@ const Wrapper = styled.section`
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: papayawhip;
  text-align: center;
  h1 {
    background: #ef5350;
    color: white;
@@ -70,10 +93,9 @@ const Wrapper = styled.section`
    color: white;
    font-size: 2rem;
  }
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
  }
`;
`;
