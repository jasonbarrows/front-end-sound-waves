import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Explicit({ censor }: { censor: boolean }) {
  return (
    !censor && (
      <div className="text-pink-600 flex items-center text-sm sm:text-base">
        <span className="block">Explicit</span>
        <span className="ml-1 sm:ml-2 w-6 h-6 sm:w-8 sm:h-8">
          <ExclamationTriangleIcon />
        </span>
      </div>
    )
  );
}
