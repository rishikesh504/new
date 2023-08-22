import { GetServerSideProps } from "next";
import Link from "next/link";

type SSRProp = {
  pokemon: any[];
};
export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}



const StaticSideRendering = ({ pokemon }: SSRProp) => {
  return (
    <div>
      Static Side Rendering (SSR)
      {/* <ul>
        {data?.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      <div>
        <h2>Pokemon List</h2>
        <div>
          {pokemon.map((pokemon: any) => (
            <div className={"card"} key={pokemon.id}>
              <a>
                <span
                  style={{ height: "200px", width: "200px", display: "block" }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                    alt={pokemon.name}
                  />
                </span>

                <h3>{pokemon.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticSideRendering;
