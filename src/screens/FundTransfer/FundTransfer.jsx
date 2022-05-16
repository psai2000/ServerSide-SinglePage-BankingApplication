import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "../../CommonComponents";
import "./FundTransfer.css";
import { InputField } from "../../CommonComponents";
import { FundColumn, FundBody } from "./Components";
import Pagination from "../../CommonComponents/Pagination/Pagination";
import { Heading } from "../../CommonComponents";

const FundTransfer = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState("");
  const [benificaries, setBenificiaries] = useState([]);
  const [benificariesFilter, setBenificiariesFilter] = useState([]);
  const [direction, setDirection] = useState({
    nameDirection: 1,
    bankNameDirection: 1,
    cityDirection: 1,
    IFSCDirection: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  async function loadBeneficiariesData() {
    try {
      const response = await fetch("http://localhost:3000/fund-transfer");
      const beneficiaries1 = await response.json();
      setBenificiaries(beneficiaries1);
      setBenificiariesFilter(beneficiaries1);
      const totalBeneficiaries = beneficiaries1.length;
      setTotal("Total " + totalBeneficiaries + " Beneficiaries");
    } catch (error) {
      console.log(error);
    }
  }

  const [query, setQuery] = useState("");
  const searchBenificary = (value) => {
    const filterdArray = benificaries.filter((b) => {
      return (
        b.name.toLowerCase().includes(value.toLowerCase()) ||
        b.bankName.toLowerCase().includes(value.toLowerCase()) ||
        b.place.toLowerCase().includes(value.toLowerCase()) ||
        b.bankIFSC.toLowerCase().includes(value.toLowerCase())
      );
    });
    setBenificiariesFilter(filterdArray);
    setTotal("Total " + filterdArray.length + " Beneficiaries");
  };
  const handleSort = (field, direction = 1) => {
    const sortedArray = benificariesFilter.sort((a, b) => {
      const one = direction === 1 ? a[field] > b[field] : a[field] < b[field];
      const two = direction === 1 ? a[field] < b[field] : a[field] > b[field];

      if (one) return 1;
      if (two) return -1;
      return 0;
    });
    setBenificiaries([...sortedArray]);
    setBenificiariesFilter([...sortedArray]);
  };

  useEffect(() => {
    loadBeneficiariesData();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = benificariesFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className="fund ml-2 mt-2">
      <div
        className="table-responsive{-sm|-md|-lg|-xl}
        bg-white shadow pr-4 pl-4 pt-4"
        id="benificiary-table"
      >
        <Heading>Fund Transfer</Heading>
        <hr className="fund__line"></hr>

        <div>
          <div className="fund__totalBeneficiaries">{total}</div>
          <div className="form-group fund__component d-flex flex-row ">
            <Button
              buttonType="fund__btn btn-outline-primary btn-block mb-2 form-control py-1 px-2 mr-1 pb-2 mt-1"
              method={() => navigate("/addBeneficiaryForm")}
            >
              Add Beneficiary
            </Button>
            <InputField
              type="text"
              placeholder="Beneficiary's name"
              className="form-control mt-1 fund__searchbar"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                searchBenificary(e.target.value);
              }}
            />
          </div>
        </div>
        <table className="table table-hover w-100">
          <FundColumn
            handleSort={handleSort}
            direction={direction}
            setDirection={setDirection}
          />
          {currentPosts.map((beneficiary, i) => {
            return <FundBody {...beneficiary} key={i} />;
          })}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={benificariesFilter.length}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
        </table>
      </div>
    </div>
  );
};
export default FundTransfer;
