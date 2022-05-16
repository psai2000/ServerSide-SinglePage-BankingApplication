import React, { useRef, useState } from "react";
import { Button, Heading } from "../../CommonComponents";
import { Popup } from "../../CommonComponents";
import { DropDown } from "../../CommonComponents";
import { validateNarration } from "../../CommonComponents";
import { InputField } from "../../CommonComponents";
import swal from "sweetalert";

const SubmitTransfer = () => {
  const narrationValue = useRef(null);
  const [errorMessage, setMessage] = useState(" ");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [amount, setAmount] = useState("");
  function sweetAlertFunction(event) {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once transfer is made, it cannot be reversed!",
      icon: "warning",
      buttons: ["Cancel", "Submit"],
    }).then((willPay) => {
      if (willPay) {
        swal("Your transfer is successful!", {
          icon: "success",
        });
      } else {
        swal("Your transfer has been cancelled!", {
          icon: "error",
        });
      }
    });
  }

  function filterAmount(e) {
    setAmount(e.target.value.replace(/\D/g, ''));
  }

  const validateOnSubmit=(e)=>{
    e.preventDefault();
    narrationValue==="" && validateNarration(narrationValue);
    sweetAlertFunction(e);
  }

  return (
    <>
      <Button
          buttonType="btn-primary"
          method={(evt) => {
            evt.preventDefault();
            setIsPopupOpen(true);
          }}
        >
          Transfer
      </Button>
     
      {isPopupOpen && <Popup onClose={()=>setIsPopupOpen(false)}>
        <Heading>₹ Submit Transfer</Heading>
        <form onSubmit={validateOnSubmit}>
          <InputField
            className="form-control"
            ref={narrationValue}
            type="text"
            label="Narration"
            placeholder="Narration"
            required
            onBlur={() => setMessage(validateNarration(narrationValue.current.value))}
          />
          <span className="error">{errorMessage}</span>
          <DropDown labelName="Transfer" items={["NEFT", "IMPS"]} />
          <InputField
            className="form-control"
            type="text"
            value={amount}
            label="Amount"
            placeholder="Amount"
            onChange={filterAmount}
            required
          />
          <div className="d-flex flex-row-reverse">
            <Button
              buttonType="btn-secondary m-3"
              type="button"
              method={(evt) => {
                evt.preventDefault();
                setIsPopupOpen(false);
              }}
            >
              Close
            </Button>
            <Button
              buttonType="btn-primary m-3"
              type="submit"
              disabled={errorMessage === "" ? false : true}
            >
              Submit
            </Button>
          </div>
        </form>
      </Popup>}
    </>
  );
};

export default SubmitTransfer;
