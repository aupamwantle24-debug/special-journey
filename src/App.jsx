export default function App() {
  const destinations = [
    {
      name: "Okavango Delta",
      description:
        "A UNESCO World Heritage Site with rich wildlife and unique inland delta ecosystems.",
      map: "https://www.google.com/maps/search/?api=1&query=Okavango+Delta+Botswana"
    },
    {
      name: "Chobe National Park",
      description:
        "Famous for its large elephant population and river safaris along the Chobe River.",
      map: "https://www.google.com/maps/search/?api=1&query=Chobe+National+Park"
    },
    {
      name: "Moremi Game Reserve",
      description:
        "A diverse wildlife reserve with lagoons, floodplains, and forests.",
      map: "https://www.google.com/maps/search/?api=1&query=Moremi+Game+Reserve"
    },
    {
      name: "Makgadikgadi Pans",
      description:
        "Vast salt pans known for unique landscapes and zebra migrations.",
      map: "https://www.google.com/maps/search/?api=1&query=Makgadikgadi+Pans"
    },
    {
      name: "Tsodilo Hills",
      description:
        "Ancient rock art site with cultural and spiritual significance.",
      map: "https://www.google.com/maps/search/?api=1&query=Tsodilo+Hills"
    },
    {
      name: "Kalahari Desert",
      description:
        "A semi-arid desert with red dunes and rich cultural heritage.",
      map: "https://www.google.com/maps/search/?api=1&query=Kalahari+Desert+Botswana"
    },
    {
      name: "Nxai Pan National Park",
      description:
        "Known for salt pans, wildlife, and Baines Baobabs.",
      map: "https://www.google.com/maps/search/?api=1&query=Nxai+Pan+Botswana"
    },
    {
      name: "Kasane",
      description:
        "Gateway to Chobe National Park and river safari experiences.",
      map: "https://www.google.com/maps/search/?api=1&query=Kasane+Botswana"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Special Journey 🇧🇼</h1>
      <p>Botswana Destination Guide</p>

      {destinations.map((place, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <a href={place.map} target="_blank">📍 Navigate</a>
        </div>
      ))}
    </div>
  );
}
