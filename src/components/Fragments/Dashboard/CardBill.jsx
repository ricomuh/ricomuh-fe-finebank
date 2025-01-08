import { useEffect, useState } from "react";
import Card from "../../Elements/Card";
// import bills from "../../../data/bills";

const token = localStorage.getItem("refreshToken");

const CardBill = () => {
  const [bills, setBills] = useState();

  const getBills = async () => {
    try {
      const response = await fetch(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = await response.json();
      console.log(data);
      setBills(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBills();
  }, []);

  return (
    <Card
      title="Upcoming Bill"
      desc={
        !!bills ? (
          <div className="h-full flex flex-col justify-around">
            {bills.map((bill) => (
              <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                  </div>
                  <div className="">
                    <img className="h-6" src={`/images/${bill.logo}`} alt="" />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">
                      Last Charge - {bill.lastCharge}
                    </span>
                  </div>
                </div>
                <div className="flex place-content-center flex-col">
                  <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            {/* loading animation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>

            <span>Loading</span>
          </div>
        )
      }
    />
  );
};

export default CardBill;
