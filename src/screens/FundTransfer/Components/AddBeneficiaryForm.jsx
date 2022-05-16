import React, { useEffect, useState } from "react";
import "./AddBeneficiaryForm.css";
import { Button } from "../../../CommonComponents";
import { Heading } from "../../../CommonComponents";
import { InputField } from "../../../CommonComponents";
import { checkName, checkAccountNumber, checkIFSCCode } from "./validate";
import { useNavigate } from "react-router-dom";

const AddBeneficiary = () => {
  const navigate = useNavigate();
  const [accountInfo, setAccountInfo] = useState({
    accountNumber: "",
    reAccountNumber: "",
    accountHolderName: "",
    bankName: "",
    ifscCode: "",
    bankRadio: false,
  });
  const [errorInfo, setErrorInfo] = useState({
    errorAccountNumber: "",
    reErrorAccountNumber: "",
    errorAccountName: "",
    errorBankName: "",
    errorIfscCode: "",
  });

  const [formValid, validateForm] = useState(true);

  const validateAccountNumber = () => {
    if (accountInfo.accountNumber.trim() == "") {
      setErrorInfo({
        ...errorInfo,
        errorAccountNumber: "*Please Enter Account Number",
      });
    } else {
      if (accountInfo.accountNumber == accountInfo.reAccountNumber) {
        setErrorInfo({
          ...errorInfo,
          reErrorAccountNumber: "",
          errorAccountNumber: "",
        });
      } else {
        setErrorInfo({
          ...errorInfo,
          reErrorAccountNumber: "*Account Number does not match", errorAccountNumber: ""
        });
      }
    }
  };
  const validateReAccountNumber = () => {
    if (accountInfo.reAccountNumber.trim() == "") {
      setErrorInfo({
        ...errorInfo,
        reErrorAccountNumber: "*Please Re Enter Account Number",
      });
    } else if (
      accountInfo.reAccountNumber.trim() !== "" &&
      accountInfo.accountNumber.trim() == ""
    ) {
      setErrorInfo({
        ...errorInfo,
        errorAccountNumber: "*Please Enter Account Number",
      });
    } else if (accountInfo.accountNumber !== accountInfo.reAccountNumber) {
      setErrorInfo({
        ...errorInfo,
        reErrorAccountNumber: "*Account Number does not match",
      });
    } else setErrorInfo({ ...errorInfo, reErrorAccountNumber: "" });
  };
  const validateFormOnSubmit = (e) => {
    e.preventDefault();
    accountInfo.ifscCode === "" && validateIFSCCode();
    accountInfo.bankName === "" && validateBankName();
    accountInfo.accountHolderName === "" && validateAccountName();
    accountInfo.reAccountNumber === "" && validateReAccountNumber();
    accountInfo.accountNumber === "" && validateAccountNumber();
  };
  const validateAccountName = () => {
    const letters = /^[a-zA-Z]+$/;
    if (
      accountInfo.accountHolderName.trim() == "" ||
      !accountInfo.accountHolderName.match(letters)
    )
      setErrorInfo({
        ...errorInfo,
        errorAccountName: "*Please enter valid name",
      });
    else setErrorInfo({ ...errorInfo, errorAccountName: "" });
  };

  const validateBankName = () => {
    const letters = /^[a-zA-Z]+$/;
    if (
      accountInfo.bankName.trim() == "" ||
      !accountInfo.bankName.match(letters)
    )
      setErrorInfo({
        ...errorInfo,
        errorBankName: "*Please enter valid Bank Name",
      });
    else setErrorInfo({ ...errorInfo, errorBankName: "" });
  };
  const validateIFSCCode = () => {
    const ifsc = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (accountInfo.ifscCode.trim() == "" || !accountInfo.ifscCode.match(ifsc))
      setErrorInfo({
        ...errorInfo,
        errorIfscCode: "*Please enter valid IFSC Code",
      });
    else setErrorInfo({ ...errorInfo, errorIfscCode: "" });
  };

  useEffect(() => {
    validateForm(
      !(
        checkAccountNumber(
          accountInfo.accountNumber,
          accountInfo.reAccountNumber
        ) &&
        accountInfo.bankRadio &&
        checkName(accountInfo.accountHolderName) &&
        checkName(accountInfo.bankName) &&
        checkIFSCCode(accountInfo.ifscCode)
      )
    );
  }, [
    accountInfo.bankRadio,
    accountInfo.accountNumber,
    accountInfo.reAccountNumber,
    accountInfo.bankName,
    accountInfo.ifscCode,
    accountInfo.accountHolderName,
  ]);
  return (
    <div className="addbeneficiary">
      <Heading>Add Beneficiary</Heading>
      <hr />
      <form id="add-beneficiary-form" onSubmit={validateFormOnSubmit}>
        <div class="row ml-1">
          <label>
            Select Bank Mode<span class="add-beneficiary-star">*</span>
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="bankRadio"
            className="form-check-input"
            onChange={(event) =>
              setAccountInfo({ ...accountInfo, bankRadio: true })
            }
            required
            
          />
          <label className="form-check-label">
            <b>Within Bank</b>
          </label>
          <input
            type="radio"
            name="bankRadio"
            className="addbeneficiary__form-radio"
            onChange={(event) =>
              setAccountInfo({ ...accountInfo, bankRadio: true })
            }
            
            
          />
          <label className="form-check-label addbeneficiary__radiolabel">
            <b>Other Bank</b>
          </label>
        </div>
        <div className="row mt-2 ml-1">
          <label>
            Beneficiary Account Number
            <span className="addbeneficiary__star">*</span>
          </label>
          <span className="text-danger font-weight-bold"></span>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-2">
            <InputField
              type="number"
              className="form-control"
              placeholder="Enter Account Number"
              onChange={(event) =>
                setAccountInfo({
                  ...accountInfo,
                  accountNumber: event.target.value,
                })
              }
              onKeyUp={validateAccountNumber}
              
            />
            <span className="addbeneficiary__errorlabel">
              {errorInfo.errorAccountNumber}
            </span>
          </div>
          <div className="col-md-3">
            <InputField
              type="number"
              className="form-control"
              placeholder="Re Enter Account Number"
              onChange={(event) =>
                setAccountInfo({
                  ...accountInfo,
                  reAccountNumber: event.target.value,
                })
              }
              onKeyUp={validateReAccountNumber}
              
            />
            <span className="addbeneficiary__errorlabel">
              {errorInfo.reErrorAccountNumber}
            </span>
          </div>
          <div className="row mt-2 ml-2">
            <span className="addbeneficiary__errorlabel"></span>
          </div>
        </div>
        <div className="row mt-2 ml-1">
          <label>
            Beneficiary Details<span className="addbeneficiary__star">*</span>
          </label>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-2">
            <InputField
              type="text "
              className="form-control"
              placeholder="Enter Account Holder Name"
              onChange={(event) =>
                setAccountInfo({
                  ...accountInfo,
                  accountHolderName: event.target.value,
                })
              }
              onBlur={validateAccountName}
              
            />
            <span className="addbeneficiary__errorlabel">
              {errorInfo.errorAccountName}
            </span>
          </div>
          <div className="col-md-3 mb-2">
            <InputField
              type="text"
              className="form-control"
              placeholder="Enter Bank Name"
              onChange={(event) =>
                setAccountInfo({ ...accountInfo, bankName: event.target.value })
              }
              onBlur={validateBankName}
              
            />
            <span className="addbeneficiary__errorlabel">
              {errorInfo.errorBankName}
            </span>
          </div>
          <div className=" col-md-3 ">
            <InputField
              type="text"
              className="form-control"
              placeholder="Type IFSC Code "
              onChange={(event) =>
                setAccountInfo({ ...accountInfo, ifscCode: event.target.value })
              }
              onBlur={validateIFSCCode}
              
            />
            <span className="addbeneficiary__errorlabel">
              {errorInfo.errorIfscCode}
            </span>
          </div>
        </div>
        <div className="row mt-2 ml-1">
          <label>Upload Beneficiary Avatar</label>
        </div>
        <div className="custom-file col-md-4 ">
          <InputField type="file" className="custom-file-input" />
          <label className="custom-file-label" data-browse="Browse"></label>
        </div>
        <div className="form-row row mt-5 justify-content-center">
          <div className="col-md-3 mb-2">
            <Button
              type="button"
              buttonType="btn-outline-primary form-control"
              method={() => navigate("/fundTransfer")}
            >
              Cancel
            </Button>
          </div>
          <div className="col-md-3 ">
            <Button
              buttonType="btn-primary form-control addbeneficiary__savebtn"
              disabled={formValid}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBeneficiary;
