"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { Home, Hand, MessageCircle, UserRound } from "lucide-react";

// ===== Types
export interface BottomNavItem {
  label: string;
  href: string;
  icon: ReactNode;
  /** 활성화 판단을 커스터마이즈하고 싶을 때 (기본값: pathname.startsWith(href)) */
  isActive?: (pathname: string) => boolean;
  /** 뱃지 숫자 (예: 새 메시지 수) */
  badgeCount?: number;
  /** 비활성화 처리 */
  disabled?: boolean;
}

export interface BottomNavProps {
  items?: BottomNavItem[];
  /** 바텀 안전영역 사용 (iOS notch 대응). 기본값 true */
  useSafeArea?: boolean;
  /** 데스크톱에서 숨김 여부. 기본값 true (md 미만에서만 표시) */
  hideOnDesktop?: boolean;
}

// ===== Default items (스크린샷 유사 구성)
const defaultItems: BottomNavItem[] = [
  { label: "홈", href: "/", icon: <Home size={22} strokeWidth={2} /> },
  { label: "거래", href: "/trade", icon: <Hand size={22} strokeWidth={2} /> },
  {
    label: "채팅",
    href: "/chats",
    icon: <MessageCircle size={22} strokeWidth={2} />,
    badgeCount: 0,
  },
  {
    label: "내 정보",
    href: "/me",
    icon: <UserRound size={22} strokeWidth={2} />,
  },
];

// ===== Component
export function BottomNav({
  items = defaultItems,
  useSafeArea = true,
  hideOnDesktop = true,
}: BottomNavProps) {
  const pathname = usePathname();

  const classes = useMemo(() => {
    const base = [
      "fixed bottom-0 left-0 right-0 z-40",
      "bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      "border-t border-neutral-800",
      "shadow-[0_-6px_20px_rgba(0,0,0,0.35)]",
    ];
    if (hideOnDesktop) base.push("md:hidden");
    return base.join(" ");
  }, [hideOnDesktop]);

  return (
    <nav aria-label="하단 내비게이션" className={classes}>
      <div
        className={[
          "mx-auto grid max-w-xl grid-cols-4 gap-1",
          "px-2 pt-2",
          useSafeArea
            ? "pb-[calc(env(safe-area-inset-bottom,0px)+8px)]"
            : "pb-2",
        ].join(" ")}
      >
        {items.map((item) => {
          const active =
            item.isActive?.(pathname) ?? pathname.startsWith(item.href);
          const state = item.disabled
            ? "opacity-40 pointer-events-none"
            : active
              ? "text-white"
              : "text-neutral-400 hover:text-white";

          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={[
                "relative flex items-center justify-center",
                "rounded-2xl p-2 transition-colors",
                state,
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              <div className="flex flex-col items-center gap-1">
                {/* Icon */}
                <div
                  className={[
                    "grid place-items-center",
                    "size-9 rounded-2xl",
                    active ? "bg-neutral-800" : "bg-transparent",
                  ].join(" ")}
                >
                  {item.icon}
                </div>
                {/* Label */}
                <span className="text-[11px] leading-none">{item.label}</span>
              </div>

              {/* Active indicator */}
              {active && (
                <span
                  className="absolute inset-x-6 -top-[2px] h-[3px] rounded-full bg-white/90"
                  aria-hidden
                />
              )}

              {/* Badge */}
              {typeof item.badgeCount === "number" && item.badgeCount > 0 && (
                <span
                  className="absolute right-4 top-1 grid min-w-5 -translate-y-1/3 translate-x-1/3 place-items-center rounded-full bg-red-600 px-1 text-[10px] font-medium text-white"
                  aria-label={`새 알림 ${item.badgeCount}개`}
                >
                  {item.badgeCount > 99 ? "99+" : item.badgeCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

// ===== Usage example (페이지 상단/하단 어느 곳에서든 호출)
// import { BottomNav } from "@/components/BottomNav";
// export default function Page() {
//   return (
//     <>
//       <main className="pb-24">{/* 컨텐츠 (바텀바 높이만큼 패딩) */}</main>
//       <BottomNav />
//     </>
//   );
// }

// ===== Helper: 페이지 컨텐츠가 바텀바에 가리지 않게 하는 유틸 (선택)
export function BottomSpacer({ height = 88 }: { height?: number }) {
  return (
    <div
      style={{ height: `calc(${height}px + env(safe-area-inset-bottom, 0px))` }}
      aria-hidden
    />
  );
}
