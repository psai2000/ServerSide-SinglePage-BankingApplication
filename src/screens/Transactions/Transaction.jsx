import React from "react";
import { useEffect, useState } from "react";
import "./Transaction.css";
import { TransBody, TransRow } from "./Components";
import { InputField } from "../../CommonComponents";
import Pagination from "../../CommonComponents/Pagination/Pagination";
import { Heading } from "../../CommonComponents";

const Transaction = () => {
  const [transaction, setTransactions] = useState([]);
  const [transactionFilter, setTransactionsFilter] = useState([]);
  const [direction, setDirection] = useState({
    nameDirection: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  async function loadTransactionData() {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      const transaction = await response.json();
      setTransactions(transaction);
      setTransactionsFilter(transaction);
    } catch (error) {
      console.log(error);
    }
  }
  const [query, setQuery] = useState("");
  const searchBenificary = (value) => {
    const filterdArray = transaction.filter((b) => {
      return (
        b.name.toLowerCase().includes(value.toLowerCase()) ||
        b.type.toLowerCase().includes(value.toLowerCase()) ||
        b.date.toLowerCase().includes(value.toLowerCase())
      );
    });
    setTransactionsFilter(filterdArray);
  };
  const handleSort = (field, direction = 1) => {
    const sortedArray = transactionFilter.sort((a, b) => {
      const one = direction === 1 ? a[field] > b[field] : a[field] < b[field];
      const two = direction === 1 ? a[field] < b[field] : a[field] > b[field];

      if (one) return 1;
      if (two) return -1;
      return 0;
    });
    setTransactions([...sortedArray]);
    setTransactionsFilter([...sortedArray]);
  };
  useEffect(() => {
    loadTransactionData();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = transactionFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  return (
    <div className="table-responsive bg-white shadow pr-4 pl-4 ml-2 mt-2" id="transaction-table">
      <table className="table table-hover transaction transaction-table-table w-100 " id="add-table">
        <thead className="bg-white transaction__header">
          <tr>
            <th scope="row" colSpan="5">
              <Heading>Last Transactions</Heading>
              <div className="form-group">
                <InputField
                  type="text"
                  className="form-control transaction__header--search"
                  placeholder="Filter by date and type"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    searchBenificary(e.target.value);
                  }}
                />
              </div>
            </th>
          </tr>
          <TransRow
            handleSort={handleSort}
            direction={direction}
            setDirection={setDirection}
          />
        </thead>
        {currentPosts.map((transaction, i) => {
          return <TransBody {...transaction} key={i} />;
        })}
        <div className="transaction__pagination">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={transactionFilter.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </table>
    </div>
  );
};

export default Transaction;
