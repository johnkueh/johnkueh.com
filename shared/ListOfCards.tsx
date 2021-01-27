import Link from "next/link";
import Card from "./Card";

const ListOfCards = ({ cards }) => {
  return (
    <div>
      {cards.map(({ id, title, caption, href }) => {
        return (
          <Link key={id} href={href}>
            <a>
              <Card title={title} caption={caption} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ListOfCards;
