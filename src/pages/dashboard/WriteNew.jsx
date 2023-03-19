import DashboardLayout from "../../components/DashboardLayout";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Button } from "react-bootstrap";

const WriteNew = () => {
  const { user, logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <DashboardLayout>
        <div>
          <h1>Write New</h1>
          <h5>{user.email}</h5>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </DashboardLayout>
    </>
  );
};

export default WriteNew;
