import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/authProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:8081/orders?email=${user?.email}`;
  const { data: order = [] } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="bg-white text-gray-800 font-bold w-full p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Orders</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* head */}
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">No.</th>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.map((odr, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="border px-6 py-4">{i + 1}</td>
                  <td className="border px-6 py-4">{odr.OrderID}</td>
                  <td className="border px-6 py-4">{odr.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
