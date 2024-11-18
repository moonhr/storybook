// src/components/Card.tsx
import React from "react";
import Image from "next/image";

export interface CardProps {
  /** Image URL */
  image: string;
  /** Image width */
  imageWidth: number;
  /** Image height */
  imageHeight: number;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Click event handler (optional) */
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  imageWidth,
  imageHeight,
  title,
  description,
  onClick,
}) => (
  <div
    className="card"
    onClick={onClick}
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <Image
      src={image}
      alt={title}
      width={imageWidth}
      height={imageHeight}
      className="card-image"
    />
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

export default Card;
