import React, { useState } from 'react';

function Filter({ data }) {
  const [form, setForm] = useState("Search Description");
  const [filtered, setFiltered] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    // Filter the data based on the search term (form)
    const filteredItems = data.filter((item) =>
      item.description.toLowerCase().includes(form.toLowerCase())
    );
    setFiltered(filteredItems);
  }

  // Determine the data to display
  const display = form === "Search Description" ? data : filtered;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className='table-box'>
        <div className="table-row">
          <div className="table-cell">
            <p>Date</p>
          </div>
          <div className="table-cell">
            <p>Description</p>
          </div>
          <div className="table-cell">
            <p>Category</p>
          </div>
          <div className="table-cell">
            <p>Amount</p>
          </div>
        </div>
      {display.map((element)=>(
        <div className="table-row" key={element.id}>
          <div className="table-cell">
            <p>{element.date}</p>
          </div>
          <div className="table-cell">
            <p>{element.description}</p>
          </div>
          <div className="table-cell">
            <p>{element.category}</p>
          </div>
          <div className="table-cell">
            <p>{element.amount}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Filter;
