import { useState, useEffect } from "react";

const url =
  process.env.NODE_ENV === "production"
    ? "https://posobota-test-2.vercel.app/api/hello"
    : "http://localhost:3000/api/hello";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: "{hello{id,title}}"
    })
      .then(response => response.json())
      .then(({ data }) => setData(data));
  }, []);

  if (data == null) {
    return "loading";
  }

  return (
    <ul>
      {data.hello.map(talk => {
        return <li key={talk.id}>{talk.title}</li>;
      })}
    </ul>
  );
}
