import { auth } from "../auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function UserAvatar() {
	const session = await auth();

	if (!session?.user) return null;

	return (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src={session.user.image!} alt="User Avatar" />
				<AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
			</Avatar>
			<p>{session.user.name}</p>
		</div>
	);
}
