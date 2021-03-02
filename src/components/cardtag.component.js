import "../css/cardtag.css";

const CardTag = (props) => {
  const { datas } = props;
  return datas.map((data, idx) => {
    return (
      <ul key={idx} className="card_ul">
        <li className="header">{data.header}</li>
        <li className="desc">{data.description}</li>
        <div className="card_footer">
          <li className="user">{data.user}</li>
          <li className="vote">{data.vote}</li>
        </div>
      </ul>
    );
  });
};

export default CardTag;
