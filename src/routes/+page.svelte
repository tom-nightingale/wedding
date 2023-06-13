<script lang="ts">
  import Container from "@/components/_shared/Container/Container.svelte";
  import NavList from "@/components/_shared/Nav/NavList.svelte";

  const data = {
    event: {
      date: "April 20th 2024",
      venue: "The West Mill",
      venueAddress: [
        "The West Mill Venue",
        "Darley Abbey Mills",
        "Haslams Lane, Darley Abbey",
        "Derby",
        "DE22 1DZ",
      ],
    },
    travel: [
      {
        name: "",
        distance: "",
        website: "",
      },
    ],
    accommodation: [
      {
        name: "The Coach House",
        address: ["185A Duffield Road", "Darley Abbey", "Derby", "DE22 1JB"],
        tripAdvisor:
          "https://www.tripadvisor.co.uk/Hotel_Review-g187048-d1378704-Reviews-The_Coach_House-Derby_Derbyshire_England.html",
        website: "https://www.coachhousederby.com/",
      },
      {
        name: "Travelodge Derby Pride Park",
        address: [
          "Prospect Place",
          "Millenium Way",
          "Pride Park",
          "Derby",
          "DE24 8HG",
        ],
        tripAdvisor:
          "https://www.tripadvisor.co.uk/Hotel_Review-g187048-d1026953-Reviews-Travelodge_Derby_Pride_Park-Derby_Derbyshire_England.html",
        website:
          "https://www.travelodge.co.uk/hotels/402/Derby-Pride-Park-hotel",
      },
      {
        name: "Premier Inn Derby City Centre",
        address: ["Cathedral View Full Street", "Derby", "DE1 3AF"],
        tripAdvisor:
          "https://www.tripadvisor.co.uk/Hotel_Review-g187048-d9784487-Reviews-Premier_Inn_Derby_City_Centre_Cathedral_Quarter_Hotel-Derby_Derbyshire_England.html",
        website:
          "https://www.premierinn.com/gb/en/hotels/england/derbyshire/derby/derby-city-centre-cathedral-quarter.html",
      },
    ],
    schedule: {
      guestsArrive: "12:30",
      ceremony: "13:30",
      weddingBreakfast: "",
      firstDance: "",
      eveningGuests: "",
      carrriages: "",
    },
  };
</script>

<svelte:head>
  <title
    >Tom &amp; Kelly's Get Married | {data.event.venue} | {data.event
      .date}</title
  >
</svelte:head>

<div class="z-[9999] h-screen fixed">
  <Container>
    <NavList
      items={["Venue", "Directions", "Accommodation", "Schedule", "RSVP"]}
    />
  </Container>
</div>

<div
  class="relative flex items-center justify-center bg-gray-100 min-h-[90vh] text-center"
>
  <img
    class="absolute top-0 left-0 w-full h-full opacity-50 bg-gray-900 object-cover object-center"
    src="http://placedog.net/2000"
    alt={`${data.event.venue} | ${data.event.venueAddress.join(", ")}`}
  />
  <Container>
    <h1>Tom &amp; Kelly <span class="block">are getting married</span></h1>
    <hr class="mx-auto w-1/5 h-[1px] bg-black my-4 border-none" />
    <p>{data.event.date}</p>
  </Container>
</div>

<!-- 
  Venue
  Getting to the day.
  where to stay
  schedule
  RSVP (day guests / evening guests)
-->
