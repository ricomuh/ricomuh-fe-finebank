import { expensesStatistics } from "../../../data/expense";
import Card from "../../Elements/Card";
import Barchart from "../../Elements/Barchart";

const CardStatistic = () => {
  //   const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (
  //     <div key={expensesStatistic.id}>{expensesStatistic.date}</div>
  //   ));

  return (
    <Card
      variant="md:col-span-2 min-h-max"
      title="Statistics"
      desc={
        <div className="h-72">
          <select
            name=""
            id=""
            className="font-bold text-lg ring-0 focus:outline-none bg-transparent"
          >
            <option value="">Weekly Comparison</option>
          </select>
          <Barchart desc={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;
