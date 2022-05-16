import { useRef, useState } from "react";
import { Layout, Button, Heading } from "../../CommonComponents";
import { InputField } from "../../CommonComponents";
import "./BillAndRecharge.css";
import { validateNarration } from "../../CommonComponents";
import bills from "./Bills.png";
import swal from "sweetalert";

export const BillAndRecharge = () => {
  const narrationValue = useRef(null);
  const [errorMessage, setMessage] = useState(" ");
  const [amount, setAmount] = useState("");
  function showSweetAlertMessage(event) {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once Payment is made, it cannot be reversed!",
      icon: "warning",
      buttons: ["Cancel", "Pay Now"],
    }).then((willPay) => {
      if (willPay) {
        swal("Your payment is successful!", {
          icon: "success",
        })
      } else {
        swal("Your payment has been cancelled!", {
          icon: "error",
        });
      }
    });
  }

  const validateOnSubmit = (e) => {
    e.preventDefault();
    narrationValue === "" && validateNarration(narrationValue);
    showSweetAlertMessage(e);
  }

  function filterAmount(e) {
    setAmount(e.target.value.replace(/\D/g, ''));
  }

  return (
    <Layout>
      <Heading>Bills & Recharge</Heading>
      <img src={bills} className="bills__icon" alt="logo" />
      <form className="bill-recharge__form" onSubmit={validateOnSubmit}>
        <InputField
          className="form-control bill-recharge__input"
          type="text"
          ref={narrationValue}
          label="Narration"
          placeholder="Narration"
          onBlur={() => setMessage(validateNarration(narrationValue.current.value))}
          required
        />
        <span className="error">{errorMessage}</span>
        <InputField
          className="form-control bill-recharge__input"
          type="text"
          value={amount}
          label="Amount"
          placeholder="Amount"
          onChange={filterAmount}
          required
        />
        <div className="d-flex justify-content-center bills-recharge__paynow">
          <Button
            buttonType="btn-primary mt-4"
            disabled={errorMessage === "" ? false : true}
            type="submit"
          >Pay now</Button>
        </div>
      </form>
    </Layout>
  );
};
