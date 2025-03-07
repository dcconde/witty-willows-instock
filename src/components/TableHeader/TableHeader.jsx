import "./TableHeader.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

function TableHeader({ headerItems }) {
  return (
    <section className="table-header">
      {headerItems.map((header, index) => (
        <div key={index} className="table-header__item">
          <h4 className="table-header__title">{header}</h4>
          {header !== "Actions" && (
            <img
              className="table-header__sort-icon"
              src={sortIcon}
              alt="sort icon"
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default TableHeader;
