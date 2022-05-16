import React, { useEffect, useState } from "react";

const TransactionApi = {
  getAllTransaction(url) {
    return fetch(url);
  },
};
const Transactions = (props) => {
  const [state, setState] = useState({
    error: null,
    transaction: [],
  });

  useEffect(() => {
    TransactionApi.getAllTransaction("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((transaction) => {
        setState((prevState) => ({ ...prevState,transaction: prevState.todos.concat(transaction),transaction: []}));
      })
      .catch((err) => {
        setState((prevState) => ({ ...prevState, error: err }));
      });
  }, []);
  const { error, transaction } = state;
  if (error) {
    return <Error error={error} />;
  } else {
    return <TransactionList transaction={transaction} />;
  }
};
const TransactionList = (props) => {
  const { transaction } = props;
  return (
    <ul>
        <li key={index}>
          <span>{transaction.name}</span>
          <span>{transaction.bankName}</span>
          <span>{transaction.ref}</span>
          <span>{transaction.date}</span>
          <span>{transaction.type}</span>
          <span>{transaction.dueAmount}</span>
        </li>
    </ul>
  );
};
const Error = (props) => {
  return (
    <>
      <h2>{props.error}</h2>
    </>
  );
};

export const SendBillRequest = (props) => (
  <div>
    <Transactions />
  </div>
);
