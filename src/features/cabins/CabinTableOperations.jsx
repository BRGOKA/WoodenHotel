import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", lable: "All" },
          { value: "noDiscount", lable: "No discount" },
          { value: "discount", lable: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
