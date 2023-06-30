'use strict';
import {format } from 'date-fns'

const b= format(new Date(2023, 1, 11), 'yyyy-MM-dd')

const t = document.getElementById('kk') as HTMLElement;
t.innerText = b;
const fetchId =async () => {
    const params = new URLSearchParams();
    params.append("email", "s.karimeddin@innopolis.university");
    console.log("https://fwd.innopolis.university/api/hw2?" + params.toString());
    const response = await fetch(
        "https://fwd.innopolis.university/api/hw2?" + params.toString()
    );
    const id: string = await response.json();
    return id;
};
interface joke{
    img:string;
    alt:string;
    year:string;
    month:string;
    safe_title:string;
    day:string;}
const fetchComic=async () => {
    const params = new URLSearchParams();
    const id = await fetchId();
    params.append("id",id);
    console.log("https://fwd.innopolis.university/api/comic?" + params.toString());
    const response = await fetch("https://fwd.innopolis.university/api/comic?" + params.toString());
    const data : joke= await response.json();
    return data;
};
const f= async ()=>{
const comm = await fetchComic();
console.log(comm);
const image = document.getElementById("comicc") as HTMLImageElement;
image.src = comm.img;
image.alt =comm.alt
const title = document.getElementById("title") as HTMLElement;
title.innerText = comm.safe_title;
const date = document.getElementById("date") as HTMLElement;
const dat= new Date(comm.month.toString()+"/"+comm.day.toString()+"/"+comm.year.toString());
date.innerText = dat.toLocaleDateString();}
f();
console.log("cfwokeeeeeeeeeeeeeeeee")