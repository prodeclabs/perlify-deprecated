import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import UserAvatar from "@/components/UserAvatar";

export default async function Home() {
	const session = await auth();

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col gap-4 justify-center items-center">
				<h1 className="text-4xl font-bold">Welcome to Perlify</h1>
				<UserAvatar />
				{session?.user ? <SignOut /> : <SignIn />}
			</div>
		</div>
	);
}
