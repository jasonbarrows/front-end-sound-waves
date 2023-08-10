import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export function UserSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center bg-white border-4 rounded-xl shadow-lg p-2">
      <div className="bg-neutral-200 rounded-full w-32 h-32 animate-pulse "></div>
      <div className="bg-neutral-200 rounded-full w-32 h-8 animate-pulse mt-2"></div>
    </div>
  );
}

export function WaveDetailSkeleton() {
  return (
    <div className="p-4 sm:px-8 sm:py-6 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="flex item-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-neutral-200 rounded-full animate-pulse"></div>
          <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
          <span className="text-neutral-300">•</span>
          <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="w-full flex items-center space-x-2 text-sm font-medium">
        <div className="w-10 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        <span className="text-neutral-300">/</span>
        <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      </div>
      <div className="flex justify-end space-x-5">
        <div className="w-6 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        <div className="w-6 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export function WaveSkeleton() {
  return (
    <div className="p-4 sm:px-8 sm:py-6 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="flex item-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-neutral-200 rounded-full animate-pulse"></div>
          <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
          <span className="text-neutral-300">•</span>
          <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="w-full h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      <div className="w-full h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      <div className="w-full flex items-center space-x-2 text-sm font-medium">
        <div className="w-10 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        <span className="text-neutral-300">/</span>
        <div className="w-16 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      </div>
      <div className="flex justify-end space-x-5">
        <div className="w-6 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
        <div className="w-6 h-6 bg-neutral-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export function BoardSkeleton() {
  return (
    <div className="p-4 w-full shadow border rounded-xl bg-white flex flex-col space-y-2">
      <div className="w-full h-8 bg-neutral-200 rounded-full animate-pulse"></div>
      <div className="w-full h-4 bg-neutral-200 rounded-full animate-pulse"></div>
      <div className="w-full h-4 bg-neutral-200 rounded-full animate-pulse"></div>
      <div className="w-32 h-4 bg-neutral-200 rounded-full animate-pulse"></div>
    </div>
  );
}
