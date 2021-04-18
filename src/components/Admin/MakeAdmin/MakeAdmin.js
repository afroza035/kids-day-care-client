import React from "react";
import { useForm } from "react-hook-form";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch("https://lit-plateau-42557.herokuapp.com/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("server res successfully", res);
      alert("add a new Admin");
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <h2>Make Admin</h2>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <input
                  className="form-control w-50"
                  placeholder="email"
                  {...register("email")}
                />
              </div>

              <input className="btn btn-primary mt-3" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
