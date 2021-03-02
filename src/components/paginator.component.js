import _ from "lodash";

const Paginator = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  //determine total pages with given props and rounding to high integer
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //if pages required is only 1 remove pagination
  if (pagesCount === 1) return null;
  //creating array from start to end of given pagesCount
  const pagesArray = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pagesArray.map((page) => {
          return (
            <li
              //setting active class dynamically
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
              //passing page number
              onClick={() => onPageChange(page)}
            >
              <a href="#page" className="page-link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginator;
