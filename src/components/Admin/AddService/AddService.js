import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AddService = () => {
  const [imageUrl, setImageURL] = useState([]);
  const handelUploadImage = (event) => {
    const imgData = new FormData();
    imgData.set("key", "388402b7293968f54d1c937d57919092");
    imgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const Services = {
      tittle: data.tittle,
      price: data.price,
      age: data.age,
      classes: data.classes,
      imageUrl: imageUrl,
    };

    const url = `https://lit-plateau-42557.herokuapp.com/addService`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Services),
    }).then((res) => console.log("server res successfully", res));
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <h2>Add Services</h2>
          <div className="">
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <input
                  className="form-control w-50"
                  placeholder="tittle"
                  {...register("tittle")}
                />
              </div>
              <div className="">
                <input
                  onChange={handelUploadImage}
                  className="form-control w-50"
                  type="file"
                />
              </div>
              <div className="">
                <input
                  className="form-control w-50"
                  placeholder="age"
                  {...register("age")}
                />
              </div>
              <div className="">
                <input
                  className="form-control w-50"
                  placeholder="class"
                  {...register("classes")}
                />
              </div>
              <div className="">
                <input
                  className="form-control w-50"
                  placeholder="price"
                  {...register("price")}
                />
              </div>

              <div className="">
                <input className="btn btn-primary" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
