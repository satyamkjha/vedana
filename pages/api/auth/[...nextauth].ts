import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		FacebookProvider({
			clientId: '275509261632921',
			clientSecret: '503a9c6e15fd96abfc70e9886ea504e1',
		}),
	],
};
export default NextAuth(authOptions);
