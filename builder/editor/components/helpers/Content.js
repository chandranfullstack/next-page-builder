import { useRef } from "react";
const Content = ({ url,text,setText, onUpload, onChange }) => {
    const input = useRef(null);
    //const [text, setText] = useState("");
  
    const handleInputChange = (e) => {
      setText(e.target.value);
    };
  
    const handleUploadClick = () => {
      if (input.current) {
        input.current.click();
      }
    };
  
    const handleSetClick = () => {
      onChange();
    };
  
    return (
      <div className="mt-4 mb-4">
        {!url ? (
          <div>
            <div className="flex justify-center mt-8 mb-4">
              <input
                ref={input}
                type="file"
                onChange={onUpload}
                style={{ display: "none" }}
              />
              <button
                className="rounded-md px-4 py-2 text-sm font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent"
                onClick={handleUploadClick}
              >
                Upload
              </button>
            </div>
            <div className="flex justify-center mb-4">OR</div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Eg. https://www.w3schools.com/html/pic_trulli.jpg"
                onChange={handleInputChange}
              />
              <button
                onClick={handleSetClick}
                className={`rounded-md px-4 py-2 text-sm font-medium bg-transparent border text-blue-500 hover:opacity-50 border border-transparent ${
                  text !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={text === ""}
              >
                Set
              </button>
            </div>
          </div>
        ) : (
          <img src={url} />
        )}
      </div>
    );
};

export default Content
  