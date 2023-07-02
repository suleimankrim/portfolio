import { formatDistanceToNow } from "date-fns";

const fetchId = async (): Promise<string> => {
  const params = new URLSearchParams();
  params.append("email", "s.karimeddin@innopolis.university");
  console.log("https://fwd.innopolis.university/api/hw2?" + params.toString());
  const response = await fetch(
    "https://fwd.innopolis.university/api/hw2?" + params.toString()
  );
  const id: string = await response.json();
  return id;
};

interface Joke {
  img: string;
  alt: string;
  year: string;
  month: string;
  safe_title: string;
  day: string;
}

const fetchComic = async (): Promise<Joke> => {
  const params = new URLSearchParams();
  const id = await fetchId();
  params.append("id", id);
  console.log(
    "https://fwd.innopolis.university/api/comic?" + params.toString()
  );
  const response = await fetch(
    "https://fwd.innopolis.university/api/comic?" + params.toString()
  );
  const data: Joke = await response.json();
  return data;
};

const f = async (): Promise<void> => {
  const comm: Joke = await fetchComic();
  console.log(comm);
  const image = document.getElementById("comicc") as HTMLImageElement;
  image.src = comm.img;
  image.alt = comm.alt;
  const title = document.getElementById("title") as HTMLElement;
  title.innerText = comm.safe_title;
  const date = document.getElementById("date") as HTMLElement;
  const dat = new Date(
    comm.month.toString() +
      "/" +
      comm.day.toString() +
      "/" +
      comm.year.toString()
  );
  date.innerText = dat.toLocaleDateString();
  const b = formatDistanceToNow(
    new Date(
        comm.month.toString() +
        "/" +
        comm.day.toString() +
        "/" +
        comm.year.toString()
    )
  );
  const t = document.getElementById("kk") as HTMLElement;
  t.innerText = b;
};

f();
console.log("cfwokeeeeeeeeeeeeeeeee");
