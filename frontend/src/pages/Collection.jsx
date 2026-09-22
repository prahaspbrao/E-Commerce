import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex flex-center cursor-pointer gap-2">
          FILTERS
          <img src="" alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Men"}
              />{" "}
              Men
            </p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Women"}
              />{" "}
              Women
            </p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
      

      {/* SubCategory Filter */}
      <div  className="min-w-60">
        <div
        className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
      >
        <p className="mb-3 text-sm font-medium">TYPE</p>

        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              value={"Topwear"}
            />{" "}
            Topwear
          </p>

          <p className="flex gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              value={"Bottomwear"}
            />{" "}
            Bottomwear
          </p>

          <p className="flex gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              value={"Winterwear"}
            />{" "}
            Winterwear
          </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Collection;
