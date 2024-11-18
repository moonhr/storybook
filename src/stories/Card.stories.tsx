// src/stories/Card.stories.tsx

// Storybook에서 제공하는 타입들을 임포트합니다.
import type { Meta, StoryObj } from "@storybook/react";

// Card 컴포넌트를 임포트합니다.
import Card from "../components/Card";

// 스토리북에서 사용할 메타데이터를 정의합니다.
const meta: Meta<typeof Card> = {
  // 스토리북 사이드바에 표시될 경로를 설정합니다.
  title: "Example/Card",
  // 스토리북에서 렌더링할 컴포넌트를 지정합니다.
  component: Card,
  // 자동으로 문서화를 생성하기 위한 태그를 추가합니다.
  tags: ["autodocs"],
  // onClick 이벤트를 액션으로 처리하여 스토리북에서 클릭 이벤트를 시각적으로 확인할 수 있도록 설정합니다.
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// 메타데이터를 기본 내보내기로 설정하여 스토리북이 이를 인식하도록 합니다.
export default meta;

// 스토리 객체의 타입을 정의합니다.
type Story = StoryObj<typeof Card>;

// 기본 Card 스토리를 정의합니다.
export const Default: Story = {
  // Card 컴포넌트에 전달할 기본 props를 설정합니다.
  args: {
    // 이미지 URL을 설정합니다.
    image: "https://via.placeholder.com/150",
    // 이미지의 너비를 설정합니다.
    imageWidth: 150,
    // 이미지의 높이를 설정합니다.
    imageHeight: 150,
    // 카드의 제목을 설정합니다.
    title: "Sample Card",
    // 카드의 설명을 설정합니다.
    description: "This is a description of the card.",
  },
};

// 긴 설명을 가진 Card 스토리를 정의합니다.
export const WithLongDescription: Story = {
  // Card 컴포넌트에 전달할 props를 설정합니다.
  args: {
    // 이미지 URL을 설정합니다.
    image: "https://via.placeholder.com/150",
    // 이미지의 너비를 설정합니다.
    imageWidth: 150,
    // 이미지의 높이를 설정합니다.
    imageHeight: 150,
    // 카드의 제목을 설정합니다.
    title: "Sample Card with Long Description",
    // 카드의 긴 설명을 설정하여 텍스트 오버플로우 시의 동작을 테스트합니다.
    description:
      "This is a much longer description of the card to test how it handles overflow text.",
  },
};
