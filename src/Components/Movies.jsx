import Movie from "./Movie";

const Movies = () => {
  return (
    <div className="Movies">
      <h2 className="movierowheader">Acara TV Bingeworthy</h2>
      <div className="Movieslide flex">
        <Movie src="/alice in borderland.jpeg" alt="alice-in-borderland" />
        <Movie src="/squid game.jpeg" alt="squid game" />
        <Movie src="/wednesday.webp" alt="wednesday" />
        <Movie src="/spy x family.jpeg" alt="spy x family" />
      </div>
    </div>
  );
};

export default Movies;
