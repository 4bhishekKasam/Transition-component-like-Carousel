import React from "react";
import Card from './Card'

export default function Home({ property }) {
  return (
    <div className="page">
      <div className="card-container">
        <Card property={property} />
      </div>
    </div>
  );
}
