import React from "react";

const ProductListEmptyStage = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hidden last:table-row">
      <td className="px-6 py-4 text-center " colSpan={5}>
        There is no product
      </td>
    </tr>
  );
};

export default ProductListEmptyStage;
