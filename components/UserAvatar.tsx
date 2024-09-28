import Image from "next/image";
import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-4">
      <Image
        width={20}
        height={20}
        src={session.user.image!}
        alt="User Avatar"
      />
      <p>{session.user.name}</p>
    </div>
  );
}
