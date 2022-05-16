import React from "react";
import { useEffect, useState } from "react";
import { Button, Popup } from "../../CommonComponents";
import TransBody from "../Transactions/Components/TransBody"

const CardMoreDetails = ({ selectedCard }) => {

    const [cardTransactions, setCardTransactions] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    async function loadTransactionData() {
        const response = await fetch("http://localhost:3000/transactions");
        const transactions = await response.json();
        const cdTransactions = transactions.filter((transaction) => transaction.card_number === selectedCard.number)
        console.log(selectedCard);
        setCardTransactions(cdTransactions);
    }

    useEffect(() => {
        loadTransactionData();
    }, [selectedCard]);

    return (<>
        <Button
            buttonType=" btn-outline-primary mr-5"
            className="cards_detail"
            method={(evt) => { evt.preventDefault(); setIsPopupOpen(true) }}
        >
            More Details
        </Button>
        {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Narration</th>
                        <th scope="col"></th>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Closing Balance</th>
                    </tr>
                </thead>
                {cardTransactions && cardTransactions.map(transaction => <TransBody{...transaction} />)}
            </table>
        </Popup>}
    </>
    );

};

export default CardMoreDetails;
