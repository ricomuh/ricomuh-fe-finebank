import Card from "../components/Elements/Card";
import { Icon } from "../components/Elements/Icon";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import MainLayout from "../components/Layouts/MainLayout";
// import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transaction";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];

  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));

  const transactionCard = transactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <CardBill />
        <Card
          variant="md:col-span-1 md:row-span-2"
          title="Recent Transaction"
          desc={
            <div>
              <div className="mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className="me-4 text-gray-02"
                    type="button"
                    value={tab}
                  />
                ))}
              </div>
              {transactionCard}
            </div>
          }
        />
        {/* <Card variant="md:col-span-2" title="Statistics" /> */}
        <CardStatistic />
        <Card
          variant="md:col-span-2"
          title="Expenses Breakdown"
          desc={
            <div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>
          }
        />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
