import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={["all", "noDiscount", "discount"]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
