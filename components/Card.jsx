import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import _ from "lodash";

export default function Card({ url }) {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [types, setTypes] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setImage(data.sprites.other["official-artwork"].front_default);
        setName(data.name);
        setTypes(data.types);
        setId(data.id);
      })
      .catch((err) => console.log(err));
  }, []);
  if (types[0]?.type.name === "fire") {
    return (
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <div>
          <div className="bg-red-400 w-full flex justify-evenly rounded-2xl p-3 mx-auto gap-2">
            <div className="w-1/2">
              <p className="text-white text-2xl font-bold">
                {_.capitalize(name)}
              </p>
              <div className="flex gap-1 mt-2">
                {types.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className="flex font-semibold items-center justify-center px-4 text-center bg-red-300 rounded-full text-white text-md"
                    >
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={image} alt={name} className="w-1/2" />
          </div>
        </div>
      </Link>
    );
  } else if (types[0]?.type.name === "grass") {
    return (
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <div>
          <div className="bg-green-400 w-full flex justify-evenly rounded-2xl p-3 mx-auto gap-2">
            <div className="w-1/2">
              <p className="text-white text-2xl font-bold">
                {_.capitalize(name)}
              </p>
              <div className="flex gap-1 mt-2">
                {types.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className="flex font-semibold items-center justify-center px-4 text-center bg-green-300 rounded-full text-white text-md"
                    >
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={image} alt={name} className="w-1/2" />
          </div>
        </div>
      </Link>
    );
  } else if (types[0]?.type.name === "water") {
    return (
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <div>
          <div className="bg-blue-400 w-full flex justify-evenly rounded-2xl p-3 mx-auto gap-2">
            <div className="w-1/2">
              <p className="text-white text-2xl font-bold">
                {_.capitalize(name)}
              </p>
              <div className="flex gap-1 mt-2">
                {types.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className="flex font-semibold items-center justify-center px-4 text-center bg-blue-300 rounded-full text-white text-md"
                    >
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={image} alt={name} className="w-1/2" />
          </div>
        </div>
      </Link>
    );
  } else if (types[0]?.type.name === "bug") {
    return (
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <div>
          <div className="bg-indigo-400 w-full flex justify-evenly rounded-2xl p-3 mx-auto gap-2">
            <div className="w-1/2">
              <p className="text-white text-2xl font-bold">
                {_.capitalize(name)}
              </p>
              <div className="flex gap-1 mt-2">
                {types.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className="flex font-semibold items-center justify-center px-4 text-center bg-indigo-300 rounded-full text-white text-sm"
                    >
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={image} alt={name} className="w-1/2" />
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <div>
          <div className="bg-gray-400 w-full flex justify-evenly rounded-2xl p-3 mx-auto gap-2">
            <div className="w-1/2">
              <p className="text-white text-2xl font-bold">
                {_.capitalize(name)}
              </p>
              <div className="flex gap-1 mt-2">
                {types.map((el, index) => {
                  return (
                    <span
                      key={index}
                      className="flex font-semibold text-white items-center justify-center px-4 text-center bg-gray-300 rounded-full text-md"
                    >
                      {el.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={image} alt={name} className="w-1/2" />
          </div>
        </div>
      </Link>
    );
  }
}
