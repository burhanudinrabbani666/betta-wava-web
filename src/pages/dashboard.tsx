import { useUser } from "@/module/auth/hooks";

export function Dashboard() {
  const { user, isPending, error } = useUser();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm text-red-500">Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] p-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-xl font-semibold text-white">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <h1 className="mt-4 text-xl font-semibold text-black">
            {user?.username}
          </h1>

          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-200" />

        {/* Info Section */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">First Name</span>
            <span className="font-medium text-black">{user?.firstName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Last Name</span>
            <span className="font-medium text-black">{user?.lastName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span className="max-w-[180px] truncate text-right font-medium text-black">
              {user?.id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Created At</span>
            <span className="font-medium text-black">
              {new Date(user?.createdAt || "").toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * createdAt: "2026-05-08T14:31:16.064Z"
email: "wowo@wowo.wo"
firstName: "wowo"
id: "01KR3ZZXZ04P8M89HWDNN832ER"
lastName: "wowo"
updatedAt: "2026-05-08T14:31:16.064Z"
username : "wowo"
 */
