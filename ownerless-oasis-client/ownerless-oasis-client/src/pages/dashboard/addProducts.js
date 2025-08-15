import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const imageHostKey = "923e6d07a9e12eb3a0f083c30cbac37d";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("categories", async () => {
    const res = await fetch("http://localhost:8081/category");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddProduct = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=3d70c57041b059f58c779e2fd7509ada`;

    try {
      const imgResponse = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!imgResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imgData = await imgResponse.json();

      if (!selectedCategory) {
        // Display error message to the user
        console.error("Please select a category.");
        return; // Prevent form submission
      }

      const product = {
        ProductName: data.name,
        StockStatus: "In Stock", // Assuming this is a default value
        Quantity: data.quantity, // Assuming this is provided in the form
        Barcode: data.barcode,
        Img: imgData.data.url,
        Price: data.price,
        PCategoryID: selectedCategory.PCategoryID, // Use CategoryID from the selected category
      };

      const productResponse = await fetch("http://localhost:8081/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const responseData = await productResponse.json();
      console.log(responseData);

      if (!productResponse.ok) {
        throw new Error("Failed to add product");
      }

      navigate("/products"); // Redirect to products page after successful addition
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="flex">
      <div className="w-96 p-7">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full bg-orange-100"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>

            <input
              type="text"
              {...register("price", {
                required: "Price is required",
              })}
              className="input input-bordered w-full bg-orange-100"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-600" role="alert">
                {errors.price?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text ">Quantity</span>
            </label>

            <input
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
              })}
              className="input input-bordered w-full bg-orange-100"
              placeholder="Quantity"
            />
            {errors.quantity && (
              <p className="text-red-600" role="alert">
                {errors.quantity?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-orange-100"
              onChange={(e) =>
                setSelectedCategory({ ...selectedCategory, PCategoryID: e.target.value })
              }
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category.CategoryID} value={category.CategoryID}>
                  {category.CategoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>

            <input
              type="file"
              {...register("image", {
                required: "Image is required",
              })}
              className="input input-bordered p-2 w-full bg-orange-100"
              placeholder="Photo"
            />
            {errors.image && (
              <p className="text-red-600" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>
          <input type="submit" className="btn w-full mt-5" />
        </form>
      </div>
      <div className="avatar">
        <div className="w-96  ml-16 ">
          <img src="https://i.ibb.co/Xj4DC7j/7up2.jpg" alt="product" />
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
