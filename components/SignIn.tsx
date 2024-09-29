import { signIn } from "@/auth";

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("github");
			}}
		>
			<button type="submit">Continue with GitHub</button>
		</form>
	);
}
