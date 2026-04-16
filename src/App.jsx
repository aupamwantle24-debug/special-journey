export default function App() {
  const destinations = [
    {
      name: "Kasane",
      description:
        "A vibrant town in northern Botswana, Kasane is the gateway to Chobe National Park, known for its large elephant population and riverfront wildlife viewing.",
      map: "https://www.google.com/maps/search/?api=1&query=Kasane+Botswana"
    },
    {
      name: "Nxai Pan",
      description:
        "Nxai Pan is part of the Makgadikgadi salt pans and offers unique landscapes, seasonal wildlife, and the iconic Baines Baobabs.",
      map: "https://www.google.com/maps/search/?api=1&query=Nxai+Pan+Botswana"
    },
    {
      name: "Kalahari Desert",
      description:
        "The Kalahari Desert spans much of Botswana, featuring vast sandy plains, unique wildlife, and rich cultural heritage of the San people.",
      map: "https://www.google.com/maps/search/?api=1&query=Kalahari+Desert+Botswana"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Special Journey 🇧🇼</h1>
      <p>Explore Botswana’s top destinations</p>

      {destinations.map((place, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <a href={place.map} target="_blank">
            Navigate
          </a>
        </div>
      ))}
    </div>
  );
}
