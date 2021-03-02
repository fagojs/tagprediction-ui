const PredictTag = (props) => {
  const { tags, input } = props;
  return (
    <div>
      {
        <div className="dash_predict">
          <h3>Predicted-Tag:</h3>
          <div className="tags_container">
            {tags.map((tag, idx) => {
              return (
                <ul className="predict_ul">
                  <li key={idx} className="tag-item">
                    {tag}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default PredictTag;
