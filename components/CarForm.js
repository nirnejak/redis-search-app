import React from "react";

const CarForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <section className="container">
      <div className="columns is-centered">
        <div className="column is-5">
          <div className="h2 is-size-3 title mt-5 mb-3">Add Car</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="make"
                  placeholder="Make"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="model"
                  placeholder="Model"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="image"
                  placeholder="Image"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  placeholder="Description"
                  rows="5"
                />
              </div>
            </div>

            <button className="button is-info is-fullwidth" type="submit">
              Create Car
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CarForm;
