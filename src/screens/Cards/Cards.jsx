import React, { useState, useEffect } from "react";
import "./Cards.css";
import { Layout, DropDown, Button, Heading } from "../../CommonComponents";
import cards from "./Cards.png";
import CardMoreDetails from "./CardMoreDetails";


let cardsData;

const Cards = () => {
    let [cardItems, setCardItems] = useState();
    const [selectedCard, setSelectedCard] = useState();

    const handleCard = (evt) => {
        const selectedCard = cardsData.find(
            (card) => evt.target.value === card.number
        );
        setSelectedCard(selectedCard);
    };

    async function loadCards() {
        const response = await fetch("http://localhost:3000/cards");
        cardsData = await response.json();
        cardItems = cardsData.map((card) => card.number);

        setCardItems(cardItems);
        setSelectedCard(cardsData[0]);
    }

    useEffect(() => {
        loadCards();
    }, []);

    return (
        <>
            <Layout>
                <Heading>Credit Cards</Heading>
                <form className="card-body">
                    <img src={cards} className="cards_icon" alt="logo" />
                    {selectedCard && (
                        <>
                            {" "}
                            <p className="card_text">
                                {cardItems && cardItems.length > 0 && (
                                    <DropDown
                                        labelName="Select Card"
                                        method={handleCard}
                                        items={cardItems}
                                    />
                                )}
                                <div className="cards_ctype">Card Type</div>
                                <p className="cards_type">{selectedCard.type}</p>
                                <label>Last Statement Due</label>
                                <p className="cards_inr">{selectedCard.amount} INR</p>
                            </p>
                            <span className="d-flex flex-row justify-content-center align-items-center">
                                <CardMoreDetails selectedCard={selectedCard} />
                                <Button
                                    buttonType="btn-primary disable-button ml-2"
                                    text="Pay Now"
                                    className="cards_submit"
                                    disabled={selectedCard.amount === 0}
                                >
                                    Pay Now
                                </Button>
                            </span>
                        </>
                    )}
                </form>
            </Layout>
        </>
    );
};
export default Cards;


