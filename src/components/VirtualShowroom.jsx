import { useState } from "react";

export default function VirtualShowroom() {
  const [activeTab, setActiveTab] = useState("kitchen");
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [selectedLiving, setSelectedLiving] = useState(null);

  const tabs = [
    { id: "kitchen", label: "Kitchen Top Counter" },
    { id: "livingfloor", label: "Living Room Floor" },
    { id: "Parkingfloor", label: "Parking Lot" },
    { id: "Bathroomfloor", label: "Bathroom Floor" },
    { id: "Livingroomwall", label: "Living Room Wall" },
  ];

  // Kitchen thumbnails and scenes
  const kitchenTiles = [
    {
      id: "tile1",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.1.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/01.webp",
    },
    {
      id: "tile2",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.2.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/02.webp",
    },
    {
      id: "tile3",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.3.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/03.webp",
    },
    {
      id: "tile4",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.4.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/04.webp",
    },
    {
      id: "tile5",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.5.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/05.webp",
    },
    {
      id: "tile6",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.6.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/06.webp",
    },
    {
      id: "tile7",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.7.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/07.webp",
    },
    {
      id: "tile8",
      thumb: "https://malanimarbles.com/img/virtual%203d/0.8.webp",
      scene: "https://malanimarbles.com/img/virtual%203d/08.webp",
    },
  ];

  // Living room thumbnails and scenes
  const livingTiles = [
    {
      id: "tile1",
      thumb: "img/virtuallivingroom/thumbs/01.webp",
      scene: "img/virtuallivingroom/scenes/living-01.webp",
    },
    {
      id: "tile2",
      thumb: "img/virtuallivingroom/thumbs/02.webp",
      scene: "img/virtuallivingroom/scenes/living-02.webp",
    },
  ];

  // Default images for each section
  const defaultKitchenScene =
    "https://malanimarbles.com/img/virtual%203d/03.webp";
  const defaultLivingScene = "img/virtuallivingroom/default-living.webp";

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
                  className={` px-4 py-2 rounded-full transition ${
                    activeTab === tab.id
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
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#da373d] mb-6">
              Kitchen Top Counter
            </h1>
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
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${
                      selectedKitchen === tile.id
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
                    className={`cursor-pointer w-20 aspect-square rounded-xl overflow-hidden border-2 shadow-md transition-all duration-300 ${
                      selectedLiving === tile.id
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
