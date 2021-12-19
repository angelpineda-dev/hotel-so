import GoogleMapReact from "google-map-react";

const Ubication = () => {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2789335961265!2d-99.88243614948928!3d16.862090822123054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca59cdfdb30f83%3A0xa46d47e59c8b1d6a!2shotel%20suitesordo%C3%B1ez!5e0!3m2!1ses-419!2smx!4v1639950798513!5m2!1ses-419!2smx"
        style={{ width: "100%", height: "50vh", border: "none" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Ubication;
