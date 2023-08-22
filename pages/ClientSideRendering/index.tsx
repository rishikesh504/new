'use client'

import React, { useEffect, useState } from "react";

const ClientSideRendering = () => {
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
        const data = await response.json();
        setClientData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fn();
  }, []);

  console.log("clientData", clientData);

  return <div>
    Client Side Rendering (CSR)
    <div>
        <h2>Pokemon List</h2>
        <div>
          {clientData.map((pokemon: any) => (
            <div className={"card"} key={pokemon.id}>
              <a>
                <span style={{height:"200px", width:"200px",display:"block"}}><img style={{height:"100%", width:"100%",objectFit:"cover"}} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt={pokemon.name} /></span>
                
                <h3>{pokemon.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
  </div>;
};

export default ClientSideRendering;
