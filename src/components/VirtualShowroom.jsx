import { useState } from "react";

export default function VirtualShowroom() {
  const [activeTab, setActiveTab] = useState("kitchen");
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [selectedLiving, setSelectedLiving] = useState(null);
  const [selectedParking, setSelectedParking] = useState(null);
  const [selectedLivingroomwall, setSelectedLivingroomwall] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);

  const tabs = [
    { id: "kitchen", label: "Kitchen Top Counter" },
    { id: "livingfloor", label: "Living Room Floor" },
    { id: "Parkingfloor", label: "Parking Lot" },
    { id: "Livingroomwall", label: "Living Room Wall" },
    { id: "Bathroomfloor", label: "Bathroom Floor" },

  ];

  // Kitchen thumbnails and scenes
  const kitchenTiles = [
    {
      id: "tile1",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/granite/ADHUNIK%20BROWN.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Adhunik%20Brown.jpg",
    },
    {
      id: "tile2",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/semipresious/BLACK%20PETRIFIED%20WOOD.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Black%20Petrified.jpg",
    },
    {
      id: "tile3",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/DARK%20EMPRADOR.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Dark%20Emprador.jpg",
    },
    {
      id: "tile4",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/FUSION%20BROWN.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Fusion%20Brown.jpg",
    },
    {
      id: "tile5",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/GOLDEN%20GALAXY.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Golden%20Galaxy.jpg",
    },
    {
      id: "tile6",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/onyx/GREY%20ONYX.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Gray%20Onyx.jpg",
    },
    {
      id: "tile7",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/granite/LAVENDER%20BLUE.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Lavender%20Blue.jpg",
    },
    {
      id: "tile8",
      thumb:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/fishish/SHAVED.webp",
      scene:
        "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Shaved.jpg",
    },
  ];

  // Living room thumbnails and scenes
  const livingTiles = [
    {
      id: "tile1",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/ALASKA%20GREY.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Alaska%20Gray.webp",
    },
    {
      id: "tile2",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/ARBESCATO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Arbescato.webp",
    },
    {
      id: "tile3",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/BOTTICHINO%20CLASSICO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/BOTTOCHINO%20CLASSICO.webp",
    },
    {
      id: "tile4",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/GOLDEN%20STATUARIO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Golden%20Statuario.webp",
    },
    {
      id: "tile5",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/GREY%20SARRAN%20COLLIN.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Gray%20Sarran%20Collin.webp",
    },
    {
      id: "tile6",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/onyx/GREY%20ONYX.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Grey%20Onyx.webp",
    },
    {
      id: "tile7",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/STATUARIO%20TO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Statuario%20White.webp",
    },
    {
      id: "tile8",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/semipresious/WHITE%20%C2%ADQUARTZ.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/White%20Quartz.webp",
    },
    {
      id: "tile9",
      thumb: "https://i.postimg.cc/ncsFG5PJ/Avocado.jpg",
      scene: "https://i.postimg.cc/nr3X9DrC/Avacado.jpg",
    },

  ];
  // parkinglot thumbnails and scenes 
  const ParkingTiles = [
    {
      id: "tile1",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/IMPORTED%20GRANITE/Blue%20ROMA.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Blue%20Roma.webp",
    },
    {
      id: "tile2",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/GREY%20ESPREDO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Gray%20Espredo.webp",
    },
    {
      id: "tile3",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/GREY%20FLURRY.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Gray%20Flurry.webp",
    },
    {
      id: "tile4",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/gREY%20SAINT%20LAURENT.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Gray%20Saint%20Laurent.webp",
    },
    {
      id: "tile5",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/mARMARA%20WHITE.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Infinity%20white.webp",
    },
    {
      id: "tile6",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/nero%20st.%20laurent.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Nero%20St.%20laurent.webp",
    },
    {
      id: "tile7",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/ROSSO%20PORTORO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Rosso%20Portoro.webp",
    },
    {
      id: "tile8",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/semipresious/WHITE%20%C2%ADQUARTZ.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/White%20Quartz.webp",
    },

  ];
  // Livingroomwall thumbnails and scenes 

  const Livingroomwalltiles = [
    {
      id: "tile1",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/IMPORTED%20GRANITE/blue%20labradorite.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/BLUE%20-%20LABRADORITE.webp",
    },
    {
      id: "tile2",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/popular/BLUE%20-%20ROMA.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/BLUE%20-%20ROMA.webp",
    },
    {
      id: "tile3",
      scene: "https://i.postimg.cc/j2MDn725/Avacado_(1).jpg",
      thumb: "https://i.postimg.cc/ncsFG5PJ/Avocado.jpg",
    },
    {
      id: "tile4",
      thumb: "https://i.postimg.cc/43yfdjTs/DARK-EMPERADOR-EXTRA.jpg",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/DARK%20-%20EMPERADOR.webp",
    },
    {
      id: "tile5",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/beige/gREY%20bRECIA.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/Gray%20Brecia.webp",
    },
    {
      id: "tile6",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/gREY%20SAINT%20LAURENT.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/Gray%20Saint%20Laurent.webp",
    },
    {
      id: "tile7",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/gUS%20MOROCCO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/Gus%20Morocco.webp",
    },
    {
      id: "tile8",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/IMPORTED%20GRANITE/WOODEN%20ROMA.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/Wooden%20Roma.webp",
    },

  ];
  const Bathroomtiles = [
    {
      id: "tile1",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/semipresious/black%20agate.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Black%20Agate.webp",
    },
    {
      id: "tile2",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/semipresious/BLACK%20PETRIFIED%20WOOD.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Black%20Petrified.webp",
    },
    {
      id: "tile3",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/onyx/BLUE%20ONYX.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Blue%20Onyx.webp",
    },
    {
      id: "tile4",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/traventino/EBONY%20TRAVETINO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Ebony%20Travertino.webp",
    },
    {
      id: "tile5",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/GOLDEN%20PORTORO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Golden%20Portoro.webp",
    },
    {
      id: "tile6",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/onyx/GREY%20ONYX.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Grey%20Onyx.webp",
    },
    {
      id: "tile7",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/colord/LIGHT%20EMPRADOR.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Light%20Emprador.webp",
    },
    {
      id: "tile8",
      thumb: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/Marble%20Collection/white/STATUARIO%20TO.webp",
      scene: "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Statuario%20White.webp",
    },

  ];
  // Default images for each section
  const defaultKitchenScene =
    "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Kitichen%20top%20counter/new/Adhunik%20Brown.jpg";
  const defaultLivingScene = "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Living-Room/Alaska%20Gray.webp";
  const defaultPARKINGScene = "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/Parkinglot/Blue%20Roma.webp";
  const defaultLivingroowallScene = "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/room-wall/BLUE%20-%20LABRADORITE.webp";
  const defaultBathroomScene = "https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/home/bathroom/Black%20Agate.webp";

  return (
    <div className="flex justify-center py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="w-full max-w-7xl px-4 sm:px-10">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap gap-4 sm:gap-6 bg-white/70 backdrop-blur-md shadow-xl md:rounded-full rounded-lg px-6 py-3 border border-gray-200">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={` px-4 py-2 rounded-full transition ${activeTab === tab.id
                      ? "bg-[#da373d] text-white font-bold"
                      : "hover:bg-[#da373d]/10"
                    }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Kitchen */}
        {activeTab === "kitchen" && (
          <div>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Kitchen Top Counter
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg max-w-4xl">
                  <img
                    src={
                      selectedKitchen
                        ? kitchenTiles.find((t) => t.id === selectedKitchen)
                          ?.scene
                        : defaultKitchenScene
                    }
                    alt="Kitchen Preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                {kitchenTiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedKitchen(tile.id)}
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${selectedKitchen === tile.id
                        ? "border-[#da373d] scale-105"
                        : "border-transparent hover:border-[#da373d]"
                      }`}
                  >
                    <img
                      src={tile.thumb}
                      alt="Tile"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Living Room */}
        {activeTab === "livingfloor" && (
          <div>
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Living Room Floor
            </h1>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg max-w-4xl">
                  <img
                    src={
                      selectedLiving
                        ? livingTiles.find((t) => t.id === selectedLiving)
                          ?.scene
                        : defaultLivingScene
                    }
                    alt="Living Preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                {livingTiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedLiving(tile.id)}
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${selectedLiving === tile.id
                        ? "border-[#da373d] scale-105"
                        : "border-transparent hover:border-[#da373d]"
                      }`}
                  >
                    <img
                      src={tile.thumb}
                      alt="Tile"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Parking Lot */}
        {activeTab === "Parkingfloor" && (
          <div>
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Parking Lot
            </h1>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg max-w-4xl">
                  <img
                    src={
                      selectedParking
                        ? ParkingTiles.find((t) => t.id === selectedParking)
                          ?.scene
                        : defaultPARKINGScene
                    }
                    alt="Living Preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                {ParkingTiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedParking(tile.id)}
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${selectedParking === tile.id
                        ? "border-[#da373d] scale-105"
                        : "border-transparent hover:border-[#da373d]"
                      }`}
                  >
                    <img
                      src={tile.thumb}
                      alt="Tile"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Livingroom wall Lot */}
        {activeTab === "Livingroomwall" && (
          <div>
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Living Room Wall
            </h1>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg max-w-4xl">
                  <img
                    src={
                      selectedLivingroomwall
                        ? Livingroomwalltiles.find((t) => t.id === selectedLivingroomwall)
                          ?.scene
                        : defaultLivingroowallScene
                    }
                    alt="Living Preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                {Livingroomwalltiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedLivingroomwall(tile.id)}
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${selectedParking === tile.id
                        ? "border-[#da373d] scale-105"
                        : "border-transparent hover:border-[#da373d]"
                      }`}
                  >
                    <img
                      src={tile.thumb}
                      alt="Tile"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Livingroom wall Lot */}
        {activeTab === "Bathroomfloor" && (
          <div>
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Bathroom
            </h1>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6">
              <div className="flex justify-center mb-6">
                <div className="rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg max-w-4xl">
                  <img
                    src={
                      selectedBathroom
                        ? Bathroomtiles.find((t) => t.id === selectedBathroom)
                          ?.scene
                        : defaultBathroomScene
                    }
                    alt="Living Preview"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                {Bathroomtiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedBathroom (tile.id)}
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${selectedParking === tile.id
                        ? "border-[#da373d] scale-105"
                        : "border-transparent hover:border-[#da373d]"
                      }`}
                  >
                    <img
                      src={tile.thumb}
                      alt="Tile"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
