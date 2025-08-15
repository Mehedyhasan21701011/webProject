import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner2 from "../../assests/image/bg2.jpeg";

const Contact = () => {
  return (
    <section
      style={{
        backgroundColor: "#f0f8ff",
      }}
      className="p-20"
    >
      <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto mb-16 mt-16">
        <div
          style={{
            backgroundColor: "rgb(24,46,82)",
          }}
          className="p-10 shadow-lg text-white bg-success"
        >
          <FontAwesomeIcon
            style={{
              color: "#e22937",
              height: 50,
              width: 50,
            }}
            icon={faHouse}
            className="mb-4"
          />
          <h1 className="text-xl heading font-bold">
            {" "}
            4214 Arlington Avenue Des Arc, AR 72040, USA
          </h1>
        </div>
        <div
          style={{
            backgroundColor: "seagreen",
          }}
          className="p-10 shadow-lg text-white"
        >
          <FontAwesomeIcon
            style={{
              color: "#e22937",
              height: 50,
              width: 50,
            }}
            icon={faPhone}
            className="mb-4"
          />
          <h1 className="heading font-bold text-xl">(+1) 518-636-6052</h1>
          <h1 className="heading font-bold text-xl">Mon-Sat 9:00am-5:00pm</h1>
        </div>
        <div
          style={{
            backgroundColor: "#052046",
            color: "white",
          }}
          className="p-10 shadow-lg"
        >
          <FontAwesomeIcon
            style={{
              color: "#e22937",
              height: 50,
              width: 50,
            }}
            icon={faEnvelope}
            className="mb-4"
          />
          <h1 className="heading font-bold text-xl">Info@carhut.com</h1>
          <h1 className="heading font-bold text-xl">24 X 7 online support</h1>
        </div>
      </div>
      <div>
        <h1 className="para-link text-center text-2xl font-bold">
          Get In Touch
        </h1>
        <p style={{ width: 600 }} className="mx-auto para-link mt-4">
          Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend
          quam. Taciti tortor aenean nisl dapibus.
        </p>
        <div className="flex  mt-8 mx-auto w-4/5">
          <div>
            <input
              style={{ width: 500 }}
              type="text"
              placeholder="your name"
              className="input input-bordered w-full  "
            />{" "}
            <br />
            <input
              style={{ width: 500 }}
              type="text"
              placeholder="your email"
              className="input input-bordered w-full mt-4"
            />{" "}
            <br />
            <input
              style={{ width: 500 }}
              type="text"
              placeholder="subject"
              className="input input-bordered w-full mt-4"
            />{" "}
            <br />
            <input
              style={{ width: 500 }}
              type="text"
              placeholder="message"
              className="input input-bordered w-full mt-4 "
            />{" "}
            <br />
          </div>
          <div className="ml-8">
            <textarea
              style={{ width: 500 }}
              className="textarea"
              placeholder="Bio"
            ></textarea>{" "}
            <br />
            <button
              style={{
                backgroundColor: "#8f1d26",
                width: 100,
              }}
              className="btn p-4  mt-4 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
