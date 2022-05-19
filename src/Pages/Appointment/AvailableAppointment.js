import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import Service from "./Service";
import Loading from "../Shared/Loading"

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] =useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data:services, isLoading, refetch} = useQuery(["available", formattedDate],()=>
      fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then(res=>res.json())
    )
    if(isLoading){
      return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
  return (
    <div className="py-12 md:px-12 lg:px-24 space-y-4 md:space-y-16">
      <div className="text-center">
        <h4 className=" text-secondary text-xl font-medium">
          Available Services on {format(date, "PP")}
        </h4>
        <p>Please select a service.</p>
      </div>
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5">
            {
                services.map(service => <Service key={service._id} 
                service={service}
                setTreatment={setTreatment}
                >    
                </Service>)
            }
      </div>
      {
          treatment && <BookingModal 
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
          ></BookingModal>
      }
    </div>
  );
};

export default AvailableAppointment;
