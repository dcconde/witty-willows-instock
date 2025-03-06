import "./StatusTags.scss";

function StatusTags({ status }) {
  const isInStock = status === "In Stock";

  return (
    <p className={`status-tag ${isInStock ? "in-stock" : "out-of-stock"}`}>
      {status}
    </p>
  );
}

export default StatusTags;
