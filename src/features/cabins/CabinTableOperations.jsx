import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
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
      <SortBy
        options={[
          { value: "name-asc", lable: "Sort by name (A-Z)" },
          { value: "name-desc", lable: "Sort by name (Z-A)" },
          { value: "maxCapacity-asc", lable: "Sort by Capacity (low-high)" },
          { value: "maxCapacity-desc", lable: "Sort by Capacity (high-low)" },
          { value: "regularPrice-asc", lable: "Sort by Price (low-high)" },
          { value: "regularPrice-desc", lable: "Sort by Price (high-low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
