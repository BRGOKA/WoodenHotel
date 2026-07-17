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
          { value: "default", lable: "Default" },
          { value: "name-asc", lable: "Sort by name (A-Z)" },
          { value: "name-desc", lable: "Sort by name (Z-A)" },
          { value: "Capacity-asc", lable: "Sort by Capacity (high-low)" },
          { value: "Capacity-desc", lable: "Sort by Capacity (low-high)" },
          { value: "Price-asc", lable: "Sort by Price (high-low)" },
          { value: "Price-desc", lable: "Sort by Price (low-high)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
