import React from "react";
import { services } from "@/datadeneme2";
import ServiceCard from "@/components/ServiceCarddeneme2";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        provident quaerat repudiandae reprehenderit officiis voluptatum natus
        ipsa aut voluptates perspiciatis.
      </h5>
      <div className="p-4 mt-5 bg-gray-400">
        <h6>What I Offer</h6>
        <div className="grid ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
