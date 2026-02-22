import { useEffect, useState } from "react";
import api from "../api";

function TestApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("test/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  return (
    <div>
      <h2>Django Response:</h2>
      <p>{message}</p>
    </div>
  );
}

export default TestApi;
