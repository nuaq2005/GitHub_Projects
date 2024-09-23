import React from "react";
import Card from "./Card";

const Grid = () => {
    return (
    <div className = "Grid">
        <Card title = 'The Art Studio NY' description = 'Manhattan, NY' image = "/images/img1.jpg"/>
        <Card title = 'Dip N Paint' description = 'Forest Hills, NY' image = "/images/img2.jpg"/>
        <Card title = 'Creatively Wild Art Studio' description = 'Brooklyn, NY' image = "/images/img3.jpg"/>
        <Card title = 'Maison Clay' description = 'Brooklyn, NY' image = "/images/img4.jpg"/>
        <Card title = 'BrickHouse Ceramic Art Center' description = 'Long Island City, NY' image = "/images/img5.jpg"/>
        <Card title = 'Art & Clay Studio by Rabbit Hole Club' description = 'Flushing, NY' image = "/images/img6.jpg"/>
        <Card title = 'GHD Mosaic' description = 'Flushing, NY' image = "/images/img7.jpeg"/>
        <Card title = 'Loop of the Loom' description = 'Brooklyn, NY' image = "/images/img8.jpg" />
        <Card title = 'West Village Knit and Needle' description = 'Manhattan, NY' image = "/images/img9.jpg"/>
        <Card title = 'Needle & Stitch' description = 'Brooklyn, NY' image = "/images/img10.jpg"/>
    </div>
    )
}

export default Grid;