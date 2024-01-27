import React, { useEffect } from "react";
import logo from "../images/logo.svg";
import bell from "../images/bell.svg";
import person from "../images/person.svg";
import book from "../images/book.svg";
import axios from "axios";
let profile =
  "https://s3-alpha-sig.figma.com/img/d48a/448f/a58ebd0c1382e3f118f3a2bc22b6dfb5?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIwuVMtndCclt1wNfU0JZlNcEwRqGJ8IJShYxlF89JaYarSkD5s8peSPE0o55eBCh5~7xglRd2rSgT9M92fjlnZRNjtGOigMi1kZp0VyCdTfNAxWHrYKG7dEB-97wT-0hwnXZ7t6AoX9ldPBd7hcKCU0arlpJZCOL6uRd8Xx1Cd7VQ3VSr6PQscCDT9WHtHf8-XJSt1UjRxQxqZubpoqoG5sl5q0dWVupTwSBSQ1Zb2ahshPcNBMhNOyM25FdhvmajCGBSof2KOZq1QrXpRB8HDyNdtvpN7jxQeotY92Jj9egkJILkY8Xz-jU6AWVU0NWy6zb38zs9sCHrvNnGLEzw__";

const Navbar = ({ setApiData, value, setValue, setSelected }) => {
  function handleSubmit(e) {
    e && e.preventDefault();
    setSelected("");
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: value || "Harry Potter",
        },
      })
      .then((response) => {
        console.log(response.data.items);
        setApiData(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="" />
        <span style={{ display: "flex", alignItems: "center" }}>
          <h1>KeazoN</h1>
          <p>BOOKS</p>
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <img src={book} alt="" />
        <img src={bell} alt="" />
        <img src={person} alt="" />
        <img className="profile" src={profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
