import Select from "@/app/components/UI/Select";
import { useTranslation } from "@/app/il8n/client";
import { useEffect, useState } from "react";

const MapFilters = ({ lng, query, setQuery, sidebarOpen, setSidebarOpen }) => {
  const { t } = useTranslation(lng, "createNewList");

  const [formData, setFormData] = useState({
    country: "bangladesh",
    city: "dhaka",
    area: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("sidebarContainer")) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (formData.area && formData.location) {
      setQuery(
        `${formData?.location}, ${formData?.area}, ${formData?.city}, ${formData?.country}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.city, formData.country, formData.area, formData.location]);

  return (
    <div
      className={`fixed lg:relative top-0 p-4 w-full h-full bg-slate-950/30 lg:bg-transparent transition-all ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 sidebarContainer z-50`}
      onClick={handleOutsideClick}
    >
      <div className="bg-base-200 lg:w-[400px] rounded-box mt-12 lg:mt-0 p-4">
        <h2>What are looking for today</h2>
        <form action="" className="space-y-4 mt-4">
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
          </div>
          <div className="row">
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
          </div>
          <div className="row">
            {" "}
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
    </div>
  );
};
export default MapFilters;
