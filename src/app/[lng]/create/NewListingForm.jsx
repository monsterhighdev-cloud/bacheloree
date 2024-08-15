import Input from "@/app/components/UI/Input";
import Select from "@/app/components/UI/Select";
import { useEffect, useState } from "react";

const NewListingForm = ({ query, setQuery }) => {
  const [formData, setFormDate] = useState({
    country: "bangladesh",
    city: "dhaka",
    area: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormDate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (formData.area && formData.location) {
      setQuery(
        `${formData.location && formData.location}, ${
          formData.area && formData.area
        }, ${formData.city && formData.city}, ${
          formData.country && formData.country
        }`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.city, formData.country, formData.area, formData.location]);

  return (
    <div className="container py-12">
      <div className="text-center">
        <h1>List a new room</h1>
      </div>
      <form action="" className="space-y-4 mt-8 bg-base-200 p-4 rounded-box">
        <div className="row">
          <Input label="Title" placeholder="Enter Your Listing Title" />
          <Input label="Date" type="date" />
        </div>
        <div className="row">
          <Select
            label="Select Gender"
            items={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="row">
          <Select
            label="Select Country"
            items={[
              { value: "bangladesh", label: "Bangladesh", selected: true },
              //   { value: "india", label: "India" },
            ]}
            value={formData.country}
            onChange={(e) => handleChange(e)}
          />
          <Select
            label="Select City"
            items={[
              //   { value: "khulna", label: "Khulna" },
              { value: "dhaka", label: "Dhaka", selected: true },
            ]}
            defaultValue={formData.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="row">
          <Select
            label="Select Area"
            items={[
              { value: "uttara", label: "Uttara" },
              //   { value: "mirpur", label: "Mirpur" },
              //   { value: "badda", label: "Badda" },
            ]}
            value={formData.area}
            id="area"
            onChange={(e) => handleChange(e)}
          />
          <Select
            label="Select Location"
            items={[
              { value: "sector 10", label: "Sector 10" },
              { value: "sector 14", label: "Sector 14" },
            ]}
            value={formData.location}
            id="location"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </div>
  );
};
export default NewListingForm;
