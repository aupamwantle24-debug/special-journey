export default function App() {
  const destinations = [
    {
      name: "Kasane",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chobe_river.jpg",
      description:
        "Kasane is a vibrant gateway town to Chobe National Park, famous for its dense elephant population and scenic riverfront wildlife viewing.",
      map: "https://www.google.com/maps/search/?api=1&query=Kasane+Botswana",
      accommodation: [
        {
          name: "Chobe Safari Lodge",
          contact: "+267 625 0336",
          price: "$150 per night"
        }
      ]
    },
    {
      name: "Nxai Pan",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Baines_Baobabs.jpg",
      description:
        "Nxai Pan offers open salt pans, seasonal wildlife, and the iconic Baines Baobabs, creating one of Botswana’s most unique landscapes.",
      map: "https://www.google.com/maps/search/?api=1&query=Nxai+Pan+Botswana",
      accommodation: [
        {
          name: "Nxai Pan Camp",
          contact: "+267 686 1241",
          price: "$200 per night"
        }
      ]
    },
    {
      name: "Kalahari Desert",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kalahari_Desert.jpg",
      description:
        "The Kalahari Desert features vast sandy terrain, unique wildlife, and deep cultural heritage of the San people.",
      map: "https://www.google.com/maps/search/?api=1&query=Kalahari+Desert+Botswana",
      accommodation: [
        {
          name: "Kalahari Plains Camp",
          contact: "+267 390 0000",
          price: "$250 per night"
        }
      ]
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Special Journey 🇧🇼</h1>
      <p>Your complete Botswana travel guide</p>

      {destinations.map((place, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px"
          }}
        >
          <h2>{place.name}</h2>

          <img
            src={place.image}
            alt={place.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <p>{place.description}</p>

          <a href={place.map} target="_blank">
            📍 Navigate
          </a>

          <h3>Accommodation</h3>
          {place.accommodation.map((hotel, i) => (
            <div key={i}>
              <p><strong>{hotel.name}</strong></p>
              <p>📞 {hotel.contact}</p>
              <p>💲 {hotel.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
