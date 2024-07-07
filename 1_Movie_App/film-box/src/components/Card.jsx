const Card = ({ t }) => {
  return (
    <div className="min-w-[210px] bg-[#1e1e1e] p-2 rounded-[4px] mb-2">
      <img
        className="w-full h-[140px] object-cover rounded-[2px]"
        src={`https://image.tmdb.org/t/p/original/${
          t.backdrop_path || t.poster_path
        }`}
        alt=""
      />

      <h1 className="text-[1rem] shadow-lg font-extrabold mt-2">
        {t.name || t.title || t.original_name || t.original_title}
      </h1>
      <p className="text-[12px] text-secondary/60 shadow-lg mt-2">
        {t.overview.slice(0, 80)} <span className="text-zinc-600">more...</span>
      </p>
    </div>
  );
};

export default Card;