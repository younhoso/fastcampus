"use client";

import ModalProvider from "@/provider/ModalProvider";
import ModalTest from "@/components/ModalTest/ModalTest";
import { useState } from "react";
import { BottomNav } from "@/components/BottomNav/BottomNav";
import { Hand, Home, MessageCircle, UserRound } from "lucide-react";

export default function HomePage() {
  const [openModal, setOpenMoal] = useState(false);

  return (
    <>
      <div onClick={() => setOpenMoal(true)}>HomePage</div>
      <BottomNav
        items={[
          { label: "홈", href: "/", icon: <Home /> },
          { label: "중고거래", href: "/trade", icon: <Hand /> },
          {
            label: "채팅",
            href: "/chats",
            icon: <MessageCircle />,
            badgeCount: 3,
          },
          { label: "내 정보", href: "/me", icon: <UserRound /> },
        ]}
      />
      {openModal && (
        <ModalProvider>
          <ModalTest>
            <button onClick={() => setOpenMoal(false)}>닫기</button>
            <div className="desc">포스트 상세 페이지!!</div>
          </ModalTest>
        </ModalProvider>
      )}
    </>
  );
}
