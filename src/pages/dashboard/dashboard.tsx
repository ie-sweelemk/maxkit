import { supabase } from "shared/api";
import { Button, successToast, errorToast } from "shared/ui";

const Dashboard: React.FC = () => {
  const getUser = async () => {
    // const user = await supabase.auth.getUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc4MzgxODA4LCJzdWIiOiJiNjUxNzc4NS1kMDU0LTQ1NjYtOWUxYy1mN2E0NTEyNzYzN2UiLCJlbWFpbCI6InN3ZWVsZW1rMUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTY3ODM3NjkzNn1dLCJzZXNzaW9uX2lkIjoiNTE0MDg1MTQtZjYzNC00YjI2LWEwYjMtYzk0YWRjNzNlZTY2In0.CZv7O7QiegLluYQC-7Fulv0hHDMrGI_RAN3H4gXNZPA")
    const user = await supabase.auth.admin.listUsers();
    console.log(user);
  }
  return <>
    <div>Dashboard</div>
    <Button label="Call Toast" onClick={() => {
      successToast("Congrats")
    }}/>
    <Button label="get User" onClick={getUser}/>
  </>;
};

export default Dashboard;
