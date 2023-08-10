import Link from "next/link";

export default function AddWave() {
  return (
    <Link href={"/waves/new"}>
      <button className="bg-white rounded-full flex items-center py-1 px-2 shadow-lg border text-pink-900 active:border-violet-700 active:bg-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5  pr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="text-sm text-black"> New Wave</span>
      </button>
    </Link>
  );
}
