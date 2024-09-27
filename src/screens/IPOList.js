import React from "react";
import { IPO_Data } from "../utilities/constant";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AppliedIPOListing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center overflow-hidden">
      <Header />
      <div className="p-6 h-[calc(100%-80px)] w-full">
        <div className="border border-gray-300 rounded mx-auto overflow-auto w-full max-w-4xl h-full min-w-screen text-nowrap whitespace-nowrap">
          <table className="w-full border-collapse h-full rounded overflow-clip">
            <thead className="rounded-t cursor-default overflow-clip bg-gray-100 sticky z-10 top-0">
              <tr>
                <th className="text-left px-4 py-4 font-medium text-xs text-neutral-500">
                  Company / Issue date
                </th>
                <th className="text-left px-4 py-4 font-medium text-xs text-neutral-500">
                  Issue size
                </th>
                <th className="text-left px-4 py-4 font-medium text-xs text-neutral-500">
                  Price range
                </th>
                <th className="text-left px-4 py-4 font-medium text-xs text-neutral-500">
                  Min invest/qty
                </th>
              </tr>
            </thead>
            <tbody>
              {IPO_Data.map((ipo, index) => (
                <tr
                  key={index}
                  className="border-b group/item cursor-pointer relative last:border-b-0 bg-white hover:bg-gray-100"
                  onClick={() => navigate(`/${ipo.id}`)}
                >
                  <td className="px-4 py-4 flex items-center">
                    <img
                      src={ipo.logo}
                      alt={ipo.company}
                      className="h-8 w-8 mr-2 rounded-full border border-neutral-400"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">
                        {ipo.company}
                      </div>
                      <div className="text-gray-500 text-xs">{ipo.date}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-indigo-950 font-semibold text-sm">
                    {ipo.issueSize}
                  </td>
                  <td className="px-4 py-4 text-indigo-950 font-semibold text-sm">
                    {ipo.priceRange}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-indigo-950 font-semibold text-sm">
                      {ipo.minInvest}
                    </div>
                    <div className="text-gray-500 text-xs">{ipo.quantity}</div>
                  </td>
                  <td className="invisible absolute z-10 right-0 group-hover/item:visible p-4">
                    <div className="flex items-center justify-center h-8 w-8 text-indigo-700 bg-white text-xl p-2 rounded border">&#x279C;</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedIPOListing;
