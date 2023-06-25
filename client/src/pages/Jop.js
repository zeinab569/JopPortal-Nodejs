import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFrom from "../components/shared/InputFrom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";

const Jops = () => {
  const [company, setCompany] = useState("");
  const [position, setposition] = useState("");
  const [workLocation, setlocation] = useState("");
  const [workType, settype] = useState("");

  //redux state
  const { loading } = useSelector((state) => state.alerts);

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!company || !position || !workLocation || !workType) {
        return toast.error("Please Provide All Fields");
      }
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/job/create-job", {
        company,
        position,
        workLocation,
        workType,
      });
      dispatch(hideLoading());
      if (data.success) {
        toast.success("jop added Successfully");
        navigate("/jops");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Form Details Please Try Agian!");
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <form className="card p-2" onSubmit={handleSubmit}>
            
            <InputFrom
              htmlFor="company"
              labelText={"company"}
              type={"text"}
              value={company}
              handleChange={(e) => setCompany(e.target.value)}
              name="company"
            />
            <InputFrom
              htmlFor="position"
              labelText={"Position"}
              type={"text"}
              value={position}
              handleChange={(e) => setposition(e.target.value)}
              name="position"
            />
            <InputFrom
              htmlFor="location"
              labelText={"location"}
              type={"text"}
              value={workLocation}
              handleChange={(e) => setlocation(e.target.value)}
              name="worklocation"
            />
            <InputFrom
              htmlFor="worktype"
              labelText={"work Type"}
              type={"text"}
              value={workType}
              handleChange={(e) => settype(e.target.value)}
              name="worktype"
            />

            
              <button type="submit" className="btn btn-primary">
                Add Job
              </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Jops;