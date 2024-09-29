import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("github");
			}}
		>
			<Button type="submit">Continue with GitHub</Button>
		</form>
	);
}
