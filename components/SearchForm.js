import React from "react";

const SearchForm = () => {
  const [hits, setHits] = React.useState([]);

  const search = async (event) => {
    const query = event.target.value;

    if (query.length > 2) {
      const params = new URLSearchParams({ query });
      const res = await fetch("/api/search?" + params);
      const result = await res.json();
      setHits(result.cars);
    }
  };

  return (
    <section className="container">
      <div className="columns is-centered">
        <div className="column is-5">
          <div className="h2 is-size-3 title mt-5 mb-3">Find Car</div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" onChange={search} />
            </div>
          </div>
          <ul>
            {hits.map((hit) => (
              <li key={hit.entityId}>
                <p>{hit.model}</p>
                <img src={hit.image} alt={hit.model} />
                <p>{hit.make}</p>
                <p>{hit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
