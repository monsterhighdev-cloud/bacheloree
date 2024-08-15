import Input from "@/app/components/UI/Input";
import Select from "@/app/components/UI/Select";
import { useTranslation } from "@/app/il8n/client";
import { useEffect, useState } from "react";
import NewListingFormImageUpload from "./NewListingFormImageUpload";

const NewListingForm = ({ query, setQuery, lng }) => {
  const { t } = useTranslation(lng, "createNewList");

  const [formData, setFormDate] = useState({
    country: "bangladesh",
    city: "dhaka",
    area: "",
    location: "",
  });
  const [productFile, setProductFile] = useState([]);

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
        <h1>{t("heading")}</h1>
      </div>
      <form action="" className="space-y-4 mt-8 bg-base-200 p-4 rounded-box">
        <div className="row">
          <NewListingFormImageUpload
            t={t}
            productFile={productFile}
            setProductFile={setProductFile}
          />
        </div>
        <div className="row">
          <Input label={t("title")} placeholder={t("title_placeholder")} />
          <Input label={t("date")} type="date" />
        </div>
        <div className="row">
          <Select
            label={t("gender_label")}
            items={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="row">
          <Select
            label={t("country_label")}
            items={[
              { value: "bangladesh", label: "Bangladesh", selected: true },
              //   { value: "india", label: "India" },
            ]}
            value={formData.country}
            onChange={(e) => handleChange(e)}
          />
          <Select
            label={t("city_label")}
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
            label={t("area_label")}
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
            label={t("location_label")}
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
