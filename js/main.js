const dataFetch = async () => {
  const params = new URLSearchParams();
  params.append("email", "s.karimeddin@innopolis.university");
  console.log("https://fwd.innopolis.university/api/hw2?" + params.toString());
  const response = await fetch("https://fwd.innopolis.university/api/hw2?" + params.toString());
  const data = await response.json();
  return data;
};
const comicFetch = async (id) => {
  const params = new URLSearchParams();
  params.append("id",id);
  console.log("https://fwd.innopolis.university/api/comic?" + params.toString());
  const response = await fetch("https://fwd.innopolis.university/api/comic?" + params.toString());
  const data = await response.json();
  return data;
};


const id= await dataFetch();
const comm = await comicFetch(id);
console.log(comm);
const image = document.getElementById("comicc");
image.src = comm.img;
image.alt =comm.alt
const title = document.getElementById("title");
console.log(comm.title)
title.innerText = comm.safe_title;
const date = document.getElementById("date");
const dat= new Date(comm.month.toString()+"/"+comm.day.toString()+"/"+comm.year.toString());
date.innerText = dat.toLocaleDateString();
