import "./TableHeader.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

function TableHeader({ headerItems, itemName }) {
  return (
    <section className="table-header">
      {headerItems.map((header, index) => (
        <div key={index} className={itemName}>
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
