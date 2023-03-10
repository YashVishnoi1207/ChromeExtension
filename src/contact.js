import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    FullName: "",
    email: "",
    TestInvitationCode: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { FullName, email, TestInvitationCode } = userData;

    if (FullName && email && TestInvitationCode) {
      const res = fetch(
        "https://chromeextension-2adfb-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName,
            email,
            TestInvitationCode,
          }),
        }
      );

      if (res) {
        setUserData({
          FullName: "",
          email: "",
          TestInvitaionCode: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <form style={{ padding: "1rem", textAlign: "center" }} method="POST">
        <div style={{ marginBottom: "1rem" }}>
          <input
            className="form-field"
            type="text"
            name="FullName"
            id=""
            placeholder="Full Name"
            value={userData.FullName}
            onChange={postUserData}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            className="form-field"
            type="text"
            name="email"
            id=""
            placeholder="Email ID"
            value={userData.email}
            onChange={postUserData}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            className="form-field"
            type="text"
            name="TestInvitationCode"
            id=""
            placeholder="Enter Your TestInvitationCode"
            value={userData.TestInvitationCode}
            onChange={postUserData}
          />
        </div>
        <button
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            border: "0",
            borderRadius: "10px",
            padding: "0.3rem 1rem"
          }}
          type="submit"
          onClick={submitData}>
          Start Test
        </button>
      </form>
    </>
  );
};

export default Contact;