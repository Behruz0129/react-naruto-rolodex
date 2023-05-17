import "./card.styles.css";

const Card = ({ data, className }) => {
  const { character, voice_actors } = data;
  return (
    <div className={className} key={character.mal_id}>
      <img
        className="character-img"
        src={character.images.webp.image_url}
        alt="anime character"
      />
      <h2>{character.name}</h2>
      <h3>Ovoz Berdi:</h3>
      <ul className="voice-actors">
        {voice_actors.map(
          (item) =>
            (item.language === "English" || item.language === "Japanese") && (
              <li key={item.person.mal_id}>
                <div className="left">
                  <img
                    className="v-actor-img"
                    src={item.person.images.jpg.image_url}
                    alt="voice actor"
                  />
                </div>

                <div className="right">
                  <h4>{item.person.name}</h4>
                  <p>{item.language}</p>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Card;
