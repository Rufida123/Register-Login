import { useUser } from './UserContext';
export default function Dashboard(){
    const { user } = useUser();
return(
    <div>
        <h1>Hello</h1>
        {user ? (
        <p>Welcome back, {user.name || user.email}!</p>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
)
}