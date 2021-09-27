import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

import Button from "../../../components/Button";
import About from "./about";

const Detail = () => {
  const [detail, setDetail] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({ data }) => {
          setDetail(data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (detail?.types[0].type.name === "grass") {
    return (
      <>
        <div className="h-screen w-screen bg-gray-100">
          <div className="sm:w-full sm:mx-auto lg:w-1/2 lg:mx-auto bg-green-400 h-screen flex flex-col">
            <div className="px-10 h-1/6">
              <div className="flex flex-col">
                <p className="text-white font-bold text-7xl mt-5">
                  {_.capitalize(detail?.name)}
                </p>
                <p className="flex justify-end text-2xl font-medium text-white">
                  {detail?.id < 10 ? `#00${detail?.id}` : `#0${id}`}
                </p>
                <div className="flex gap-2">
                  {detail?.types.map((item) => {
                    return (
                      <p className="flex font-semibold items-center justify-center px-4 text-center bg-green-300 rounded-full text-white text-lg">
                        {item.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              className="w-1/2 mx-auto relative top-10 z-10"
              src={detail?.sprites.other["official-artwork"].front_default}
            />
            <div className="sm:h-full lg:h-full bg-white rounded-t-3xl">
              <div className="mx-10 mt-10 flex justify-between">
                <Button key="About" title="About" />
                <Button key="Base" title="Base Stats" />
                <Button key="Evo" title="Evolution" />
                <Button key="Move" title="Moves" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detail?.types[0].type.name === "fire") {
    return (
      <>
        <div className="h-screen w-screen bg-gray-100">
          <div className="sm:w-full sm:mx-auto lg:w-1/2 lg:mx-auto bg-red-400 h-screen flex flex-col">
            <div className="px-10 h-1/6">
              <div className="flex flex-col">
                <p className="text-white font-bold text-7xl mt-5">
                  {_.capitalize(detail?.name)}
                </p>
                <p className="flex justify-end text-2xl font-medium text-white">
                  {detail?.id < 10 ? `#00${detail?.id}` : `#0${id}`}
                </p>
                <div className="flex gap-2">
                  {detail?.types.map((item) => {
                    return (
                      <p className="flex font-semibold items-center justify-center px-4 text-center bg-red-300 rounded-full text-white text-lg">
                        {item.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              className="w-1/2 mx-auto relative top-10 z-10"
              src={detail?.sprites.other["official-artwork"].front_default}
            />
            <div className="sm:h-full lg:h-full bg-white rounded-t-3xl">
              <div className="mx-10 mt-10 flex justify-between">
                <Button key="About" title="About" />
                <Button key="Base" title="Base Stats" />
                <Button key="Evo" title="Evolution" />
                <Button key="Move" title="Moves" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detail?.types[0].type.name === "water") {
    return (
      <>
        <div className="h-screen w-screen bg-gray-100">
          <div className="sm:w-full sm:mx-auto lg:w-1/2 lg:mx-auto bg-blue-400 h-screen flex flex-col">
            <div className="px-10 h-1/6">
              <div className="flex flex-col">
                <p className="text-white font-bold text-7xl mt-5">
                  {_.capitalize(detail?.name)}
                </p>
                <p className="flex justify-end text-2xl font-medium text-white">
                  {detail?.id < 10 ? `#00${detail?.id}` : `#0${id}`}
                </p>
                <div className="flex gap-2">
                  {detail?.types.map((item) => {
                    return (
                      <p className="flex font-semibold items-center justify-center px-4 text-center bg-blue-300 rounded-full text-white text-lg">
                        {item.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              className="w-1/2 mx-auto relative top-10 z-10"
              src={detail?.sprites.other["official-artwork"].front_default}
            />
            <div className="sm:h-full lg:h-full bg-white rounded-t-3xl">
              <div className="mx-10 mt-10 flex justify-between">
                <Button key="About" title="About" />
                <Button key="Base" title="Base Stats" />
                <Button key="Evo" title="Evolution" />
                <Button key="Move" title="Moves" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detail?.types[0].type.name === "bug") {
    return (
      <>
        <div className="h-screen w-screen bg-gray-100">
          <div className="sm:w-full sm:mx-auto lg:w-1/2 lg:mx-auto bg-indigo-400 h-screen flex flex-col">
            <div className="px-10 h-1/6">
              <div className="flex flex-col">
                <p className="text-white font-bold text-7xl mt-5">
                  {_.capitalize(detail?.name)}
                </p>
                <p className="flex justify-end text-2xl font-medium text-white">
                  {detail?.id < 10 ? `#00${detail?.id}` : `#0${id}`}
                </p>
                <div className="flex gap-2">
                  {detail?.types.map((item) => {
                    return (
                      <p className="flex font-semibold items-center justify-center px-4 text-center bg-indigo-300 rounded-full text-white text-lg">
                        {item.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              className="w-1/2 mx-auto relative top-10 z-10"
              src={detail?.sprites.other["official-artwork"].front_default}
            />
            <div className="sm:h-full lg:h-full bg-white rounded-t-3xl">
              <div className="mx-10 mt-10 flex justify-between">
                <Button key="About" title="About" />
                <Button key="Base" title="Base Stats" />
                <Button key="Evo" title="Evolution" />
                <Button key="Move" title="Moves" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-screen w-screen bg-gray-100">
          <div className="sm:w-full sm:mx-auto lg:w-1/2 lg:mx-auto bg-gray-400 h-screen flex flex-col">
            <div className="px-10 h-1/6">
              <div className="flex flex-col">
                <p className="text-white font-bold text-7xl mt-5">
                  {_.capitalize(detail?.name)}
                </p>
                <p className="flex justify-end text-2xl font-medium text-white">
                  {detail?.id < 10 ? `#00${detail?.id}` : `#0${id}`}
                </p>
                <div className="flex gap-2">
                  {detail?.types.map((item) => {
                    return (
                      <p className="flex font-semibold items-center justify-center px-4 text-center bg-gray-300 rounded-full text-white text-lg">
                        {item.type.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <img
              className="w-1/2 mx-auto relative top-10 z-10"
              src={detail?.sprites.other["official-artwork"].front_default}
            />
            <div className="sm:h-full lg:h-full bg-white rounded-t-3xl">
              <div className="mx-10 mt-10 flex justify-between">
                <Button key="About" title="About" />
                <Button key="Base" title="Base Stats" />
                <Button key="Evo" title="Evolution" />
                <Button key="Move" title="Moves" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Detail;
