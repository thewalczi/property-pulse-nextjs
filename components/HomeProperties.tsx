import React from "react";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const HomeProperties = async () => {
  await connectDB();
  const properties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:containerm-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent properties
          </h2>
          {recentProperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white px-6 py-4 rounded-xl text-center hover:bg-blue-600 hover:bg-gray-700"
        >
          View all properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
