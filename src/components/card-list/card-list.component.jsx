import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ characters }) => {
  return (
    <div className="card-list">
      {characters.map((item) => {
        return (
          <Card className="card" data={item} key={item.character.mal_id} />
        );
      })}
    </div>
  );
};

export default CardList;
