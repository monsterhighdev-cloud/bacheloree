import _ from "lodash";
import Image from "next/image";
import { useRef, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";

const NewListingFormImageUpload = ({ productFile, setProductFile, t }) => {
  const [productPreview, setProductPreview] = useState([]);

  const ref = useRef();

  const handleFileSelect = (e) => {
    e.preventDefault();
    const data = e.target.files;
    let files = [];
    let previews = [];

    for (let i = 0; i < data.length; i++)
      if (productFile.length + i < 4) files.push({ file: data[i], index: i });
    for (let i = 0; i < data.length; i++)
      if (productFile.length + i < 4)
        previews.push({ preview: URL.createObjectURL(data[i]), index: i });

    console.log(files);

    setProductFile((prev) => [...prev, ...files]);
    setProductPreview((prev) => [...prev, ...previews]);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.files;

    let files = [];
    let previews = [];

    for (let i = 0; i < data.length; i++)
      if (productFile.length + i < 4) files.push({ file: data[i], index: i });
    for (let i = 0; i < data.length; i++)
      if (productFile.length + i < 4)
        previews.push({ preview: URL.createObjectURL(data[i]), index: i });

    console.log(files);

    setProductFile((prev) => [...prev, ...files]);
    setProductPreview((prev) => [...prev, ...previews]);
  };

  const handleClick = () => {
    if (productFile.length < 4) {
      ref.current.click();
    }
  };

  const removePicture = (index) => {
    let newArr = _.cloneDeep(productPreview);
    newArr = newArr.filter((item) => item.index != index);
    setProductPreview(newArr);

    let newFiles = _.cloneDeep(productFile);
    newFiles = newFiles.filter((item) => item.index != index);
    setProductFile(newArr);
  };

  return (
    <div className="w-full">
      <div className="w-full flex gap-4 overflow-x-auto">
        {productPreview.map((preview) => (
          <div key={preview.index} className="relative">
            <div className="w-40 h-40 rounded-box">
              <Image
                src={preview.preview}
                className="rounded-box bg-base-100 object-contain"
                alt="product photo"
              />
            </div>
            <span
              className="absolute top-0 right-0 p-1 bg-black text-white rounded-full cursor-pointer"
              onClick={() => removePicture(preview.index)}
            >
              <IoCloseCircleOutline className="text-2xl" />
            </span>
          </div>
        ))}
      </div>
      <div className="w-full mt-4">
        <div
          className="rounded-box border border-gray-300 p-8 bg-white transition-all cursor-pointer "
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleFileDrop}
          onClick={handleClick}
        >
          <input
            ref={ref}
            type="file"
            className="hidden"
            multiple
            accept=".jpg, .jpeg, .png"
            onChange={handleFileSelect}
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <GoPlusCircle className="text-2xl" />
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {productPreview.length === 4
                ? t("max_added")
                : productPreview.length
                ? `${productPreview.length} ${t("upload_count")}`
                : t("upload_msg")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewListingFormImageUpload;
