/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IPO_Data, IPO_DETAILS } from "../utilities/constant";
import FileDownload from "../assets/file_download.png";
import { useNavigate, useParams } from "react-router-dom";

const IPODetails = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    const ipoDetails = IPO_Data.filter((ipo) => ipo.id === params.id)?.[0];
    console.log(ipoDetails);
    setData({ company: ipoDetails, ...IPO_DETAILS });
  }, []);

  if (data === null) {
    return <div className=""></div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6 relative">
      {/* Breadcrumb */}
      <div className="flex items-center justify-start gap-3">
        <div
          className="text-xs font-medium text-gray-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div className="text-xs font-medium text-gray-400">&#x276F;</div>
        <div className="text-xs font-medium text-gray-400">Market Watch</div>
      </div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div
            className="flex h-10 w-10 mr-3 cursor-pointer rounded-xl bg-white border border-gray-200 text-xl text-gray-600 items-center justify-center"
            onClick={() => navigate("/")}
          >
            &#x276E;
          </div>
          <img
            src={data.company.logo}
            alt="Company Logo"
            className="h-14 w-14 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{data.company.name}</h1>
            <p className="text-gray-500">{data.company.full_name}</p>
          </div>
        </div>
        <div className="flex items-center z-10 justify-center space-x-6 lg:relative lg:shadow-none lg:bg-transparent  fixed left-0 right-0 bottom-0 py-4 px-6 lg:p-0 bg-white shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] w-full lg:w-fit">
          <img
            src={FileDownload}
            alt="Download"
            className="h-10 cursor-pointer w-10"
            onClick={() => alert("Downloading...")}
          />
          <button
            className="bg-indigo-950 text-white py-3 px-6 w-full lg:w-fit rounded-2xl border-none focus:outline-none hover:bg-indigo-900"
            onClick={() => alert("Applying for the IPO ...")}
          >
            Apply now
          </button>
        </div>
      </div>

      {/* IPO Details Container*/}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold mb-4">IPO details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl border border-gray-200 p-6">
          <DisplayData label={"Issue size"} value={data.ipoDetails.issueSize} />
          <DisplayData
            label={"Price range"}
            value={data.ipoDetails.priceRange}
          />
          <DisplayData
            label={"Minimum amount"}
            value={data.ipoDetails.minAmount}
          />
          <DisplayData
            label={"Issue dates"}
            value={data.ipoDetails.issueDates}
          />
          <DisplayData label={"Listed on"} value={data.ipoDetails.listedOn} />
          <DisplayData
            label={"Listed price"}
            value={data.ipoDetails.listedPrice}
          />
          <DisplayData label={"Lot size"} value={data.ipoDetails.lotSize} />
          <DisplayData
            label={"Listing gains"}
            value={
              <>
                {data.ipoDetails.listingGains.value} (
                <span className="text-red-600">
                  {data.ipoDetails.listingGains.percentage}
                </span>
                )
              </>
            }
            valueClassName="text-red-600"
          />
        </div>
      </div>

      {/* IPO Timeline */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold mb-4">IPO timeline</h2>
        <ShowTimeLine timelineData={data.ipoTimeline} />
      </div>

      {/* About the Company */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-bold mb-4">About the company</h2>
        <p className="text-gray-500 text-sm">{data.company?.description}</p>
      </div>
    </div>
  );
};

const DisplayData = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-bold text-indigo-950">{value}</p>
    </div>
  );
};

const ShowTimeLine = ({ timelineData }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {timelineData.map((item, index) => (
        <div className="h-20 lg:h-fit relative z-0 lg:w-1/6">
          <div
            key={index}
            className="flex lg:flex-col items-start lg:items-center gap-2 relative text-center"
          >
            <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
              &#10003;
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-base font-bold text-indigo-950 leading-6">
                {item.label}
              </p>
              <p className="text-xs font-medium text-gray-400 tracking-wide">
                {item.date}
              </p>
            </div>
          </div>
          <div
            className={`h-full lg:h-[1px] lg:w-full -z-10 absolute top-0 lg:top-4 lg:left-1/2 left-4 bg-green-500 w-[1px] ${
              index + 1 === timelineData.length && "hidden"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default IPODetails;
