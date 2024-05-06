import React from "react";

const Header = () => {
  return (
    <div className="bg-[#F6F6F7] py-2 mt-4 flex justify-end">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="flex gap-2 pr-2"
        >
          <p>My Cart</p>
          <p>(1)</p>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2  bg-white w-52 border border-black"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
