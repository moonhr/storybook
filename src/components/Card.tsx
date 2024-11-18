// src/components/Card.tsx
import React from "react";
import Image from "next/image";
import "./card.css";

export interface CardProps {
  /** 이미지 URL */
  image: string;
  /** 카드 제목 */
  title: string;
  /** 카드 설명 */
  description: string;
  /** 카드 클릭 핸들러 (선택 사항) */
  onClick?: () => void;
}

const Card = ({ image, title, description, onClick }: CardProps) => {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <Image src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
