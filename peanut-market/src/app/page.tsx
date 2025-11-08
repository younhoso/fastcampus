"use client";

import ModalProvider from "@/provider/ModalProvider";
import ModalTest from "@/components/ModalTest/ModalTest";
import { useState } from "react";

export default function HomePage() {
  const [openModal, setOpenMoal] = useState(false);

  return (
    <>
      <div onClick={() => setOpenMoal(true)}>HomePage</div>

      {openModal && (
        <ModalProvider>
          <ModalTest>
            <button onClick={() => setOpenMoal(false)}>닫기</button>
            <div className="desc">포스트 상세 페이지!!</div>
          </ModalTest>
        </ModalProvider>
      )}

      <button className="btn btn-outline">Default</button>
      <button className="btn btn-primary">Default</button>
    </>
  );
}
